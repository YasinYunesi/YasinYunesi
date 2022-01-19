import { useState } from "react";

const PortfolioContent = ({ title, text, techs, home }) => {
  // LOGIC //////////////////////////////////
  const [websiteLink, setWebsiteLink] = useState("");

  // setting websiteLink
  function setLink() {
    if (title === "Movie ave") {
      setWebsiteLink("https://movie-ave.vercel.app/");
    } else if (title === "Classy cafe") {
      setWebsiteLink("https://classy-cafe.netlify.app/");
    } else if (title === "Amazon clone") {
      setWebsiteLink("https://amazon-clone-yasin-yunesi.vercel.app/");
    } else if (title === "Yasin Yunesi website") {
      setWebsiteLink("#banner");
    }
  }

  // JSX //////////////////////////////////
  return (
    <div className='project_content mx-auto px-4'>
      <h2 className='mb-3 fw-bold'>
        <a
          onClick={setLink}
          href={home ? "#banner" : websiteLink}
          rel='noreferrer'
          target={!home ? "_blank" : undefined}
          title='Go to website'
        >
          {title} {!home ? <i className='fa fa-external-link-alt'></i> : undefined}
        </a>
      </h2>
      <p>{text}</p>
      <div className='mt-4 d-flex flex-column d-md-block'>
        {techs.map((tech) => {
          return (
            <div className='d-inline mb-2 mb-md-0 me-md-3' key={tech}>
              <img
                className='col-1 p-sm-2 p-lg-1 p-xxl-2'
                src={
                  (tech === "React JS"
                    ? "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    : undefined) ||
                  (tech === "Sass"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrOfGH4wfwWwj8XZTaYFsjiuD5H0XixFhSeHzA-AQ_jDngu8Pg_teiXLLiB0PqdFtNXI&usqp=CAU"
                    : undefined) ||
                  (tech === "Firebase DB"
                    ? "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                    : undefined) ||
                  (tech === "Bootstrap"
                    ? "https://www.kindpng.com/picc/m/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png"
                    : undefined) ||
                  (tech === "HTML"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                    : undefined) ||
                  (tech === "CSS"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    : undefined) ||
                  (tech === "Redux" ? "https://www.pngrepo.com/download/303557/redux-logo.png" : undefined) ||
                  (tech === "Tailwind"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    : undefined)
                }
                alt='logo'
              />
              <span>{tech},</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioContent;
