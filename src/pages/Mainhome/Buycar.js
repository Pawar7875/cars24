import Navbar from "../Navbar/navbar";

const Buycar = () => {
  return (
    <div>
      <Navbar />
      <form class="container d-flex" role="search" style={{ marginTop: "20px" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Buycar;
