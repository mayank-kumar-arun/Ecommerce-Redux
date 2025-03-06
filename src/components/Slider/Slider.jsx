import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img
                  src={item.img}
                  alt="shoeImage"
                  className="w-full h-[300px] md:h-[500px] lg:h-[850px]"
                />
              )}
            </div>
            <div className="absolute top-20 md:top-32 lg:top-44 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto">
              <p className="text-white text-lg md:text-2xl lg:text-4xl font-inter font-bold text-center">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {sliderData.map((dot, index) => (
          <div className="mr-2 md:mr-4" key={index}>
            <div
              className={
                index === slideIndex
                  ? "bg-green-300 rounded-full p-2 md:p-4 cursor-pointer"
                  : "bg-white rounded-full p-2 md:p-4 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>

      {/* Next & Prev Buttons */}
      <button
        className="absolute top-[40%] md:top-[50%] right-2 md:right-4 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <button
        className="absolute top-[40%] md:top-[50%] left-2 md:left-4 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
