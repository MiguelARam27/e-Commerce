import React, { useEffect } from 'react';
import { Button, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

import { useDispatch, useSelector } from 'react-redux';

import CheckoutSteps from '../components/CheckoutSteps';

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    order.shippingPrice = addDecimals(order.itemsPrice > 120 ? 0 : 100);
  }

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [order, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>
        ORDER : <strong>{order._id}</strong>
      </h1>
      <Row>
        <Col md={8}>
          <ListGroup.Item>
            <h2>shipping</h2>
            <p>
              <strong>Name:</strong>

              {order.user.name}
            </p>
            <p>
              <span>Email:</span>
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
            <p>
              <strong>Address: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.postalCode} ,
              {order.shippingAddress.country}
            </p>

            {order.isDelivered ? (
              <Message variant='succes'>
                Delivered on {order.DeliveredAt}
              </Message>
            ) : (
              <Message variant='danger'>Not Delivered</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Message variant='succes'>Paid on {order.paidAt}</Message>
            ) : (
              <Message variant='danger'>Not paid</Message>
            )}
          </ListGroup.Item>

          <ListGroup.Item>
            <h2>Order summary:</h2>
            {order.orderItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <ListGroup variant='flush'>
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fluid
                          rounded
                        ></Image>
                      </Col>

                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>

                  <Col>
                    {order.shippingPrice === '0.00'
                      ? 'Free'
                      : `${order.shippingPrice}`}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
