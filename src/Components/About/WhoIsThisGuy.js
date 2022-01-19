import ScrollAnimation from "react-animate-on-scroll";
import OwnerImg from "../../Assets/Owner.png";

const WhoIsThisGuy = () => {
  return (
    <div className='who_is text-center m-auto col-12 col-lg-6 mb-5 mb-lg-0'>
      <ScrollAnimation animateIn='bounceInLeft' duration={2} animateOnce={true}>
        <img className='mx-auto col-11 col-sm-9 col-lg-7' src={OwnerImg} alt='Owner' />
        <h2 className='py-2'>Who's this guy?</h2>
        <p className='mx-auto col-12 col-md-10 col-lg-9'>
          I'm a front-end{" "}
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer' title='www.reactjs.org'>
            React js
          </a>{" "}
          developer based in <span>Iran, Tehran</span>. <br />I have serious passion for UI effects, animations and creating
          intuitive, dynamic user experience.
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default WhoIsThisGuy;
