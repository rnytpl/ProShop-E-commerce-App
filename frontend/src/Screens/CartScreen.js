import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartScreen = () => {

  const { cartItems, totalAmount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart())
  }
  const removeHandler = (i) => {
    dispatch(cartActions.removeItemFromCart(i))
  }

  if (!cartItems.length > 0) {
    return <div>You do not have any items in your cart</div>
  }

  return (
    <Container fluid>
      {
        cartItems.map(item => (
          <Row key={item._id} className="text-center mb-3 m-auto">
            <Col xs={2} className="m-auto">
              <Link to={`/products/${item._id}`}>
                <Image src={item.image} fluid rounded />
              </Link>
            </Col>
            <Col sm={3} className="m-auto">
              <Link to={`/products/${item._id}`}>
                {item.name}
              </Link>
            </Col>
            <Col sm={1} className="m-auto">
              {item.qty}
            </Col>
            <Col sm={1} className="m-auto">
              {item.qty * item.price}
            </Col>
            <Col sm={1} className="m-auto">
              <Button variant="light" onClick={() => removeHandler(item)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </Col>
          </Row>
        ))
      }
      <hr />
      <Col md={{ span: 5, offset: 7 }} className="text-center">
        <h2>Subtotal: {totalAmount.toFixed(2)}</h2>
      </Col>
    </Container>


  )
};

export default CartScreen;