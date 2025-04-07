import React from "react";

import {
  Col,
  Container,
  Row,
  UncontrolledCarousel,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardDeck,
  CardTitle,
} from "reactstrap";

const ProjectCard = ({ img, projectTitle, projectDesc }) => {
  const imgHeight = 250;
  return (
    <Card>
      <CardImg
        src={img}
        top
        height={imgHeight}
        style={{ objectFit: "cover" }}
      />
      <CardBody
        className="bg-primary text-white"
        style={{ borderRadius: "0 0 5px 5px" }}
      >
        <h3 className="text-white display-4">{projectTitle}</h3>
        <small>
          {projectDesc}
        </small>
      </CardBody>
    </Card>
  );
}

export function Projects(props) {
  return (
    <>
      <Row className="justify-content-center" id="projects">
        <h2>Our Projects</h2>
      </Row>
      <Container>
        <h4>2024-2025</h4>
        <hr className="my-3" />
        <Row
          className="px-3 justify-content-center justify-content-md-center current-projects"
        >
          <ProjectCard
            img={require("assets/img/projects/2024/solar_e_bike.webp")}
            projectTitle="Solar E-Bike"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/2024/guitar_amplifier.webp")}
            projectTitle="GuitarAmp"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/2024/cyberdeck.webp")}
            projectTitle="CyberDeck"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/2024/radio.webp")}
            projectTitle="FM Radio"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/2024/parking_app.webp")}
            projectTitle="Parking Availability Software"
            projectDesc=""
          />
        </Row>
      </Container>
      <Container>
        <h4>2023-2024</h4>
        <hr className="my-3" />
        <Row
          className="px-3 justify-content-center justify-content-md-center current-projects"
        >
          <ProjectCard
            img={require("assets/img/projects/solar.webp")}
            projectTitle="Solar Station"
            projectDesc="Solar powered charging station for phones and other mobile devices"
          />
          <ProjectCard
            img={require("assets/img/projects/metaldetector.webp")}
            projectTitle="Metal Detector"
            projectDesc="Small handheld metal detector using a coil to discover
                         conductive metals in its electromagnetic field"
          />
          <ProjectCard
            img={require("assets/img/projects/speaker.webp")}
            projectTitle="Bluetooth Speaker"
            projectDesc="Bluetooth speaker controlled by an Arduino with RGB LEDs and a
                         custom-built wood and plexiglass enclosure"
          />
        </Row>
      </Container>
      <Container className="mt-5">
        <h4>2022-2023</h4>
        <hr className="my-3" />
        <Row
          className="px-3 justify-content-center justify-content-md-center previous-projects"
        >
          <ProjectCard
            img={require("assets/img/projects/drone.webp")}
            projectTitle="RC Drone"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/mirror.webp")}
            projectTitle="Smart Mirror"
            projectDesc=""
          />
          <ProjectCard
            img={require("assets/img/projects/radio2.webp")}
            projectTitle="FM Radio"
            projectDesc=""
          />
        </Row>
      </Container>
    </>
  );
}
