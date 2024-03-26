import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import dotenv from "dotenv-webpack";
// const OWNER_ACCOUNT = process.env.REACT_APP_OWNER_ACCOUNT;
const BASE_URL = "http://localhost:3000/fungibleToken/balance/";
const OWNER_BALANCE_URL =
  BASE_URL + "0xd4d499a1e956893A52B437f4546387b0C5824b11";
const USER_BALANCE_URL =
  BASE_URL + "0x7E6e8af1689162B7e47f11EA5E2e10acc0dEb5e1";

const Info = (props: { role: string }) => {
  const role = props.role;
  const [ownerBalance, setOwnerBalance] = useState({ balance: "0" });
  const [userBalance, setUserBalance] = useState({ balance: "0" });

  const getBalance = () => {
    if (role == "owner") {
      axios
        .all([axios.get(OWNER_BALANCE_URL)])
        .then((res) => {
          console.log("owner:", res[0].data);
          setOwnerBalance(res[0].data);
          return ownerBalance.balance;
        })
        .catch(console.log);
    } else {
      axios
        .all([axios.get(USER_BALANCE_URL)])
        .then((res) => {
          console.log("user:", res[0].data);
          setUserBalance(res[0].data);
          return userBalance.balance;
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
        <p>{role == "owner" ? ownerBalance.balance : userBalance.balance}</p>
      </div>
    </>
  );
};

export default Info;
