import ScrollAnimation from "react-animate-on-scroll";

const MAItem = ({ text, percentage }) => {
  return (
    <ScrollAnimation animateIn='bounceInRight' duration={2} animateOnce={true}>
      <div className='ma_item d-flex align-items-center position-relative mx-auto col-12 col-md-10 col-lg-12 mb-1 mb-lg-0'>
        {/* percentage background ("dark blue" part) */}
        <div style={{ width: percentage }}>
          {/* ability name */}
          <h6 className='text-center my-auto h-100 py-2'>{text}</h6>
        </div>
        {/* percentage num */}
        <span className='position-absolute me-3 end-0'>{percentage}</span>
      </div>
    </ScrollAnimation>
  );
};

export default MAItem;
