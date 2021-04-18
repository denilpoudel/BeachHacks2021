import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Placeholder } from "semantic-ui-react";

export class SpecificSpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingArea: "",
      parkingLocation: "Pyramid Parking Structure",
      floor: "Floor 1",
      spots: "7",
    };
  }

  render() {
    const { parkingLocation, floor, spots } = this.state;
    console.log(this.state);
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Grid columns="equal" centered padded>
          <Grid.Column>
            <Button basic as={Link} to="/">
              Back
            </Button>
          </Grid.Column>
          <Grid.Column class="centered column" textAlign="center">
            <div>
              <span style={{ fontSize: 20 }}>There are available spots at</span>
              <br />
              <br />
              <span style={{ fontSize: 20, fontWeight: "bolder" }}>
                {parkingLocation}.
              </span>
              <br />
              <br />
              <span style={{ fontSize: 20, fontWeight: "bolder" }}>
                {floor}:
              </span>
              <span style={{ fontSize: 20 }}> {spots} Spots</span>
              <Placeholder fluid inverted style={{ height: 300 }}>
                <Placeholder.Image />
              </Placeholder>
            </div>

            <br />
            <br />

            <Button icon labelPosition="left" secondary onClick={this.debug}>
              Debug <Icon name="eye" />
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button basic floated="right" as={Link} to="/about">
              Help
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SpecificSpot;
