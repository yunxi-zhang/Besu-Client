import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
const BALANCE_API = process.env.REACT_APP_BASE_URL + "fungibleToken/balance/";
const OWNER_BALANCE_API = BALANCE_API + process.env.REACT_APP_OWNER_ACCOUNT;
const USER_BALANCE_API = BALANCE_API + process.env.REACT_APP_USER_ACCOUNT;

const Info = (props: { role: string }) => {
  const role = props.role;
  const [ownerBalance, setOwnerBalance] = useState({ balance: "0" });
  const [userBalance, setUserBalance] = useState({ balance: "0" });

  const getBalance = () => {
    if (role === "owner") {
      axios
        .all([axios.get(OWNER_BALANCE_API)])
        .then((res) => {
          console.log("owner:", res[0].data);
          setOwnerBalance(res[0].data);
        })
        .catch(console.log);
    } else {
      axios
        .all([axios.get(USER_BALANCE_API)])
        .then((res) => {
          console.log("user:", res[0].data);
          setUserBalance(res[0].data);
        })
        .catch(console.log);
    }
  };

  return (
    <>
      <div>
        <Button onClick={getBalance} variant="primary">
          Check Balance
        </Button>{" "}
        <p>{role === "owner" ? ownerBalance.balance : userBalance.balance}</p>
      </div>
    </>
  );
};

export default Info;
