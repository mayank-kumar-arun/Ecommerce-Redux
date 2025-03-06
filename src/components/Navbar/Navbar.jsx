import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Tooltip } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalAmount } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  console.log("name", name, image, user);
  return (
    <>
      <div className="bg-black p-4 w-full flex justify-center items-center">
        <p className="text-white font-inter text-lg md:text-2xl font-bold">
          Welcome
        </p>
      </div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2">
        <div className="w-32 sm:w-40">
          <img className="h-20 sm:h-28 w-full" src={logo} alt="store" />
        </div>

        <div className="flex flex-row items-center gap-4 mt-2 sm:mt-0">
          {/* Wishlist */}
          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-sm sm:text-base font-medium ml-2">Wish List</p>
          </div>

          {/* Shopping Bag */}
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <div className="rounded-full font-inter bg-gray-400 px-2 text-xs sm:text-sm mr-1">
                {totalAmount}
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className="text-sm sm:text-base font-medium ml-2">
              Shopping Bag
            </p>
            {open && <Cart openModal={open} setOpen={setOpen} />}
          </div>

          {/* User Profile */}
          <div className="flex flex-row items-center cursor-pointer">
            {image && (
              <Avatar
                src={image}
                alt="Avatar Image"
                size="sm"
                className="mr-2"
              />
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="text-sm sm:text-base font-medium">
                  Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-black p-4 w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4">
        <p className="text-white text-sm sm:text-base font-medium">50% OFF</p>
        <p className="text-white text-sm sm:text-base font-medium sm:mx-24">
          Free shipping and returns
        </p>
        <p className="text-white text-sm sm:text-base font-medium">
          Different payment methods
        </p>
      </div>
    </>
  );
};

export default Navbar;
