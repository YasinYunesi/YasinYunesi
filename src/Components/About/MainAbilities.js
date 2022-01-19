import MAItem from "./MAitem";

const MainAbilities = () => {
  return (
    <div className='main_ab col d-flex flex-column justify-content-between'>
      <MAItem text='React js' percentage='80%' />
      <MAItem text='HTML' percentage='90%' />
      <MAItem text='CSS' percentage='90%' />
      <MAItem text='Javascript' percentage='80%' />
      <MAItem text='Sass' percentage='80%' />
      <MAItem text='Redux' percentage='60%' />
      <MAItem text='Bootstrap' percentage='90%' />
      <MAItem text='Tailwind' percentage='70%' />
      <MAItem text='Git/Github' percentage='50%' />
      <MAItem text='Other' percentage='55%' />
      <MAItem text='English' percentage='95%' />
    </div>
  );
};

export default MainAbilities;
