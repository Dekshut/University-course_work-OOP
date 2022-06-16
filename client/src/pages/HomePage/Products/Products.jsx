import ProductItem from "../../../components/ProductItem/ProductItem";


function Products() {
  return (
    <section class="product">
      <div class="container">
        <h3 class="title">
          TRENDING PRODUCTS
        </h3>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodmoe tempor incididunt ut labore et
          dolore aliqua.
        </p>
        <div class="product__items">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <a class="product__link" href="#">LOAD MORE</a>
      </div>
    </section>
  );
}

export default Products;