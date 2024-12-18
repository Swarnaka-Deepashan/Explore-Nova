import PropTypes from 'prop-types';

const TourCard = ({iconURL, label, text, subtext}) => {
  return (
    <div className="relative flex items-center gap-5 py-14 px-5 h-24 max-md:h-6 rounded-lg overflow-hidden hover:shadow-3xl">
        <div className='flex items-center justify-center h-12 w-14 rounded-lg  hover:bg-slate-300 bg-slate-100'>
            <img src={iconURL} alt={label} className='h-4 w-4' />
        </div>
        <div className="flex-col">
            <p className='text-lg font-semibold'>{text}</p>
            <p className='max-w-lg text-slate-gray text-sm'>{subtext}</p>
        </div>
    </div>
  )
}

TourCard.propTypes = {
    iconURL: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
  };


export default TourCard