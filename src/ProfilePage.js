import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ProfilePage() {
  const state = useLocation();
  console.log("state", state);
  
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            overflow: "scroll initial",
          }}
        >
          <Tab.Container
            className="tab-container"
            /* id="left-tabs-example" */ defaultActiveKey="first"
          >
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Posts</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Gallary</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">ToDo</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {" "}
                  <Card style={{ width: "18rem" }}>
                    <img
                      src={state?.state?.profilepicture}
                      className="img rounded-circle"
                      alt=""
                    />
                    <Card.Header>
                      <h5>{state?.state?.name}</h5>
                    </Card.Header>
                    <ListGroup variant="flush" className="profile2">
                      <ListGroup.Item>
                        Username: {state?.state?.username}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        e-mail: {state?.state?.email}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Phone: {state?.state?.phone}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Website: {state?.state?.website}
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h4>Company</h4>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Name: {state?.state?.companyName}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        catchphrase: {state?.state?.catchPhrase}
                      </ListGroup.Item>
                      <ListGroup.Item>bs: {state?.state?.bs}</ListGroup.Item>
                    </ListGroup>
                    <Tab.Container
                      id="rigth-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Card className="card-sty">
                        {" "}
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <h4>Address</h4>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Street: {state?.state?.street}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Suite: {state?.state?.suite}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            City: {state?.state?.city}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Zipcode: {state?.state?.zipcode}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <div
                              className="flex-container"
                              style={{ height: "100vh", width: "100%" }}
                            >
                              <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                              >
                                <AnyReactComponent
                                  lat={state?.state?.lat}
                                  lng={state?.state?.lng}
                                  text="My Marker"
                                />
                              </GoogleMapReact>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Tab.Container>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Comming Soon</Tab.Pane>
                <Tab.Pane eventKey="third">Comming Soon</Tab.Pane>
                <Tab.Pane eventKey="fourth">Comming Soon</Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </div>
      </Card>
    </div>
  );
}
