import Card from "react-bootstrap/Card";

function OrderInfo(props) {
  return (
    <Card className="mx-4 px-4 my-3" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="mb-3">{props.id}</Card.Title>
        <Card.Text>Order Date: {props.date}</Card.Text>
        <Card.Text>Number of Items: {props.items}</Card.Text>
        <Card.Text>Total Price: {props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default OrderInfo;
