import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

/*projects image */
import projImg1 from "../assets/img/Proyectos/proyectos-signalclone.png";
import projImg2 from "../assets/img/Proyectos/proyectos-signalclone.png";
import projImg3 from "../assets/img/Proyectos/proyectos-signalclone.png";

import proj1 from "../assets/img/Proyectos/proyectos-signalclone.png";


import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Complete Isis Zapata",
      description: "Web development",
      imgUrl: projImg1,
    },
    {
      title: "Signal Clone",
      description: "Web and mobile development",
      imgUrl: projImg2,
    },
    {
      title: "Mini portfolio",
      description: "Desktop Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Desktop Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    
  ];

  const projectspersonal = [
    {
      title: "Portfolio Complete Isis Zapata",
      description: "Web development",
      imgUrl: projImg1,
    },
    {
      title: "Signal Clone",
      description: "Web and mobile development",
      imgUrl: projImg2,
    },
    {
      title: "Mini portfolio",
      description: "Desktop Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Desktop Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    
  ];

  const projectswork = [
    {
      title: "Portfolio Complete Isis Zapata",
      description: "Web development",
      imgUrl: projImg1,
    },
    {
      title: "Signal Clone",
      description: "Web and mobile development",
      imgUrl: projImg2,
    },
    {
      title: "Mini portfolio",
      description: "Desktop Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Desktop Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here I show you the projects I have carried out throughout my profession.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">University Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return ( 
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectspersonal.map((project, index) => {
                            return ( 
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectswork.map((project, index) => {
                            return ( 
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}