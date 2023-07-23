import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product Deatails</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetailPage;
