import { useSelector } from "react-redux";
// import { getProductsThunk } from "../../store/modules/products/thunk";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Product from "../Product";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);
  console.log(products);
  //   const { products } = useSelector((state) => state.products);
  //   console.log("agorasasa", products);

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </div>
    // products && (
    //   <ul>
    //     {products.map((product, index) => {
    //       <li key={index}>
    //         <h1>{product.title}</h1>
    //       </li>;
    //     })}
    //   </ul>
    // )
  );
};

export default ShowProducts;
