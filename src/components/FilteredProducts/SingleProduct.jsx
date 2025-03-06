import { Button, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/slices/cartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();
  const defaultSize = product[0].size ? product[0].size[0] : "";
  const defaultColor = product[0].color ? product[0].color[0] : "";
  const { id } = useParams();
  const [size, setSize] = useState(defaultSize);
  const [color, setColor] = useState(defaultColor);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-6 px-4 md:px-10">
      {product
        .filter((item) => item.id === id)
        .map((oneProduct, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start w-full"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="h-64 sm:h-80 md:h-[500px] lg:h-[650px] rounded-lg object-cover"
                src={oneProduct.img}
                alt={oneProduct.name}
              />
            </div>

            {/* Product Info Section */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4">
              <div className="max-w-lg">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {oneProduct.name}
                </h5>
                <p className="text-orange-700 text-lg sm:text-xl font-bold pb-2">
                  15%
                </p>
                <p className="text-gray-600 text-base sm:text-lg font-bold pb-4">
                  {oneProduct.text}
                </p>

                {/* Size Selection */}
                <div className="pb-4">
                  <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a size
                  </label>
                  <select
                    id="size"
                    name="size"
                    disabled={!oneProduct.size}
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full p-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                  >
                    {oneProduct?.size?.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Selection */}
                <div className="pb-4">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a color
                  </label>
                  <select
                    id="color"
                    name="color"
                    disabled={!oneProduct.color}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full p-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                  >
                    {oneProduct?.color?.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add to Cart Button */}
                <Tooltip content="Add to Cart" placement="bottom">
                  <Button
                    color="gray"
                    variant="outlined"
                    size="lg"
                    ripple={true}
                    className="w-full"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: oneProduct.id,
                          name: oneProduct.name,
                          size: size,
                          img: oneProduct.img,
                          text: oneProduct.text,
                          color: color,
                          price: oneProduct.price,
                          amount: 1,
                          totalPrice: oneProduct.price,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProduct;
