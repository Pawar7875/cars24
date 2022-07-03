import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signin = () => {
    if (email.length === 0) toast.error("Enter the Email");
    else if (password.length === 0) toast.error("Enter the Password");
    else {
      axios
        .post("http://localhost:4000/user/Signin", { email, password })
        .then((response) => {
          const result = response.data;
          if (result.status === "failure")
            toast.error("Invalid email or password");
          else {
            toast.success("Welcome to CARS30");
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    }
  };
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
      <div style={{ textAlign: "center" }}>
          <h3>Sign In</h3>
        </div>
        <div className="mb-3 mt-3">
          <label>Enter Your Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Enter Your Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Dont have an account?</label>
          <Link to="/SignUp">SignUp here</Link>
        </div>
        <div>
          <button style={styles.signbutton} onClick={signin}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  
  container: {
    width: 400,
    height: "fit-content",
    padding: 20,
    position: "relative",
    top: 70,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 50,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signbutton: {
    backgroundColor: "#db0f62",
    width: "100%",
    height: 40,
    borderStyle: "solid",
    borderColor: "#db0f62",
    borderRadius: 30,
    color:"#fff"
  },
};
export default Signin;

/*  */
