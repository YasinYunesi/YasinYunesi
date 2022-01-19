import ScrollAnimation from "react-animate-on-scroll";

const BaseAbilities = () => {
  return (
    <div className='base_ab my-5 text-center d-lg-flex justify-content-center align-items-center'>
      <div className='d-sm-flex align-items-center'>
        {/* ability 1 */}
        <div className='base_ab_item col'>
          <ScrollAnimation animateIn='flipInY' animateOnce={true}>
            <i className='fas fa-tachometer-alt mb-2'></i>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <h4>Fast</h4>
            <p className='mx-auto col-8 col-sm-8 col-lg-10'>Fast load times and lag free interaction. my highest priority.</p>
          </ScrollAnimation>
        </div>
        {/* ability 2 */}
        <div className='base_ab_item col'>
          <ScrollAnimation animateIn='flipInY' delay={100} animateOnce={true}>
            <i className='fa fa-laptop mb-2'></i>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' delay={100} animateOnce={true}>
            <h4>Responsive</h4>
            <p className='mx-auto col-8 col-sm-8 col-lg-10'>My layouts will work on any device. big or small.</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className='d-sm-flex align-items-center'>
        {/* ability 3 */}
        <div className='base_ab_item col'>
          <ScrollAnimation animateIn='flipInY' delay={200} animateOnce={true}>
            <i className='fa fa-thumbs-up mb-2'></i>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' delay={200} animateOnce={true}>
            <h4>Intuitive</h4>
            <p className='mx-auto col-8 col-sm-8 col-lg-10'>Strong preference for easy to use. intuitive UX/UI.</p>
          </ScrollAnimation>
        </div>
        {/* ability 4 */}
        <div className='base_ab_item col'>
          <ScrollAnimation animateIn='flipInY' delay={300} animateOnce={true}>
            <i className='fa fa-rocket mb-2'></i>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' delay={300} animateOnce={true}>
            <h4>Dynamic</h4>
            <p className='mx-auto col-8 col-sm-8 col-lg-10'>
              Websites don't have to be static. I love making pages come to life.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default BaseAbilities;
