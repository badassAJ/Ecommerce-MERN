import React from "react";
import Layout from "../components/Layout/Layout";

const AboutUs = () => {
  return (
    <Layout title = {"Trusted Online Shopping with AdityaAJ"}>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          <div style={styles.imageContainer}>
            <img src="/images/about us.png" alt="About Us" style={styles.image} />
          </div>
          <div style={styles.content}>
            <h2 style={styles.title}>About Our E-Commerce</h2>
            <p style={styles.text}>
              Welcome to AdityaAJ E-Commerce, your number one source for quality products at affordable prices. We're dedicated to giving you the very best shopping experience, with a focus on reliability, customer service, and uniqueness.
            </p>
            <p style={styles.text}>
              Founded in 2024, our mission has been to create a simple, efficient, and delightful shopping experience. Our platform serves thousands of happy customers with a diverse range of categories and fast delivery.
            </p>
            <p style={styles.text}>Thank you for being part of our journey.</p>
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
    content: {
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
  };
  

export default AboutUs;
