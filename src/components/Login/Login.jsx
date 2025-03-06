import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center min-h-screen bg-black p-4">
      <Card className="max-w-sm w-full">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white" className="text-lg md:text-xl">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            className="w-full"
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            className="w-full"
          />
          <Input
            label="Image Url Link"
            size="lg"
            type="text"
            name="image"
            onChange={onChange}
            value={values.image}
            className="w-full"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
            className="text-sm md:text-base"
          >
            Sign In
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-center text-xs md:text-sm"
          >
            Image Is Optional
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-center text-xs md:text-sm"
          >
            For Enter you can try with Name:{" "}
            <span className=" font-semibold">John</span>, Password:{" "}
            <span className=" font-semibold">John123#</span>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
