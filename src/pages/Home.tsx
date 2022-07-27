import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-container">
      <img className="home-img" src="../../imgs/back-home.png" alt="" />
      <div className="box-home">
        <h1> BUY</h1>
        <h3>Just buy...</h3>
        <Link className="btn-home" to="/store">
          Go to the store
        </Link>
      </div>
    </div>
  );
}
