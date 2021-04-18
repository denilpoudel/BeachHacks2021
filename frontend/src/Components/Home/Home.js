import React, { useState } from "react";
import emojis from './Emojislol.png';
import { Link } from "react-router-dom";
import { Button, Dropdown, Grid, GridRow, Image } from "semantic-ui-react";

const options = [
  {
    key: "paloverdenorth",
    text: "Palo Verde North Parking Structure",
    value: "paloverdenorth",
  },
  {
    key: "paloverdesouth",
    text: "Palo Verde South Parking Structure",
    value: "paloverdesouth",
  },
  {
    key: "pyramidstructure",
    text: "Pyramid Parking Structure",
    value: "pyramidstructure",
  },
  { key: "g1", text: "G1", value: "g1" },
  { key: "g2", text: "G2", value: "g2" },
  { key: "g3", text: "G3", value: "g3" },
  { key: "g4", text: "G4", value: "g4" },
  { key: "g5", text: "G5", value: "g5" },
  { key: "g6", text: "G6", value: "g6" },
  { key: "g7", text: "G7", value: "g7" },
  { key: "g8", text: "G8", value: "g8" },
  { key: "g9", text: "G9", value: "g9" },
  { key: "g10", text: "G10", value: "g10" },
  { key: "g11", text: "G11", value: "g11" },
  { key: "g12", text: "G12", value: "g12" },
  { key: "g13", text: "G13", value: "g13" },
  { key: "g14", text: "G14", value: "g14" },
  { key: "g15", text: "G15", value: "g15" },
  { key: "e1", text: "E1", value: "e1" },
  { key: "e2", text: "E2", value: "e2" },
  { key: "e3", text: "E3", value: "e3" },
  { key: "e4", text: "E4", value: "e4" },
  { key: "e5", text: "E5", value: "e5" },
  { key: "e6", text: "E6", value: "e6" },
  { key: "e7", text: "E7", value: "e7" },
  { key: "e8", text: "E8", value: "e8" },
  { key: "e9", text: "E9", value: "e9" },
  { key: "e10", text: "E10", value: "e10" },
  { key: "e11", text: "E11", value: "e11" },
];

const Home = () => {
  return (
    <div style={{ fontFamily: "Montserrat"}}>
      <Grid columns="equal" centered padded>
        <Grid.Column width={15} class="centered column" textAlign="center" style={{position: 'absolute', top: '20%'}}>
          <Grid.Row class="centered row">
            <Grid.Row>
              <Image 
                size='medium'
                centered
                src={emojis} fluid>
              </Image>
              <span style={{ fontSize: 50 }}>
                <span style={{ fontWeight: "bolder" }}>
                  <br />
                  Parking's a BEACH.
                </span>
                <br />
                <br />
                Let's find you a spot.
                <br />
                <br />
              </span>
            </Grid.Row>
            <Grid.Row>
              <Button
                style={{ fontSize: 20 }}
                size="large"
                as={Link}
                to="/anyspot"
              >
                Give me any open spot
              </Button>
              <br />
              <br />
              <p style={{ fontSize: 20 }}>or</p>
              <Dropdown
                style={{ fontSize: 20 }}
                placeholder="Give me a spot in..."
                search
                selection
                clearable
                options={options}
              />
              <br />
              <br />
            </Grid.Row>
            <Grid.Row>
              <Button style={{ fontSize: 20 }}>Let's go!</Button>
            </Grid.Row>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Button basic floated="right" as={Link} to="/about">
            About
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
