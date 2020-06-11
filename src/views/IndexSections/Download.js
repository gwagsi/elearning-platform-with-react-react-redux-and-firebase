
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Track your skill level{" "}
                  <span className="text-success">
                    Get access to premuim content and materials
                  </span>
                </h2>
                <p className="lead">
                  When you do, it is yours for Life. With a level assesmment test
                  you will be able to see the progress you are making and how much effort you need to put in to achieve far better results.Hit the button
                  below to get started. Lets make your english standout
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href=""
                  >
                    Getting started
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Major Topics Covered
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <i className="icon ni ni-bell-55" />
                        <span>Basic</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                      Learn the alphabet and basic expressions
    Learn basic sentence structure
    Have simple conversations
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <i className="icon ni ni-bell-55" />
                        <span>Intermidiate</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                      Learn common expressions
    Deal with basic communication problems
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip233150499"
                        target="_blank"
                      ><i className="icon ni ni-bell-55" />
                      <span>Advanced</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                      Can have an English conversation in most situations
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <i className="icon ni ni-bell-55" />
                        <span>Business English</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        Speak English like a...
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <i className="icon ni ni-bell-55" />
                        <span>ToFEL</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Study the right materials needed for you to succeed in your exams
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href=""
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <i className="icon ni ni-bell-55" />
                        <span>Daily Conversation</span>
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                      Can have an English conversation in most situations
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
