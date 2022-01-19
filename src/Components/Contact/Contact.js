import { useEffect, useState } from "react";
import { db } from "../../firebase";
import ScrollAnimation from "react-animate-on-scroll";
import Notiflix from "notiflix";
import Header from "../Header";
import Loading from "../Loading";

const Contact = () => {
  // LOGIC ///////////////////////////
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [filledForm, setFilledForm] = useState([]);
  const [loading, setLoading] = useState(false);

  // side effets
  useEffect(() => {
    // creating the array of the full name,email and message
    setFilledForm([`Name: ${userName}`, `Email: ${userEmail}`, `Message: ${userMessage}`]);
  }, [userName, userEmail, userMessage]);

  // contact form submit handler
  function submitHandler(e) {
    e.preventDefault();

    // enabling the loading
    setLoading(true);

    // sending the array to firebase DB
    const contactsRef = db.ref("Contacts");
    contactsRef
      .push(filledForm)
      .then(() => {
        // disabling the loading
        setLoading(false);
        Notiflix.Notify.success("Message sent successfully");
      })
      .catch((error) => {
        // disabling the loading
        setLoading(false);
        Notiflix.Notify.failure(error.message);
      });

    // clearing the form
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  }

  // JSX ///////////////////////////
  return (
    <div className='contact position-relative py-5 mt-5' id='contact'>
      {/* the arrow shape top */}
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100 102'
        height='75'
        width='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        className='svgcolor-light position-absolute top-0 start-0'
      >
        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
      </svg>

      {/* the top arrow shape */}
      <Header text='contact' light />

      {/* the have a question text */}
      <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
        <p className='text-center mb-5 px-1 px-md-0'>
          Have a question or want to work together? <br /> <span>(VPN connection required)</span>
        </p>
      </ScrollAnimation>

      {/* the form */}
      <div className='mx-auto col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4'>
        <ScrollAnimation animateIn='zoomIn' duration={0.7} animatePreScroll={false} animateOnce={true}>
          <form className='mx-auto col-10 mb-5 d-flex flex-column' onSubmit={submitHandler}>
            <input
              className='form-control rounded-0 border-0 shadow-none mb-1'
              type='text'
              placeholder='Name'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              className='form-control rounded-0 border-0 shadow-none mb-1'
              type='email'
              placeholder='Enter email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <textarea
              className='form-control rounded-0 border-0 shadow-none mb-1 col-12'
              rows='6'
              placeholder='Your Message'
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            ></textarea>
            <button className='btn shadow-none mt-3 py-2 ms-auto text-uppercase' type='submit' title='Send'>
              {loading ? <Loading /> : "Submit"}
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;
