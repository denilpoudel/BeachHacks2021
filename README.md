# Parking's a Beach
A commute to campus is one thing, but long treks through parking lots and structures in search of just one empty spot is a whole other beast. We created this web app, Parking’s a BEACH, as four CSU Long Beach students who were simply fed up with finding parking.

Created by Adam Serag, Denil Poudel, Katrina Orevillo, and Steven Toda for BeachHacks 2021. View our DevPost submission [here](https://devpost.com/software/parking-s-a-beach)!

Beachhacks 2021 Winner ```2nd Overall``` & ```Best Hardware Hack Sponsored by Digi-Key```

## How We Built It
For the user-facing frontend, we designed and prototyped our concept in Figma. From there, we used React to create multiple web pages, which connected to our backend database using Google Cloud Functions through Node Postgres. We also connected Google Cloud SQL to the PostgreSQL database and received Core IoT input from the hardware Ultra Sonic Sensor, which lets our backend know if a parking space is physically occupied or not.

Our Ultra Sonic Sensor was connected to the ESP32, which goes to sleep and wakes up every 5 seconds to conserve power (in real-life application, this process would take 5 minutes). When the ESP32 wakes up from deep sleep, it pings the Ultra Sonic Sensor and assesses if there is a vehicle or object present in the parking space. If there was previously a vehicle and it is no longer there, or if it was previously empty and now occupied, the ESP32 sends a JSON file to the Cloud IoT core with the location and state data.