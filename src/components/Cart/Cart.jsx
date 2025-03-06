import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removefromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.length > 0 ? (
        <Dialog
          open={openModal}
          handler={() => setOpen(false)}
          className="overflow-y-auto max-h-[80vh]"
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody className="flex flex-col justify-center items-start">
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img
                        className="h-[125px] rounded-md"
                        src={item.img}
                        alt={item.name}
                      ></img>
                      <div className="flex flex-col items-start">
                        <h4 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                          {item.name}
                        </h4>
                      </div>
                      <div className="max-w-xs ">
                        <p className="text-black text-xs font-inter  tracking-normal leading-none pt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                        Selected Size: <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                        Selected Color:{" "}
                        <span
                          className="ml-2 rounded-full px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                        Ampunt: <span className="ml-2">{item.amount}</span>
                      </p>
                      <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                        Single Item Price:{" "}
                        <span className="ml-2">{item.price}$</span>
                      </p>
                      <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                        Total Item Prices:{" "}
                        <span className="ml-2">{item.totalPrice}$</span>
                      </p>
                      <div className="pt-4">
                        <Tooltip
                          content="Remove from the Cart"
                          placement="bottom"
                        >
                          <Button
                            color="red"
                            variant="filled"
                            size="sm"
                            ripple={true}
                            onClick={() => dispatch(removefromCart(item))}
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter className="flex justify-start items-center">
            <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
              Total Prices of all Products:{" "}
              <span className="ml-2">{totalPrice}$</span>
            </p>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog open={openModal} handler={() => setOpen(false)}>
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody divider>
            <div>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Your Bag is Empty
              </h1>
              <p className="text-black text-base font-inter tracking-normal leading-none">
                Add some Products
              </p>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
