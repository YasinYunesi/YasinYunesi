import Header from "../Header";
import PortfolioContent from "./PortfolioContent";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  // fetching the data from data.json
  async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();
    setProjects(data.projects);
  }
  useEffect(() => {
    getData();
  }, []);

  // JSX //////////////////////////////
  return (
    <div className='portfolio py-5' id='portfolio'>
      <Header text='projects' />

      {/* projects */}
      <div className='projects_container mx-auto col-12 col-lg-11 col-xl-8 px-2 px-xl-4 py-5'>
        {projects.map(({ id, title, about, banner, tech, techPic, screenshotLarge, screenshotSmall, links }) => {
          return (
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} key={id}>
              <div className='project d-flex flex-column flex-md-row align-items-center justify-content-between py-5'>
                <img className='col-12 col-md-6 px-4 px-md-0 mb-3 mb-md-0 shadow rounded' src={banner} alt='Movie ave' />
                <PortfolioContent title={title} text={about} techs={tech} techPic={techPic} />
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
