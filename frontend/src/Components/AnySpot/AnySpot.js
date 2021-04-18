import React, { Component } from "react";
import sademojis from "./SadEmojis.png";
import happyemojis from "./HappyEmojis.png";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Placeholder, Image } from "semantic-ui-react";
import axios from "axios";


const url = "https://us-west2-beachhacks2021.cloudfunctions.net/function-2";

export class AnySpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundSpot: false,
      parkingLocation: "",
    };
  }


  componentDidMount() {
    const name = {
      name: "any"
    };
    console.log(name)
    axios.post(url, name).then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data == "any") {
        this.setState({parkingLocation: "TEST", foundSpot: true })
        console.log("it worked!!")} 
      else {
        console.log("no spot found")
        this.setState({foundSpot: true})
      }
    });    
    const chance = Math.floor(Math.random() * 2);
    let works = false;
    if (chance == "1"){
      works = true
    }    
    this.setState({foundSpot: works})
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
          <Grid.Column width={14} class="centered column" textAlign="center" style={{position: 'absolute', top: '20%'}}>
            {foundSpot ? (
              <div>
                <Image 
                  size='small'
                  centered
                  src={happyemojis} fluid>
                </Image>
                <p style={{ fontSize: 40 }}>
                  We found you a spot at:
                </p>
                <p style={{ fontSize: 40, fontWeight: "bolder" }}>
                  {parkingLocation}
                </p>

                <Placeholder fluid inverted style={{ height: 300 }}>
                  <Placeholder.Image />
                </Placeholder>
              </div>
            ) : (
              <div>
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
              </div>
            )}
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

export default AnySpot;
