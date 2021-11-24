const Product = ({ product }) => {
  const { title, description, image, price } = product;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt="image-product" />
      <span>{price}</span>
    </div>
  );
};

export default Product;
