import "./OfficeLocation.css";

const OfficeLocation = () => {
  return (
    <section className="office-location">
      <div className="container">
        <div className="section-header">

          <span className="section-tag">
            Find Us
          </span>

          <h2 className="section-title">
            Visit Our <span>Office</span>
          </h2>

          <p className="section-description">
            Drop by for a coffee and let's discuss your project in person.
            We're located in the heart of Mumbai's tech district.
          </p>

        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005671136654!2d72.8346887!3d19.1070949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f9f9f9f9f9%3A0x9f9f9f9f9f9f9f9f!2sGrowthAI%20Office!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
            title="GrowthAI Office Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default OfficeLocation;