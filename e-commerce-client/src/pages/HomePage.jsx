import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { useAuth } from "../context/auth.jsx";

const HomePage = () => {
    const {auth,setAuth} = useAuth();
    return (
        <Layout title = {"Shop Quality Products Online – AdityaAJ E-Commerce"} >
            <h1 className="text-center">Homepage</h1>
                <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    );
};

export default HomePage;