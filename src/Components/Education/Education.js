import ScrollAnimation from "react-animate-on-scroll";
import Header from "./../Header";

const Education = () => {
  return (
    <div className='education pb-5' id='education'>
      <ScrollAnimation animateIn='bounceInRight' animatePreScroll={false} animateOnce={true}>
        <ScrollAnimation animateIn='fadeIn' animatePreScroll={false} animateOnce={true}>
          <Header text='education' />
          <h2 className='education_title pb-4 pt-5 text-center mx-auto col-11 col-md-10'>
            Wonder how I ended up in this profession?
          </h2>
          <p className='col-10 mx-auto'>
            When the time comes we all gotta choose a major to study that may shape our fututre.However, by talking to the wrong
            people you might end up in the wrong major.Just like me! I choose auto-mechanic as my major and future profession as a
            highschooler. I realized I didn't like it but I'd been learning it for more than a year. But it was too late to choose
            another educational path. So I decided to finish the major and choose a job I like and I'm good at. I started learning
            front-end web development from youtube and some courses on the intenret. After highschool I found myself studying for
            university's entry exam (konkoor) and I got accepted in Qom State University.Finally I found the right people to talk
            to and as a result of that before finishing the first semester I quitted the university! So I ended up where I am now,
            studying the major I like and I'm good at, Computer engineering at <span>Islamshahr Azad University</span> for
            master's degree.
          </p>
        </ScrollAnimation>
      </ScrollAnimation>
    </div>
  );
};

export default Education;
