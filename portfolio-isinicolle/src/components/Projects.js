import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

/*projects image */
import projsignal from "../assets/img/Proyectos/proyectos-signalclone.png";
import projtodo from "../assets/img/Proyectos/proyecto-todoreactnative.png";
import projportaisis from "../assets/img/Proyectos/proyecto-portafolioIsisZapata.jpg";
import projtiendaderopagenexus from "../assets/img/Proyectos/proyecto-tiendaderopagenexus.jpg";
import projsalument from "../assets/img/Proyectos/proyecto-salument.jpg";
import projpanaderiadelicius from "../assets/img/Proyectos/proyecto-panaderiadelicus.jpg";
import projbakedlove from "../assets/img/Proyectos/proyecto-panaderiabakedlove.jpg";
import projminiportafolio from "../assets/img/Proyectos/proyecto-miniportfolioisis.png";
import projmanualcalidad from "../assets/img/Proyectos/proyecto-manualdecalidad.jpg";
import projiccunicah from "../assets/img/Proyectos/proyecto-iccunicah.png";
import projlabpolanco from "../assets/img/Proyectos/proyecto-laboratoriopolanco.jpg";
import projphpferreteria from "../assets/img/Proyectos/proyecto-ferreteriawebphpadmin.jpg";
import projhandlebarsferreteria from "../assets/img/Proyectos/proyecto-ferreteriawebhandlebarscliente.jpg";
import projmoviladminferreteria from "../assets/img/Proyectos/proyecto-ferreteriamoviluadmin.jpg";
import projmovilclienteferreteria from "../assets/img/Proyectos/proyecto-ferreteriamovilcliente.jpg";
import proescuela from "../assets/img/Proyectos/proyecto-escuelaenciendeunaluz.jpg";
import projcvnext from "../assets/img/Proyectos/proyecto-cvnextjs.png";
import projcruceros from "../assets/img/Proyectos/proyecto-crucerosjava.jpg";
import projcamidental from "../assets/img/Proyectos/proyecto-camidentalcsharp.jpg";
import projandroidjuegos from "../assets/img/Proyectos/proyecto-androidjuegos.jpg";
import projanalisisoctecsa from "../assets/img/Proyectos/proyecto-analisisydiseno.jpg";








import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "App Mobile Ferretear Admin",
      description: "Web development",
      imgUrl: proj,
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