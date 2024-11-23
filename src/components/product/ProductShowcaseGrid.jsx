/* eslint-disable react/forbid-prop-types */
import {
  FeaturedProduct,
  ProductList,
  ProductGrid,
} from "@/components/product";
import PropType from "prop-types";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";

const ProductShowcase = ({ products, skeletonCount }) => {
  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );
  return (
    <section className="product-list-wrapper">
      <div className="product-grid">
        {products.length === 0 ? (
          new Array(skeletonCount).fill({}).map((product, index) => (
            <FeaturedProduct
              // eslint-disable-next-line react/no-array-index-key
              key={`product-skeleton ${index}`}
              product={product}
            />
          ))
        ) : (
          <>
            {/* products.map((product) => (
      <FeaturedProduct
        key={product.id}
        product={product}
      />
    )) */}
            <section className="product-list-wrapper">
              <ProductList {...store}>
                <ProductGrid products={products} />
              </ProductList>
            </section>
          </>
        )}
      </div>
    </section>
  );
};

ProductShowcase.defaultProps = {
  skeletonCount: 4,
};

ProductShowcase.propTypes = {
  products: PropType.array.isRequired,
  skeletonCount: PropType.number,
};

export default ProductShowcase;
