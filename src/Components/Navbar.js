import Resume from "../Assets/resume.pdf";

const Navbar = () => {
  return (
    <>
      <nav className='costum_navbar navbar navbar-expand-lg py-0 sticky-top' expand='lg'>
        {/* Navbar toggler */}
        <button
          className='navbar_toggler navbar-toggler py-2 shadow-none'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* navbar content */}
        <div className='navbar_content collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar_nav navbar-nav col-7 mx-auto py-1'>
            <a className='nav-link text-uppercase me-5 nav_link_active' href='#banner'>
              Home
            </a>
            <a className='nav-link text-uppercase me-5' href='#about'>
              about
            </a>
            <a className='nav-link text-uppercase me-5' href='#portfolio'>
              portfolio
            </a>
            <a className='nav-link text-uppercase me-5' href='#education'>
              education
            </a>
            <a className='nav-link text-uppercase me-5' href='#contact'>
              contact
            </a>
          </ul>
          {/* Download CV */}
          <div className='text-end py-2 pe-3 pe-lg-5'>
            <button className='download_cv fw-bold rounded-pill px-0 py-2 overflow-hidden'>
              <a className='py-3 px-5' href={Resume} download>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
