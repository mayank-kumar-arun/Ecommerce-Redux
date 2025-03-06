import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  filterByColor,
  filterBySize,
  filteredProducts,
  filterGender,
  sortByPrice,
} from "../../features/slices/productsSlice";
import Error from "../Error/Error";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-8">
        <div className="pl-4 sm:pl-6 md:pl-10">
          <h1 className="text-3xl sm:text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex flex-wrap items-center justify-between py-6 sm:py-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {genderButtons.map((item, index) => (
                <Button
                  key={index}
                  color="gray"
                  ripple={true}
                  size="md sm:lg"
                  variant="outlined"
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out sm:mr-2 md:mr-4"
                  onClick={() => dispatch(filterGender(item))}
                >
                  {item}
                </Button>
              ))}

              <Button
                color="gray"
                ripple={true}
                size="md sm:lg"
                variant="outlined"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out sm:mr-2 md:mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>

              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    ripple={true}
                    size="md sm:lg"
                    variant="outlined"
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out sm:mr-2 md:mr-4"
                  >
                    Select the color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => (
                    <MenuItem
                      key={index}
                      style={{ color: item }}
                      onClick={() => dispatch(filterByColor(item))}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    ripple={true}
                    size="md sm:lg"
                    variant="outlined"
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out sm:mr-2 md:mr-4"
                  >
                    Select the Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => dispatch(filterBySize(item))}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>

            <div className="w-full sm:w-auto pl-0 sm:pl-10 mt-4 sm:mt-0">
              <Button
                color="gray"
                ripple={true}
                size="md sm:lg"
                variant="outlined"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out w-full sm:w-auto"
                onClick={() => dispatch(filteredProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>

        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center px-4 sm:px-6 md:px-8 py-8 gap-6 sm:gap-8 md:gap-12 overflow-x-hidden">
            {products
              ?.filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
