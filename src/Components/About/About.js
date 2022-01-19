import Header from "../Header";
import BaseAbilities from "./BaseAbilities";
import WhoIsThisGuy from "./WhoIsThisGuy";
import MainAbilities from "./MainAbilities";

const About = () => {
  return (
    <div className='about container pb-5 mb-5' id='about'>
      {/* header */}
      <Header text='About' />

      {/* base abilities */}
      <BaseAbilities />

      <div className='d-lg-flex pt-5 mx-auto col-11'>
        {/* who is this guy */}
        <WhoIsThisGuy />

        {/* main abilities */}
        <MainAbilities />
      </div>
    </div>
  );
};

export default About;
