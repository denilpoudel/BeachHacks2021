import React, { Component } from "react";
import happyemojis from "./HappyEmojis.png";
import parking from "./ParkingImg.png";
import { Link } from "react-router-dom";
import sademojis from "./SadEmojis.png";
import { Button, Grid, Icon, Placeholder, Image } from "semantic-ui-react";
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

const url = "https://us-west2-beachhacks2021.cloudfunctions.net/function-2";

export class SpecificSpot extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      foundSpot: true,
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
      console.log(res)
      console.log(res.data);
      // this.setState({parkingLocation: res.data, foundSpot: true })
      console.log("it worked!!");
    });

    const floor = "Floor " + 0;
    const spots = Math.floor(Math.random() * 39)+1;
    const chance = Math.floor(Math.random() * 2);

    console.log(chance)
    let works = false;
    if (chance == "1"){
      works = true
    }    

    this.setState({floor: floor, spots: spots, foundSpot: works, parkingLocation: parkingArea})
  }


  render() {
    const { parkingLocation, floor, spots, foundSpot} = this.state;

    console.log(this.state);
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Grid columns="equal" centered padded>
          <Grid.Column>
            <Button basic as={Link} to="/">
              Back
            </Button>
          </Grid.Column>
          <Grid.Column width={14} class="centered column" textAlign="center" style={{position: 'absolute', top: '15%'}}>
            <div>
             
              <br />
              {foundSpot ? (<div> <Image 
                size='small'
                centered
                src={happyemojis} fluid>
              </Image><span style={{ fontSize: 40 }}>There are available spots at</span>
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
              <span style={{ fontSize: 40 }}> {spots} Spots</span> </div>) :(<div><div>
                <Image 
                  size='small'
                  centered
                  src={sademojis} fluid>
                </Image>
                <p style={{ fontSize: 40 }}>
                  We couldn't find any<br /> 
                  open spots!
                </p>
                <p style={{ fontSize: 40, fontWeight: "bolder" }}>
                  Please wait a few<br />
                  minutes, then
                </p>
                <Button as={Link} to="/" style={{ fontSize: 20 }}>
                  Try again
                </Button>
              </div> </div>)}
              
              <br />
              <br />
              <Image 
                  size='huge'
                  centered
                  src={parking}>
                </Image>
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
