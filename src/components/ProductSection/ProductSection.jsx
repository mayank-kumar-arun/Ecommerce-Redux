import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div className="px-4">
      {/* Sale Banner */}
      <div className="bg-black p-2 w-full max-w-lg mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-base md:text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => (
          <div key={index}>
            <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              totalPrice={product.totalPrice}
              color={product.color}
              size={product.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
