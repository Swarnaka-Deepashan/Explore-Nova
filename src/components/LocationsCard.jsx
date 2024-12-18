import PropTypes from 'prop-types';

const LocationsCard = ({ imgURL, label, location, tour }) => {
    return (
      <div className="relative h-80 max-md:h-48 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[102%] hover:shadow-2xl">
        <img src={imgURL} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-thin">{location}</p>
          <p className="text-lg font-medium">{tour}</p>
        </div>
      </div>
    );
};

LocationsCard.propTypes = {
    imgURL: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    label: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
};

export default LocationsCard;
