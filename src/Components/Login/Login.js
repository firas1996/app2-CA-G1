import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { AuthContext } from "../../store/auth-context";

const emailReducer = (prevState, action) => {
  if (action.type == "USER_9A3ED_YEKTEB") {
    return { value: action.data, isVaid: action.data.includes("@") };
  }
  if (action.type == "USER_NZEL_EL_BARRA") {
    return { value: prevState.value, isVaid: prevState.value.includes("@") };
  }
  return { value: "", isVaid: null };
};
const passwordReducer = (prevState, action) => {
  if (action.type == "USER_9A3ED_YEKTEB") {
    return { value: action.data, isVaid: action.data.trim().length > 6 };
  }
  if (action.type == "USER_NZEL_EL_BARRA") {
    return {
      value: prevState.value,
      isVaid: prevState.value.trim().length > 6,
    };
  }
  return { value: "", isVaid: null };
};
const Login = () => {
  const { onLogin } = useContext(AuthContext);
  // const [enteredEmail, setEanteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isVaid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isVaid: null,
  });

  // useEffect(() => {
  //   setFormIsValid(emailIsValid && passwordIsValid);
  // }, [emailIsValid, passwordIsValid]);
  // **************************************************************
  const { isVaid: x } = emailState;
  const { isVaid: y } = passwordState;
  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      setFormIsValid(x && y);
    }, 300);
    console.log("effect");
    return () => {
      console.log("clean-up");
      clearTimeout(timer);
    };
  }, [x, y]);
  // **********************************************************
  console.log("test");
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_9A3ED_YEKTEB", data: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_9A3ED_YEKTEB", data: event.target.value });
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.value.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "USER_NZEL_EL_BARRA" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "USER_NZEL_EL_BARRA" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isVaid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isVaid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
