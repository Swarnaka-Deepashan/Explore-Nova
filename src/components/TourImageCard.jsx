import PropTypes from "prop-types";
// import SearchBarTour from "./SearchBarTour";

const TourImageCard = ({ image, label, text }) => {
  return (
    <div
      className="relative [@media(max-width:640px)_or_(max-height:640px)]:h-[20rem] [@media(max-width:640px)_or_(max-height:640px)]:w-[80vw] sm:h-[36rem] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[102%] hover:shadow-2xl"
    >
      <img src={image} alt={label} className="object-cover w-full h-full" />
      <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute flex flex-col items-center gap-4 text-white bottom-4 max-sm:gap-1">
        {/* <div className="px-4">
          <SearchBarTour />
        </div> */}
        <div className="px-4">
          <p className="text-base font-light text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

TourImageCard.propTypes = {
  image: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TourImageCard;
