import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import moment from "moment";

function Hero(props) {
  const navigate = useNavigate();
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `events`));
      if (snapshot.exists()) {
        const events = Object.values(snapshot.val());
        const upcomingEvents = events.filter(event => moment(event.start).isAfter(moment()));
        const sortedEvents = upcomingEvents.sort((a, b) => moment(a.start) - moment(b.start));
        setNextEvent(sortedEvents[0]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default"></div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="8">
                  <Row className="align-items-center justify-content-center mb-5">
                    <img
                      alt="..."
                      className="img-fluid px-3"
                      src={require("assets/img/brand/ieee_icon_white.webp")}
                      style={{ width: 150 }}
                    />
                    <span className="text-white display-1 font-weight-bolder">
                      ×
                    </span>
                    <img
                      alt="..."
                      className="img-fluid px-3"
                      src={require("assets/img/brand/ku_logo_white.webp")}
                      style={{ width: 150 }}
                    />
                  </Row>
                  <h1
                    className="text-white font-weight-bolder display-2"
                    style={{ textTransform: "uppercase" }}
                  >
                    University of Kansas
                    <br />
                    IEEE Student Branch
                  </h1>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white mb-3 mb-sm-0 rounded-pill"
                      color="default"
                      size="lg"
                      onClick={() => navigate("/#calendar")}
                    >
                      <span className="btn-inner--text">See our schedule</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {nextEvent && (
          <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8" className="text-center">
                  <h2 className="display-3">Next Meeting</h2>
                  <p className="lead">
                    {nextEvent.title} on {moment(nextEvent.start).format('MMMM Do YYYY, h:mm a')}
                    {nextEvent.room && ` in ${nextEvent.room}`}
                  </p>
                  <Button
                    className="btn-primary mt-3"
                    onClick={() => navigate("/#calendar")}
                  >
                    View Details
                  </Button>
                  {nextEvent.rsvp && (
                  <a
                    href={nextEvent.rsvp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-3"
                    role="button"
                    onClick={() => {}}
                  >
                    RSVP
                  </a>)}
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </div>
    </>
  );
}

export default Hero;
