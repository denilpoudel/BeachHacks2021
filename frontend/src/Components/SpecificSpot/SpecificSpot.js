import React, { Component } from "react";
import happyemojis from "./HappyEmojis.png";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Placeholder, Image } from "semantic-ui-react";
import axios from "axios";


const url = "https://us-west2-beachhacks2021.cloudfunctions.net/function-2";

export class SpecificSpot extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      parkingLocation: [],
      floor: "Floor 1",
      spots: "7",
    };
  }

  componentDidMount() {

    const initialState = {... this.props};

    const {location} = initialState
    const  {parkingArea}  = location.state;

    const name = {
      name: parkingArea
    };
    console.log(initialState)
    console.log(name)
    axios.post(url, name).then((res) => {
      console.log(res);
      console.log(res.data);
      this.setState({parkingLocation: res.data })
      console.log("it worked!!");
    });

    
  }


  render() {
    const { parkingLocation, floor, spots,} = this.state;

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
                {parkingLocation}
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
