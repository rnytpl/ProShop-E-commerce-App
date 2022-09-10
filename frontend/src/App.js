import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <section className="content py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </section>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
