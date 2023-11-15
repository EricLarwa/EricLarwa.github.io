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
                <p>The history of software development began in the 1940s, marked by pioneers like Alan Turing and the creation of the first programmable computers while the 1970s saw the emergence of personal computers, with Microsoft founded by Bill Gates and Paul Allen in 1975. The 1980s and 1990s witnessed the widespread adoption of graphical user interfaces and the World Wide Web, integrating software into daily life. The 2000s introduced the open-source movement and the rise of mobile applications and in the present, software development is characterized by agile methodologies, cloud computing, and the integration of artificial intelligence. This historical evolution highlights the continuous impact of software development, shaping how we live, work, and interact with technology.</p>
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
                                  <p>The future of software development holds exciting possibilities, driven by emerging technologies and evolving industry trends. Artificial intelligence (AI) and machine learning are expected to play increasingly significant roles, enabling software to become more intuitive, adaptive, and capable of autonomous decision-making. The rise of low-code and no-code platforms will likely democratize software development, allowing a broader range of individuals to participate in creating applications without extensive coding knowledge. Cloud computing will continue to be a key enabler, providing scalable and flexible infrastructure for software deployment. Overall, the future of software development is poised to be dynamic, innovative, and closely intertwined with the ongoing advancements in technology. </p>
                                  
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