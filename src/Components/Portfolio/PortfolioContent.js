import { useState } from "react";

const PortfolioContent = ({ title, text, techs, home, techPic }) => {
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
                  (tech === "ReactJS" ? techPic[0] : undefined) ||
                  (tech === "Redux" ? techPic[1] : undefined) ||
                  (tech === "Tailwind" ? techPic[2] : undefined) ||
                  (tech === "Bootstrap" ? techPic[3] : undefined) ||
                  (tech === "Sass" ? techPic[4] : undefined) ||
                  (tech === "Firebase DB" ? techPic[5] : undefined) ||
                  (tech === "Firebase auth" ? techPic[5] : undefined) ||
                  (tech === "HTML" ? techPic[6] : undefined) ||
                  (tech === "CSS" ? techPic[7] : undefined) ||
                  (tech === "Local-JSON" ? techPic[8] : undefined)
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
