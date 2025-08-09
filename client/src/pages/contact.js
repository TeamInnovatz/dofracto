import './contact.css';
import cubeImage from '../assets/cube.png';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-box">
          <h2 className="heading">Get in touch</h2>
          <p className="subheading">
            Got questions? Reach out to our team for more information about
            how DoFracto can transform your investment journey.
          </p>

          <div className="content-wrapper">
            <div className="cube-container">
              <img src={cubeImage} alt="3D cube" className="cube-image" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="name-row">
                <input type="text" placeholder="First Name *" required />
                <input type="text" placeholder="Last Name *" required />
              </div>
              <input
                type="email"
                placeholder="Email *"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Enter a valid email address"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid phone number"
              />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
