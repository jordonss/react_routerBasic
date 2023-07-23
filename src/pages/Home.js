import { Link } from "react-router-dom";

function HomePage() {
  return (
  <div>
    <h1>My HomePage</h1>
		<p>go to <Link to="products">products</Link></p>
  </div>
	)
}

export default HomePage;
