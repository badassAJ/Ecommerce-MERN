import React from "react";
import Layout from "../components/Layout/Layout";

const ContactUs = () => {
  return (
    <Layout title = {"Contact Us – We're Here to Help | AdityaAJ Support"}>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {/* Left: Image */}
          <div style={styles.imageContainer}>
            <img src="/images/contact_us.png" alt="Contact" style={styles.image} />
          </div>

          {/* Right: Info */}
          <div style={styles.infoContainer}>
            <h2 style={styles.title}>Get in Touch</h2>
            <p style={styles.text}>
              We'd love to hear from you! Feel free to reach out to us with any queries or feedback.
            </p>
            <div style={styles.contactBlock}>
              <h4>📍 Address</h4>
              <p>New Delhi, India</p>
            </div>
            <div style={styles.contactBlock}>
              <h4>📞 Phone</h4>
              <p>+91-7267990026</p>
            </div>
            <div style={styles.contactBlock}>
              <h4>✉️ Email</h4>
              <p>adityaaj05092003@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  wrapper: {
    padding: "50px 20px",
    background: "",
    fontFamily: "'Poppins', sans-serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "1100px",
    margin: "0 auto",
    gap: "40px",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  infoContainer: {
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  text: {
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  contactBlock: {
    marginBottom: "15px",
  },
};

export default ContactUs;
