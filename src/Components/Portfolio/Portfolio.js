import Header from "../Header";
import movieAve from "../../Assets/projects/movie_ave_2.png";
import amazon from "../../Assets/projects/amazon.png";
import classyCafe from "../../Assets/projects/classy_cafe.png";
import portfolio from "../../Assets/projects/Portfolio.png";
import PortfolioContent from "./PortfolioContent";
import ScrollAnimation from "react-animate-on-scroll";

const Portfolio = () => {
  return (
    <div className='portfolio py-5' id='portfolio'>
      <Header text='projects' />

      {/* projects */}
      <div className='projects_container mx-auto col-12 col-lg-11 col-xl-8 px-2 px-xl-4 py-5'>
        {/* Movie ave */}
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <div className='project d-flex flex-column flex-md-row align-items-center justify-content-between py-5'>
            <img className='col-12 col-md-6 px-4 px-md-0 mb-3 mb-md-0 shadow rounded' src={movieAve} alt='Movie ave' />
            <PortfolioContent
              title='Movie ave'
              text='Movie ave is web application that works with TMDB fantastic API. In this app you can find any movie or animation you could think of and see their full detail. You can add them to your favorites list or add them to "watch later" list to watch them when you had the time.'
              techs={["React JS", "Sass", "Bootstrap", "Firebase DB"]}
            />
          </div>
        </ScrollAnimation>

        {/* Amazon clone */}
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <div className='project d-flex flex-column flex-md-row-reverse align-items-center justify-content-between py-5'>
            <img className='col-12 col-md-6 px-4 px-md-0 mb-3 mb-md-0 shadow rounded' src={amazon} alt='Amazon clone' />
            <PortfolioContent
              title='Amazon clone'
              text="This React JS app is a clone of Amazon 2.0 with some changes in the UI. I used tailwind css to design the app and as a result I didn't write many Css/Sass codes myself. Redux has been used to handle the states through the app and the products has been fetched from fakestore API."
              techs={["React JS", "Redux", "Sass", "Tailwind"]}
            />
          </div>
        </ScrollAnimation>

        {/* Classy cafe */}
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <div className='project d-flex flex-column flex-md-row align-items-center justify-content-between py-5'>
            <img className='col-12 col-md-6 px-4 px-md-0 mb-3 mb-md-0 shadow rounded' src={classyCafe} alt='Classy cafe' />
            <PortfolioContent
              title='Classy cafe'
              text='Classy cafe is just a cafe/restaurant website template. I started working on this project when i was done learning bootstrap and I wanted to test myself.'
              techs={["HTML", "CSS", "Bootstrap"]}
            />
          </div>
        </ScrollAnimation>

        {/* yasin yunesi website */}
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <div className='project d-flex flex-column flex-md-row-reverse align-items-center justify-content-between py-5'>
            <img className='col-12 col-md-6 px-4 px-md-0 mb-3 mb-md-0 shadow rounded' src={portfolio} alt='Yasin Yunesi' />
            <PortfolioContent
              title='Yasin Yunesi website'
              text="The very website you're watching. I wanted a fast website with good UI to describe myself, my skills and my projects. This website uses React js and react-bootstrap for the UI and Firebase database to store user's emails to me."
              techs={["React JS", "Sass", "Bootstrap", "Firebase DB"]}
              home
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Portfolio;
