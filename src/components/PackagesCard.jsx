import PropTypes from 'prop-types';
import { star } from '../assets/icons';

const PackagesCard = ({image, label, dateRange, packageName, price, dayCount, rating}) => {
  return (
    <div className="relative transition-transform duration-300 ease-in-out transform hover:scale-[102%] hover:shadow-2xl">

      <div className=' w-full max-sm:h-[20vh] sm:h-[65vh] md:h-[65vh] lg:h-[65vh] xl:h-[75vh] rounded-2xl overflow-hidden shadow-lg'>
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl opacity-50"></div>
      </div>


      {/* <div className="absolute bottom-4 left-4 text-white">
        <p className="text-base text-center font-thin">{label}</p>
      </div> */}

      <div className='absolute top-4 left-4 px-3 py-1 bg-white/30 backdrop-blur-lg rounded-2xl'>

        <p className='font-normal text-white'>{dayCount}</p>

      </div>
      
      <div className='absolute top-4 right-4 px-3 py-1 bg-white/30 backdrop-blur-lg rounded-2xl flex gap-1 justify-center items-center'>
        <img src={star} alt="Rating" className='w-4 h-4' />
        <p className='font-normal text-white'>{rating}</p>
      </div>

      <div className='absolute bottom-4 w-[calc(100%-2rem)] mx-4 flex-col p-2 bg-white/30 backdrop-blur-lg rounded-lg'>
          <p className='font-light text-white'>{dateRange}</p>
          <div className='flex justify-between items-center'>
            <p className='text-2xl max-[400px]:text-xl font-semibold text-white'>{packageName}</p>
            <p className='text-2xl max-[400px]:text-xl  font-semibold text-white'>{price}</p>
          </div>
      </div>

    </div>
  )
}

PackagesCard.propTypes = {
    image: PropTypes.any.isRequired, 
    label: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    packageName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    dayCount: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  };


export default PackagesCard