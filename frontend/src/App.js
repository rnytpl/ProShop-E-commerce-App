import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./store/productSlice";

const App = () => {
  const { isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Router>
      <main>
        <Header />
        <section className="content py-3">
          <Container>
            <Routes>
              <Route path="/products" element={<HomeScreen />} />
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
