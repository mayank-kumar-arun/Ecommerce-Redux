import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../../features/slices/productsSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {buttons.map((button, index) => (
          <Link to={"/filteredProducts/" + button} key={index}>
            <Button
              color="gray"
              ripple={true}
              size="lg"
              variant="outlined"
              className="text-black hover:bg-gray-300 duration-300 ease-in-out px-4 py-2 text-sm md:text-base"
              onClick={() => dispatch(filteredProducts(button))}
            >
              {button}
            </Button>
          </Link>
        ))}
      </div>

      {/* Sale Banner */}
      <div className="bg-black p-2 max-w-md w-full mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-sm md:text-lg font-inter font-bold tracking-normal">
          SALES UP TO 50%
        </h3>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center py-4">
        <img
          className="w-full max-w-3xl rounded-md shadow-lg shadow-gray-600 max-h-[400px] md:h-[600px] object-cover"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
