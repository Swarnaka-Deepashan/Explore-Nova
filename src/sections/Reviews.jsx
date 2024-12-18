import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { arrowRightBlack } from "../assets/icons";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="flex max-lg:flex-col max-lg:gap-5 max-lg:items-center items-start justify-between">
        <div className="flex flex-col gap-4 justify-center items-start lg:gap-10 lg:mt-2">
          <ReviewCard {...reviews[0]} />
          <div className="flex gap-4 max-lg:hidden">
            <img
              src={arrowRightBlack}
              alt="Left Arrow"
              className="transform rotate-180 w-6"
            />
            <img src={arrowRightBlack} alt="Right Arrow" className="w-6" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative max-w-3xl leading-normal text-center text-xl md:text-3xl md:leading-snug lg:text-xl lg:leading-normal lg:text-left xl:text-2xl">
            {/* Big inverted comma */}
            <span className="max-lg:hidden absolute top-8 left-0 text-[220px] font-bold font-palanquin opacity-20 text-gray-500 select-none">
              &ldquo;
            </span>
            <p>{reviews[0].description}</p>
          </div>
          <div className="flex gap-4 lg:hidden">
            <img
              src={arrowRightBlack}
              alt="Left Arrow"
              className="transform rotate-180 w-6"
            />
            <img src={arrowRightBlack} alt="Right Arrow" className="w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
