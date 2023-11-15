import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";
import OldCode from "../assets/img/OldCode.png";
import NewCode from "../assets/img/NewCode.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Brief History of Software Developement",
      description: "Medium",
      imgUrl: img4,
    },
    {
      title: "Future of Software Development ",
      description: "Perforce",
      imgUrl: img5,
    },
    {
      title: "What is a Software Developer",
      description: "Simplilearn",
      imgUrl: img6,
    },
    {
      title: "Software Developement and AI",
      description: "InfoWorld",
      imgUrl: img7,
    },
    {
      title: "Importance of Software Development",
      description: "3 Pillar",
      imgUrl: img8,
    },
    {
      title: "Innovation over Time",
      description: "Praxent",
      imgUrl: img9,
    },
  ]; 
  


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>History</h2>
                <p>The history of software development began in the 1940s with pioneers like Alan Turing and the creation of the first programmable computers. The 1970s witnessed the advent of personal computers, with Bill Gates and Paul Allen founding Microsoft in 1975. The 1980s and 1990s saw the rise of graphical user interfaces and the World Wide Web, transforming software into a ubiquitous part of daily life. The 2000s brought about the open-source movement and the proliferation of mobile applications. Today, software development is characterized by agile methodologies, cloud computing, and the integration of artificial intelligence. This historical trajectory showcases the evolution of software development as an indispensable force, continually shaping and reshaping the way we live, work, and interact with technology.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">References</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Purpose</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Future</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                    </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <section className="second-section" id="connect">
                        <Container>
                          <Row className="align-items-center">
                            <Col size={12} md={6}>
                              <div className="image1">
                                <img className="OldCode" src={OldCode} alt=""/>
                                <h1>Old Code</h1>
                              </div>
                              <div className="image2">
                                <img className="NewCode"src={NewCode} alt=""/>
                                <h2> New Code </h2>
                              </div>
                              
                            </Col>
                            <Col size={12} md={6}>
                              <TrackVisibility>
                                {({ isVisible }) =>
                                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                  <p>The main purpose of software engineering is to design, develop, maintain, and test software applications. Software developers design and construct programs computers can run to complete complex computations. They develop programs that people use for various purposes, including software programs, operating systems and mobile apps. Many standards must be met through time, quality, efficiency and budget, assigning individuals to be fast-paced, hardworking, and diligent.Software development also plays a pivotal role in solving complex problems, improving user experiences, and advancing technological capabilities. Additionally, it fosters adaptability, allowing organizations and individuals to evolve and stay competitive in an ever-changing landscape.</p>
                                  
                                    <Row>
                                      
                                    </Row>
                                  
                                </div>}
                              </TrackVisibility>
                            </Col>
                          </Row>
                        </Container>
                      </section>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <section className="third-section" id="connect">
                        <Container>
                          <Row className="align-items-center">
                            <Col size={12} md={6}>
                              <TrackVisibility>
                                {({ isVisible }) =>
                                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={img10} alt="Contact Us"/>
                                }
                              </TrackVisibility>
                            </Col>
                            <Col size={12} md={6}>
                              <TrackVisibility>
                                {({ isVisible }) =>
                                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                  <p>Software development is crucial in today's technological landscape as it serves as the backbone of nearly every aspect of our lives. From powering our smartphones and computers to managing complex systems in industries like healthcare, finance, and transportation, software is the driving force behind innovation and efficiency. It enables the creation of applications that enhance productivity, streamline processes, and connect people globally. In a less extreme sense, it also allows individuals to brings their ideas of the applications they hope to create into the light. Software development constantly allows for the advancement for one’s creativity or allows for relaxation, without software development we would not have google, a tool that is used everyday for searches on specific or general topics. </p>
                                  
                                    <Row>
                                      
                                    </Row>
                                  
                                </div>}
                              </TrackVisibility>
                            </Col>
                          </Row>
                        </Container>
                      </section>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}