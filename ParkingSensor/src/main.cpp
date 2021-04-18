#include <Arduino.h>
#include <NewPing.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <esp32-mqtt.h>
#include <ArduinoJson.h>

#define PING_PIN  5  // Arduino pin tied to both trigger and echo pins on the ultrasonic sensor.
#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.
#define uS_TO_S_FACTOR 1000000  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5 //Change to 300 for 5mins for non testing
#define LOOP_TIMES 5    //The amount of times ulrasonic sensor files
#define DETECTED_TIMES 3  //The amount of times 
#define ID 12;

RTC_DATA_ATTR int bootCount = 0;
 

bool detected = false;
RTC_DATA_ATTR bool prevDetected = false;  

NewPing sonar(PING_PIN, PING_PIN, MAX_DISTANCE); // NewPing setup of pin and maximum distance.


void MQTTRequest(){
  mqtt->loop();
  delay(10);  // <- fixes some issues with WiFi stability

  if (!mqttClient->connected()) {
    connect();
  }


  StaticJsonDocument<200> root;
 
  root["parkingLot"] = "G11";
  root["floor"] ="0";
  root["location"] ="11";
  root["available"] =detected;
  root["type"] ="ADA";

  char data[200];
  serializeJsonPretty(root, data);
  publishTelemetry(data);
  
}


void ultraSonicSensor(){

  int pulsedUltraSensor = 0;

  for (int i = 0; i<LOOP_TIMES; i++){
    delay(1000);           
    int ping_cm = sonar.ping_cm();   
    if (ping_cm >= 1)
      pulsedUltraSensor += 1;
      Serial.println(ping_cm);
      Serial.println(pulsedUltraSensor);
  }

  if (pulsedUltraSensor >= DETECTED_TIMES) {
    detected = true;
    Serial.println("DETECTED");
  }else
    Serial.println("NOT DETECTED");


}


void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}



void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Serial Connected");

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  setupCloudIoT();
  print_wakeup_reason();
  ultraSonicSensor();
  MQTTRequest();
 
 
 if (detected != prevDetected){
   Serial.println("detected doesnt equal prevDected");
   prevDetected = detected;
 }
 
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
 
 
  Serial.println("Going to sleep now");
  delay(1000);
  Serial.flush(); 
  esp_deep_sleep_start();
}

void loop() {
  
}