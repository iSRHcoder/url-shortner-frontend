import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const [uName, setUName] = useState("");
  const [pwd, setPwd] = useState("");
  const [timer, setTimer] = useState(3);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const { userData } = useContext(UserContext);
  const { isAuth, loginHandler } = useContext(AuthContext);

  const msgHandler = (msg, type) => {
    if (type === "success") {
      setSuccessMsg(msg);
    } else if (type === "error") {
      setErrorMsg(msg);
    }

    if (isAuth) {
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
        setErrorMsg("");
      }, 2000);
    }
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  useEffect(() => {
    if (isAuth) {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      } else {
        navigate("/");
      }
    }
  }, [timer, navigate, isAuth]);

  const loginBtnHandler = () => {
    if (!(uName && pwd)) {
      msgHandler("Please enter all the required fields...", "error");
    } else if (!(userData.userName === uName && userData.password === pwd)) {
      msgHandler(
        "Please enter Valid UserName and Password & if dont have account create account first",
        "error"
      );
    } else {
      setSuccessMsg("LogIn Successfull...!", "success");
      loginHandler();
    }
  };

  const createAccHandler = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={`d-inline-block ${styles.container}`}>
        <Row className="mb-2">
          <Col>UserName:</Col>
          <Col>
            <input value={uName} onChange={(e) => setUName(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>Password:</Col>
          <Col>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button onClick={loginBtnHandler}>Log In</Button>
          </Col>
          <Col>
            <Button variant="link">Reset Form</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button variant="warning" onClick={createAccHandler}>
              Create Account
            </Button>
          </Col>
        </Row>
      </div>
      {isAuth && (
        <Row className={styles.successMsg}>
          <h3 className="text-success">{successMsg}</h3>
          <p>You will be redirected to Home Page in {timer} sec</p>
        </Row>
      )}
      <h5 className={`text-danger ${styles.errorMsg}`}>{errorMsg}</h5>
    </>
  );
};

export default LoginForm;
