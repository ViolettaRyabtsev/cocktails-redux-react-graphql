import "./contact-us.scss";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="text-container">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>
      <div className="form-container">
        <form>
          <input />
          <input />
          <input className="input-body" />
          <button type="onSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
