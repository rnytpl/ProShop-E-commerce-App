import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import { Message } from "../Components/Message";
import { Loader } from "../Components/Loader";

const HomeScreen = () => {
  const { products, isLoading, productsError } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {productsError && productsError ? (
        <Message variant="danger">{productsError}</Message>
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
