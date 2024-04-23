import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";
import { UserContext } from "../../context/UserContext";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isError, setIsError] = useState(false);

  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  const { addUserDataHandler } = useContext(UserContext);

  const user = {
    name: name,
    userName: userName,
    email: email,
    password: password,
  };

  const isValidateForm = () => {
    if (!name || !userName || !email || !password) {
      setIsError(true);
      setIsSignup(false);
      return false;
    }
    setIsSignup(true);
    setIsError(false);
    return true;
  };

  useEffect(() => {
    if (isSignup && timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(timeoutId); // cleanup the timer when the component unmounts
    } else if (timer === 0) {
      navigate("/login");
    }
  }, [isSignup, timer, navigate]);

  const signupBtnClickHandler = () => {
    if (isValidateForm()) {
      addUserDataHandler(user);
      setIsSignup(true);
    }
  };

  const resetFormHandler = () => {
    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="d-inline-block">
        <Row className="mb-2">
          <Col>Name :</Col>
          <Col>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>User Name :</Col>
          <Col>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>Email :</Col>
          <Col>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>Password :</Col>
          <Col>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button onClick={signupBtnClickHandler}>Sign Up</Button>
          </Col>
          <Col>
            <Button variant="link" onClick={resetFormHandler}>
              Reset Form
            </Button>
          </Col>
        </Row>
      </div>
      {isError && (
        <div className={styles.errorMsg}>
          <h5 className="text-danger">Please fill all the fields...!</h5>
        </div>
      )}
      {isSignup && (
        <div className={styles.successMsg}>
          <h5 className="text-success">User created Successfully...!</h5>
          <p>You will be re-directed to the Login page in {timer} seconds</p>
        </div>
      )}
    </>
  );
};

export default SignupForm;
