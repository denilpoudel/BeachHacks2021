import React, { useState } from "react";
import emojis from "./Emojislol.png";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  Grid,
  GridRow,
  Image,
  Icon,
} from "semantic-ui-react";
import axios from "axios";

const options = [
  {
    key: "paloverdenorth",
    text: "Palo Verde North Parking Structure",
    value: "Palo Verde North Parking Structure",
  },
  {
    key: "paloverdesouth",
    text: "Palo Verde South Parking Structure",
    value: "Palo Verde South Parking Structure",
  },
  {
    key: "pyramidstructure",
    text: "Pyramid Parking Structure",
    value: "Pyramid Parking Structure",
  },
  { key: "g1", text: "G1", value: "G1" },
  { key: "g2", text: "G2", value: "G2" },
  { key: "g3", text: "G3", value: "G3" },
  { key: "g4", text: "G4", value: "G4" },
  { key: "g5", text: "G5", value: "G5" },
  { key: "g6", text: "G6", value: "G6" },
  { key: "g7", text: "G7", value: "G7" },
  { key: "g8", text: "G8", value: "G8" },
  { key: "g9", text: "G9", value: "G9" },
  { key: "g10", text: "G10", value: "G10" },
  { key: "g11", text: "G11", value: "G11" },
  { key: "g12", text: "G12", value: "G12" },
  { key: "g13", text: "G13", value: "G13" },
  { key: "g14", text: "G14", value: "G14" },
  { key: "g15", text: "G15", value: "G15" },
  { key: "e1", text: "E1", value: "E1" },
  { key: "e2", text: "E2", value: "E2" },
  { key: "e3", text: "E3", value: "E3" },
  { key: "e4", text: "E4", value: "E4" },
  { key: "e5", text: "E5", value: "E5" },
  { key: "e6", text: "E6", value: "E6" },
  { key: "e7", text: "E7", value: "E7" },
  { key: "e8", text: "E8", value: "E8" },
  { key: "e9", text: "E9", value: "E9" },
  { key: "e10", text: "E10", value: "E10" },
  { key: "e11", text: "E11", value: "E11" },
];

const Home = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [parkingArea, setParkingArea] = useState("");

  const url = "https://us-west2-beachhacks2021.cloudfunctions.net/function-2";

  const debug = () => {
    setIsSelected(true);

    axios.get(url).then((res) => {
      const persons = res.data;
      console.log(persons);
    });
  };

  const handleChange = (e, { name, value }) => {
    e.preventDefault();
    setParkingArea({ [name]: value }, console.log(parkingArea));
    setIsSelected(true);
  };

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Grid columns="equal" centered padded>
        <Grid.Column
          width={15}
          class="centered column"
          textAlign="center"
          style={{ position: "absolute", top: "20%" }}
        >
          <Grid.Row class="centered row">
            <Grid.Row>
              <Image size="medium" centered src={emojis} fluid></Image>
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
                name="parkingArea"
                options={options}
                onChange={handleChange}
              />
              <br />
              <br />
            </Grid.Row>
            <Grid.Row>
              {isSelected ? (
                <div>
                  <Button
                    color="green"
                    style={{ fontSize: 20 }}
                    as={Link}
                    to={{ pathname: "/specificspot", state: parkingArea }}
                  >
                    Let's go!
                  </Button>
                </div>
              ) : (
                <div>
                  <Button style={{ fontSize: 20 }}>Let's go!</Button>
                </div>
              )}
            </Grid.Row>
            <br />
            <Button icon labelPosition="left" secondary onClick={debug}>
              Debug <Icon name="eye" />
            </Button>
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
