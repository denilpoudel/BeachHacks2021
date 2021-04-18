import React from "react";
import Crab from './Cody_the_Crab.png';
import Clam from './Crypto_the_Clam.png';
import Shark from './Byte_the_Shark.png';
import emojis from './MoreEmojis.png';
import { Link } from "react-router-dom";
import { Button, Dropdown, Grid, Placeholder, Card, Image } from "semantic-ui-react";

function About() {
  return (
    <div>
      <Grid columns="equal" centered padded>
        <Grid.Column>
          <Button basic as={Link} to="/">
            Home
          </Button>
        </Grid.Column>
        <Grid.Column width={15} class="centered column" textAlign="center" style={{position: 'absolute', top: '20%'}}>
          <div style={{ fontSize: 30 }}>
            <Grid.Row>
              <Image 
                size='small'
                centered
                src={emojis} fluid>
              </Image>
              <b style={{ display: "inline" }}><br />Parking’s a BEACH</b>
              <p style={{ margin: 0, padding: 0 }}>
                was created by four CSULB<br />
                engineering students who<br />
                were fed up with parking.
              </p>
            </Grid.Row>
            <Grid.Row>
              <Image.Group>
                <Image src={Crab} centered fluid size='small' />
                <Image src={Clam} centered fluid size='small' />
                <Image src={Shark} centered fluid size='small' />
              </Image.Group>
            </Grid.Row>

            <Grid.Row>
              <p style={{ margin: 0, padding: 0, display: "inline" }}>
                Our team created{" "}
              </p>
              <b style={{ margin: 0, padding: 0, display: "inline" }}>
                sensors{" "}
              </b>
              <p style={{ margin: 0, padding: 0, display: "inline" }}>
                <br />to detect empty parking
                <br />spots on campus.
              </p>
            </Grid.Row>
          </div>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
}

export default About;
