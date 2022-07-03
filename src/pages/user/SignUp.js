import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../Navbar/navbar";

const Signup = () => {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const signup = () => {
    if (Firstname.length === 0) {
      toast.error("Please enter First Name");
    } else if (Lastname.length === 0) toast.error("Please enter Last Name");
    else if (email.length === 0) {
      toast.error("Please enter Email ");
    } else if (password.length === 0) {
      toast.error("Please enter Password");
    } else if (confirmPassword !== password)
      toast.error("Please confirm Password");
    else if (phone.length === 0) toast.error("Please enter Phone number");
    else if (city.length === 0) toast.error("Please enter the city");
    else {
      axios
        .post("http://localhost:4000/user/Signup", {
          Firstname,
          Lastname,
          email,
          password,
          city,
          phone,
        })
        .then((reponse) => {
          const result = reponse.data;
          if (result.status === "Failure") toast.error("went Something wrong");
          else {
            toast.success("Successfully registered");
            navigate("/Signin");
            console.log(result);
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
          <h3>Sign Up</h3>
        </div>
        <div className="mb-3 mt-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button style={styles.signinButton} onClick={signup}>
            Register
          </button>
          <div className="m-2">
            <label>Already Register ? </label>
            <Link to="/Signin">Signin Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: 450,
    height: " fit-content",
    padding: 20,
    position: "relative",
    top: 20,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 50,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    backgroundColor: "#db0f62",
    width: "100%",
    height: 40,
    borderStyle: "solid",
    borderColor: "#db0f62",
    borderRadius: 30,
    color: "#fff",
  },
};
export default Signup;
