import { Card } from "react-bootstrap";
import Balance from "./Balance";

const User = () => {
  return (
    <>
      <Card>
        <Card.Body>User Page</Card.Body>
      </Card>
      <Balance role={"user"}/>
    </>
  );
};

export default User;
