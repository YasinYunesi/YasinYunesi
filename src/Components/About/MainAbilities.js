import { useEffect, useState } from "react";
import MAItem from "./MAitem";

const MainAbilities = () => {
  const [skills, setSkills] = useState([]);

  // fetching data from data.json file
  async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();
    setSkills(data.skills);
  }
  useEffect(() => {
    getData();
  }, []);

  // JSX ////////////////////////////
  return (
    <div className='main_ab col m-auto d-flex flex-column justify-content-between'>
      {skills.map(({ title, percentage }) => {
        return <MAItem text={title} percentage={percentage + "%"} />;
      })}
    </div>
  );
};

export default MainAbilities;
