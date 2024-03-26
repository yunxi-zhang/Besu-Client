import { Card } from 'react-bootstrap';
import Balance from "./Balance";

const Owner = () => {
  return (
    <>
      <Card>
        <Card.Body>Owner Page</Card.Body>
      </Card>
      <Balance role={"owner"} />
    </>
  );
};

export default Owner;
