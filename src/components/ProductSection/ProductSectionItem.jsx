import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    // <div>
    //   <Card className="w-96 relative">
    //     <Typography
    //       variant="h4"
    //       className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
    //     >
    //       SALE%
    //     </Typography>
    //     <CardHeader floated={false} className="h-96">
    //       <img src={img} alt={name} />
    //     </CardHeader>
    //     <CardBody className="text-center">
    //       <Typography variant="h4" color="blue-gray" className="mb-2">
    //         {name}
    //       </Typography>
    //       <Typography color="gray" className="font-medium" textGradient>
    //         {text}
    //       </Typography>
    //       <div className="flex justify-between items-center pt-4">
    //         <Typography color="red" className="font-medium" textGradient>
    //           Size left:{" "}
    //           <span className="text-gray-400 text-base font-extralight">
    //             {defaultSize}
    //           </span>
    //         </Typography>
    //         <Typography color="gray" className="font-medium" textGradient>
    //           Color:{" "}
    //           <span
    //             className="px-2 rounded-full ml-2"
    //             style={{ backgroundColor: defaultColor }}
    //           ></span>
    //         </Typography>
    //       </div>
    //     </CardBody>
    //     <CardFooter className="flex justify-center gap-7 pt-2">
    //       <Tooltip content="Add to Cart" placement="bottom">
    //         <Button
    //           onClick={() =>
    //             dispatch(
    //               addToCart({
    //                 id: id,
    //                 img: img,
    //                 text: text,
    //                 amount: 1,
    //                 price: price,
    //                 totalPrice: totalPrice,
    //                 name: name,
    //                 size: defaultSize,
    //                 color: defaultColor,
    //               })
    //             )
    //           }
    //           size="lg"
    //           color="gray"
    //           variant="outlined"
    //           ripple={true}
    //         >
    //           Add to Cart
    //         </Button>
    //       </Tooltip>
    //     </CardFooter>
    //   </Card>
    // </div>
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-sm relative">
        {/* Sale Tag */}
        <Typography
          variant="h4"
          className="absolute top-8 right-6 z-10 text-red-700 text-sm sm:text-lg sm:-rotate-45"
        >
          SALE%
        </Typography>

        {/* Image Section */}
        <CardHeader floated={false} className="h-64 md:h-96">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </CardHeader>

        {/* Card Body */}
        <CardBody className="text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-base md:text-lg"
          >
            {name}
          </Typography>
          <Typography color="gray" className="font-medium text-sm md:text-base">
            {text}
          </Typography>

          {/* Size & Color Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center pt-4">
            <Typography
              color="red"
              className="font-medium text-sm md:text-base"
            >
              Size left:{" "}
              <span className="text-gray-400 font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography
              color="gray"
              className="font-medium text-sm md:text-base mt-2 sm:mt-0"
            >
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2 inline-block w-4 h-4"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>

        {/* Footer with Add to Cart Button */}
        <CardFooter className="flex justify-center pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    img,
                    text,
                    amount: 1,
                    price,
                    totalPrice,
                    name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="sm md:lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
