import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
// import axios from "axios";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { products, error } = useSelector((state) => state.product);
  return (
    <>
      {error && error ? (
        <div>{error}</div>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
