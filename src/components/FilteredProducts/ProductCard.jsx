import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card
        className="mt-4 w-full sm:w-80 md:w-96"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue-gray" className="relative h-72 sm:h-80 md:h-96">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-base sm:text-lg"
          >
            {name}
          </Typography>
          <Typography className="text-sm sm:text-base">{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" className="text-sm sm:text-base">
            {price}$
          </Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => (
              <i
                key={index}
                className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-1 sm:p-2"
                style={{ backgroundColor: color }}
              ></i>
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
