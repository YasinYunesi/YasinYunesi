import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  // LOGIC //////////////////////////////////////
  const fullYear = new Date().getFullYear();

  function backToTop() {
    window.scrollTo(0, 0);
  }

  // JSX //////////////////////////////////////
  return (
    <footer className='costum_footer position-relative pt-5 pb-4'>
      {/* back to top btn */}
      <button
        className='back_to_top btn shadow-none border-0 text-center py-1 position-absolute'
        onClick={backToTop}
        title='Back to top'
      >
        <i className='fa fa-angle-double-up'></i>
      </button>

      {/* the social btns */}
      <div className='footer_social mx-auto col-11 col-md-4 col-xxl-2 d-flex align-items-center justify-content-between my-4'>
        <ScrollAnimation animateIn='flipInY' duration={1.5} animateOnce={true}>
          <a href='tel:+989366635089' target='_blank' rel='noreferrer' title='Phone number'>
            <i className='fa fa-phone-alt'></i>
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn='flipInY' duration={1.5} animateOnce={true} delay={100}>
          <a href='https://t.me/yasin1999' target='_blank' rel='noreferrer' title='Telegram account'>
            <i className='fab fa-telegram-plane'></i>
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn='flipInY' duration={1.5} animateOnce={true} delay={200}>
          <a href='https://www.instagram.com/yasin12_80' target='_blank' rel='noreferrer' title='Instagram page'>
            <i className='fab fa-instagram'></i>
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn='flipInY' duration={1.5} animateOnce={true} delay={300}>
          <a href='https://github.com/YasinYunesi' target='_blank' rel='noreferrer' title='Github account'>
            <i className='fab fa-github'></i>
          </a>
        </ScrollAnimation>
      </div>

      {/* the owner */}
      <p className='text-uppercase text-center mt-5'>
        yasin yunesi{" "}
        <span>
          <i className='far fa-copyright'></i> {fullYear}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
