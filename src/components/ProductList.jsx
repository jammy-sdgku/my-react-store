import Product from "./Product";
import "./ProductList.css";

function ProductList({
  products = [],
  loading = false,
  error = null,
  showDescription = true,
  showFeatures = false,
  onAddToCart,
  onViewDetails,
}) {
  // Handle loading state
  if (loading)
    return <p className="product-list__message">Loading products...</p>;
  if (error)
    return (
      <p className="product-list__message product-list__message--error">
        {error}
      </p>
    );
  if (products.length === 0) {
    return <p className="product-list__message">No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          showDescription={showDescription}
          showFeatures={showFeatures}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;
