import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/iphones")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: unable to fetch"));
  }, []);
  console.log(products);
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
            </div>
            <div className="brief-description">
                The best for the brightest.
              </div>
          </div>
          {products?.map((product) => {
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip
            } else {
              flip = !flip
            }
            let productDiv = (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">{product.product_brief_description}</div>
                <div className="starting-price">
                  {`Starting at ${product.starting_price}`}
                </div>
                <div className="monthly-price">{product.price_Range
                }</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`${product.product_url}`}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="product-image">
                  <img src={product.product_image} alt="image" />
                </div>
              </div>
            </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
