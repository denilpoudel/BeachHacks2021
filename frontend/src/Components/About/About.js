import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Placeholder, Card } from "semantic-ui-react";

function About() {
  return (
    <div>
      <Grid columns="equal" centered padded>
        <Grid.Column>
          <Button basic as={Link} to="/">
            Home
          </Button>
        </Grid.Column>
        <Grid.Column class="centered column" textAlign="center">
          <div style={{ fontSize: 20 }}>
            <Grid.Row>
              <b style={{ display: "inline" }}>Parking’s a BEACH </b>
              <p style={{ margin: 0, padding: 0 }}>
                was created by four CSULB engineering students who were fed up
                with parking.
              </p>
            </Grid.Row>
            <Grid.Row>
              <Card.Group itemsPerRow={3}>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>

            <Grid.Row>
              <p style={{ margin: 0, padding: 0, display: "inline" }}>
                Our team created{" "}
              </p>
              <b style={{ margin: 0, padding: 0, display: "inline" }}>
                sensors{" "}
              </b>
              <p style={{ margin: 0, padding: 0, display: "inline" }}>
                to detect empty parking spots on campus.
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
