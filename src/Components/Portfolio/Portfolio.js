import { useEffect, useState } from "react";
import Header from "../Header";
import ScrollAnimation from "react-animate-on-scroll";
import TabPane from "./TabPane";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  // fetching the data from data.json
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProjects(data.projects);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // JSX //////////////////////////////
  return (
    <div className='portfolio py-5' id='portfolio'>
      <Header text='projects' />

      {/* PROJECTS */}
      <div className='projects_container container px-4'>
        {/* Tabs */}
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <div
            className='projects_tabs list-group col-12 col-lg-8 mx-auto mb-4 mt-5 text-uppercase text-center'
            role='tablist'
            id='list-tab'
          >
            <a
              className='list-group-item list-group-item-action active'
              id='projects-all'
              data-bs-toggle='list'
              href='#all'
              role='tab'
              aria-controls='all'
            >
              all
            </a>
            <a
              className='list-group-item list-group-item-action'
              id='projects-react'
              data-bs-toggle='list'
              href='#react'
              role='tab'
              aria-controls='react'
            >
              react js
            </a>
            <a
              className='list-group-item list-group-item-action'
              id='projects-tailwind'
              data-bs-toggle='list'
              href='#tailwind'
              role='tab'
              aria-controls='tailwind'
            >
              tailwind
            </a>
            <a
              className='list-group-item list-group-item-action'
              id='projects-bootstrap'
              data-bs-toggle='list'
              href='#bootstrap'
              role='tab'
              aria-controls='bootstrap'
            >
              bootstrap
            </a>
          </div>
        </ScrollAnimation>
        {/* projects banners */}
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
          <div className='tab-content' id='pills-tabContent'>
            {/* All */}
            <div className='tab-pane fade show active' id='all' role='tabpanel' aria-labelledby='projects-all'>
              <div className='projects'>
                {projects.map(({ id, banner, tech, title, subtitle, techPic, images, about, link, github }) => {
                  return (
                    <TabPane
                      key={id}
                      banner={banner}
                      tech={tech}
                      title={title}
                      subtitle={subtitle}
                      techPic={techPic}
                      images={images}
                      about={about}
                      link={link}
                      github={github}
                    />
                  );
                })}
              </div>
            </div>
            {/* React */}
            <div className='tab-pane fade' id='react' role='tabpanel' aria-labelledby='projects-react'>
              <div className='projects'>
                {projects.map(({ id, banner, tech, title, subtitle, techPic, images, about, link, github }) => {
                  return (
                    tech.includes("ReactJS") && (
                      <TabPane
                        key={id}
                        banner={banner}
                        tech={tech}
                        title={title}
                        subtitle={subtitle}
                        techPic={techPic}
                        images={images}
                        about={about}
                        link={link}
                        github={github}
                      />
                    )
                  );
                })}
              </div>
            </div>
            {/* Tailwind */}
            <div className='tab-pane fade' id='tailwind' role='tabpanel' aria-labelledby='projects-ttailwind'>
              <div className='projects'>
                {projects.map(({ id, banner, tech, title, subtitle, techPic, images, about, link, github }) => {
                  return (
                    tech.includes("Tailwind") && (
                      <TabPane
                        key={id}
                        banner={banner}
                        tech={tech}
                        title={title}
                        subtitle={subtitle}
                        techPic={techPic}
                        images={images}
                        about={about}
                        link={link}
                        github={github}
                      />
                    )
                  );
                })}
              </div>
            </div>
            {/* Bootstrap */}
            <div className='tab-pane fade' id='bootstrap' role='tabpanel' aria-labelledby='projects-bootstrap'>
              <div className='projects'>
                {projects.map(({ id, banner, tech, title, subtitle, techPic, images, about, link, github }) => {
                  return (
                    tech.includes("Bootstrap") && (
                      <TabPane
                        key={id}
                        banner={banner}
                        tech={tech}
                        title={title}
                        subtitle={subtitle}
                        techPic={techPic}
                        images={images}
                        about={about}
                        link={link}
                        github={github}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Portfolio;
