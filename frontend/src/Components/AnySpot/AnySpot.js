import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Placeholder } from "semantic-ui-react";

export class AnySpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundSpot: false,
      parkingLocation: "Pyramid Parking Structure 2nd Floor",
    };
  }

  debug = () => {
    this.setState((prevState) => ({
      foundSpot: !prevState.foundSpot,
    }));
  };

  render() {
    const { foundSpot, parkingLocation } = this.state;
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Grid columns="equal" centered padded>
          <Grid.Column>
            <Button basic as={Link} to="/">
              Back
            </Button>
          </Grid.Column>
          <Grid.Column class="centered column" textAlign="center">
            {foundSpot ? (
              <div>
                <span style={{ fontSize: 20 }}>We found you a spot at:</span>
                <br />
                <br />
                <span style={{ fontSize: 40, fontWeight: "bolder" }}>
                  {parkingLocation}
                </span>

                <Placeholder fluid inverted style={{ height: 300 }}>
                  <Placeholder.Image />
                </Placeholder>
              </div>
            ) : (
              <div>
                <span style={{ fontSize: 20 }}>
                  We couldn't find any open spots!
                </span>
                <br />
                <br />
                <span style={{ fontSize: 40, fontWeight: "bolder" }}>
                  Please wait a few minutes, then
                </span>
              </div>
            )}
            <br />
            <br />

            <Button icon labelPosition="left" secondary onClick={this.debug}>
              Debug <Icon name="eye" />
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button basic floated="right" as={Link} to="/about">
              About
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AnySpot;
