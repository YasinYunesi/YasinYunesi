import ScrollAnimation from "react-animate-on-scroll";

const Header = ({ text, light }) => {
  // LOGIC /////////////////////////////////////

  // JSX /////////////////////////////////////
  return (
    <div className='costum_header text-center mt-5 pt-5 pb-4' style={{ color: light ? "#fff" : "#444649" }} data-scroll-container>
      <ScrollAnimation animateIn='bounceInLeft' duration={2} animateOnce={true}>
        <ScrollAnimation animateIn='fadeIn' delay={500} animateOnce={true}>
          <h1 className='text-uppercase'>{text}</h1>
        </ScrollAnimation>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInRight' duration={2} delay={500} animateOnce={true}>
        <ScrollAnimation animateIn='fadeIn' delay={1000} animateOnce={true}>
          <hr className='header_underline mx-auto' />
        </ScrollAnimation>
      </ScrollAnimation>
    </div>
  );
};

export default Header;
