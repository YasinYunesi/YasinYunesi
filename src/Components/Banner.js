import { useState } from "react";
import Typical from "react-typical";

const Banner = () => {
  // LOGIC /////////////////////////
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeBtn_n, setActiveBtn_n] = useState(false);

  // JSX /////////////////////////
  return (
    <div className='banner position-relative w-100' id='banner'>
      {/* the stars */}
      <div className='stars_container position-absolute w-100 h-100'>
        <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
      </div>

      {/* the main content start */}
      <div className='banner_main position-relative w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center'>
        {/* the text */}
        <div className='banner_text'>
          <h1>
            Hello, I'm <span className='name'>Yasin Yunesi</span>.
          </h1>
          <br />
          <h1 className='react_line'>
            I'm a React js <br /> <Typical steps={["website", 4000, "web app", 3000]} loop={Infinity} wrapper='span' />
            developer.
          </h1>
        </div>

        {/* the btn */}
        <div className='banner_btn mt-5'>
          <a
            className='rounded-0 shadow-none'
            href='#about'
            onMouseEnter={() => {
              setActiveBtn(true);
              setActiveBtn_n(false);
            }}
            onMouseLeave={() => {
              setActiveBtn(false);
              setActiveBtn_n(true);
            }}
          >
            View my work <i className={`fas fa-arrow-right ms-2 ${activeBtn && "active"} ${activeBtn_n && "active_n"}`}></i>
          </a>
        </div>
      </div>
      {/* the main content end */}
    </div>
  );
};

export default Banner;
