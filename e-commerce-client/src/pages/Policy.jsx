import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title = {"Privacy Policy – Your Data is Safe with AdityaAJ"}>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          <div style={styles.imageContainer}>
            <img src="/images/poilcy.png" alt="Privacy Policy" style={styles.image} />
          </div>
          <div style={styles.content}>
            <h2 style={styles.title}>Privacy Policy</h2>
            <p style={styles.text}>
              We value your privacy. All user data is securely stored and never shared with third parties without consent.
            </p>
            <p style={styles.text}>
              Our platform uses encryption and security protocols to protect your data. By using our services, you agree to our privacy practices.
            </p>
            <p style={styles.text}>
              You have full control over your information and can request modifications or deletions anytime.
            </p>
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
  

export default Policy;
