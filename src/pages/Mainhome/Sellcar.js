import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../Navbar/navbar";
import Modal from "../Modal/Modal";

const Sellcar = () => {
  const [cmp_name, setcmp_name] = useState("");
  const [mod_name, setmod_name] = useState("");
  const [mod_year, setmod_year] = useState("");
  const [variant, setvariant] = useState("");
  const [price, setprice] = useState("");
  const [Km, setkm] = useState("");
  const [trans_type, settrans_type] = useState("");
  const [owner, setowner] = useState("");
  const [fuel_type, setfuel_type] = useState("");
  const [body, setbody] = useState("");
  const [rto, setrto] = useState("");
  const [number, setnumber] = useState("");
  const [cnumber, setcnumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [trans_type, settrans_type] = useState('')
  const navigate = useNavigate();
  const sellit = () => {
    setShowModal(true);
    // toast.success("Sell order Placed");
    // navigate("/home");
  };
  const hideModal=()=>{
    setShowModal(false)
  }
  return (
    <div>
      <Navbar />
      <Modal show={showModal} handleClose={hideModal}>
        <p>Modal</p>
      </Modal>
      <div className="container-fluid" display="flex">
        <b textAlign="center">Sell From Your Home</b>
        <b> Instany Payment</b>
      </div>
      <div style={styles.container}>
        {/* <div style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: 'orange', height: '60px', borderRadius: 30, position: 'relative' }}>
                    <h2>Enter The Details</h2>
                </div> */}
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Company Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="eg; Maruti Suzuki , Hyundai"
              onChange={(event) => {
                setcmp_name(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Model Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="eg; Swift , Verna"
              onChange={(event) => {
                setmod_name(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Model Year
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="staticEmail"
              placeholder="Enter the Model Year"
              onChange={(event) => {
                setmod_year(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Variant
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="Enter the Variant"
              onChange={(event) => {
                setvariant(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Price
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="staticEmail"
              placeholder="Enter the Car Price"
              onChange={(event) => {
                setprice(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            KM
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="Enter the Km driven"
              onChange={(event) => {
                setkm(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Transmission type
          </label>
          <div class="col-sm-10">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                settrans_type(event.target.value);
              }}
            >
              <option selected value="M">
                Mannual
              </option>
              <option value="A">Auto</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Owner
          </label>
          <div class="col-sm-10">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setowner(event.target.value);
              }}
            >
              <option selected value="First">
                First Owner
              </option>
              <option value="Second">Second Owner</option>
              <option value="Third">Third Owner</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Fuel type
          </label>
          <div class="col-sm-10">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setfuel_type(event.target.value);
              }}
            >
              <option selected value="P">
                Petrol
              </option>
              <option value="D">Diesel</option>
              <option value="C">CNG</option>
              <option value="E">Electric</option>
              <option value="H">Hybrid</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            RTO
          </label>
          <div class="col-sm-10">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setrto(event.target.value);
              }}
            >
              <option selected value="MH">
                MH
              </option>
              <option value="DL">DL</option>
              <option value="HR">HR</option>
              <option value="UP">UP</option>
              <option value="PB">PB</option>
              <option value="RJ">RJ</option>
              <option value="CH">CH</option>
              <option value="MP">MP</option>
              <option value="MN">MN</option>
              <option value="BR">BR</option>
              <option value="TN">TN</option>
              <option value="KT">KT</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Body
          </label>
          <div class="col-sm-10">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setbody(event.target.value);
              }}
            >
              <option selected value="HatchBag">
                HatchBag
              </option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="LS">Luxury Sedan</option>
              <option value="LSUV">Luxury SUV</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Vehicle Number
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              placeholder="MH-12-AB-1234"
              onChange={(event) => {
                setnumber(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Contact Number
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="staticEmail"
              placeholder=""
              onChange={(event) => {
                setcnumber(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Attach image
          </label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control"
              id="staticEmail"
              placeholder=""
              accept="image/*"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={styles.sellButton} onClick={sellit}>
            Sell Car
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    height: 900,
    padding: 20,
    position: "relative",
    top: 10,
    left: 10,
    right: 10,
    bottom: 0,
    margin: "auto",
    borderColor: "black",
    borderRadius: 50,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  sellButton: {
    backgroundColor: "#db0f62",
    width: "100%",
    height: 40,
    borderStyle: "solid",
    borderColor: "#db0f62",
    borderRadius: 30,
    color: "#fff",
  },
};
export default Sellcar;
