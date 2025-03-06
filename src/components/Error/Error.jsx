import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="flex justify-center items-center pt-4 px-4">
      <div className="w-96 sm:w-full max-w-md">
        <Alert
          color="red"
          className="text-lg sm:text-xl font-inter font-bold text-center"
        >
          Sorry, no product matches your filter search... Clear the filter and
          try again 😊.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
