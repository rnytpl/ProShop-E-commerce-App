import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { Rating } from "../Components/Rating";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Loader } from "../Components/Loader";
import { Message } from "../Components/Message";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../store/productSlice";
import { cartActions } from "../store/cartSlice";

const ProductScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  const { product, productDetailError, isLoading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ product, qty }));
    navigate("/cart")
  };

  if (isLoading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {productDetailError ? (
        <Message variant="danger">{productDetailError}</Message>
      ) : (
        <>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col md={4}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h2>{product.name}</h2>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroup.Item>
                    <Row className="text-center mb-2">
                      <Col>Quantity</Col>
                    </Row>

                    <Row className="text-center flex-nowrap">
                      <Col>
                        <Button
                          className={"btn-light"}
                          onClick={() => {
                            setQty(qty - 1);
                          }}
                          disabled={qty === 0 || product.countInStock === 0}
                        >
                          <i className="fa-solid fa-chevron-left"></i>
                        </Button>
                      </Col>
                      <Col className="m-auto">
                        <Form.Label>{qty}</Form.Label>
                      </Col>
                      <Col>
                        <Button
                          className={"btn-light"}
                          onClick={() => {
                            setQty(qty + 1);
                          }}
                          disabled={
                            product.countInStock === 0 ||
                            qty === product.countInStock
                          }
                        >
                          <i className="fa-solid fa-chevron-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroupItem className="text-center">
                    <Button
                      onClick={addItemToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={qty === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
