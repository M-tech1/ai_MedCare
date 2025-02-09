const Footer = () => {
  return (
    <>
      <footer className="bg-primary w-full">
        <div className="footer bg-bg-variant text-white py-12">
          <div className="footer-content mx-auto flex justify-around">
            <div className="footer-section flex-1 px-2">
              <h2 className="text-blue-500">About Us</h2>
              <p className="text-sm">
                We are committed to providing high-quality healthcare services
                with compassion and excellence. Your health is our priority.
              </p>
            </div>
            <div className="footer-section flex-1 px-4">
              <h2 className="text-blue-500">Contact Us</h2>
              <p className="text-sm">
                {" "}
                Medical Center <br />
                123 Health Street <br />
                Abuja, Nigeria <br />
                Email: info@aimedcare.com <br />
                Phone: +2348065191675
              </p>
            </div>
            {/* <div className="footer-section flex-1 px-4">
              <h2 className="text-blue-500">Appointments</h2>
              <p className="text-sm">
                {" "}
                Schedule your appointment today for personalized and attentive
                medical care.
              </p>
              <button className="btn-appointment bg-blue-500 text-white py-2 px-4 rounded cursor-pointer text-sm transition duration-300 hover:bg-blue-600">
                Schedule Now
              </button>
            </div> */}
          </div>
          <div className="footer-bottom mt-4"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
