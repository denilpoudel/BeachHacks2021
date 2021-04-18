import React, { Component } from "react";
import happyemojis from "./HappyEmojis.png";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Placeholder, Image } from "semantic-ui-react";

export class SpecificSpot extends Component {
  constructor(props) {
    super(props);

    const initialState = this.props;

    this.state = {
      ...initialState,
      parkingLocation: "Pyramid Parking Structure",
      floor: "Floor 1",
      spots: "7",
    };
  }

  render() {
    const { parkingLocation, floor, spots, location } = this.state;
    const { parkingArea } = location.state;
    console.log(this.state);
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Grid columns="equal" centered padded>
          <Grid.Column>
            <Button basic as={Link} to="/">
              Back
            </Button>
          </Grid.Column>
          <Grid.Column width={14} class="centered column" textAlign="center" style={{position: 'absolute', top: '20%'}}>
            <div>
              <Image 
                size='small'
                centered
                src={happyemojis} fluid>
              </Image>
              <br />
              <span style={{ fontSize: 40 }}>There are available spots at</span>
              <br />
              <br />
              <span style={{ fontSize: 40, fontWeight: "bolder" }}>
                {parkingArea}
              </span>
              <br />
              <br />
              <br />
              <br />
              <span style={{ fontSize: 40, fontWeight: "bolder" }}>
                {floor}:
              </span>
              <span style={{ fontSize: 40 }}> {spots} Spots</span>
              <br />
              <br />
              <br />
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
              About
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SpecificSpot;
