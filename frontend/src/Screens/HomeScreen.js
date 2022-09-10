import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import axios from "axios";
//
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios("/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-center pb-3 mt-3">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
