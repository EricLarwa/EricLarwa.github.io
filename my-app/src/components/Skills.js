import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>There are many skills needed during software development, such as knowledge of data structures and algorithms, programming languages, operating systems, and source controls. Each of these skills are required in order to develop material from essentially nothing, proficiency in these skills sets are mandatory to develop good, visual aesthetic applications that hold a user’s attention. Source operation and knowledge is essential, if you do not understanding the operating system you are working with your development of sources will not result correctly. </p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} alt=""/>
                                  <h5>Web Development</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt=""/>
                                  <h5>Operating Sytems</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt=""/>
                                  <h5>Programming Languages</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt=""/>
                                  <h5>Source Control</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt=""/>
      </section>
    )
  }