import PropTypes from 'prop-types';

const ReviewCard = ({image, label, name, position}) => {
  return (
    <div className="flex gap-4">
        <div className='w-14 h-14 rounded-full overflow-hidden'>
            <img src={image} alt={label} className='w-full h-full object-cover'/>
        </div>
        <div>
            <p className='text-2xl font-medium'>{name}</p>
            <p className='text-slate-gray'>{position}</p>
        </div>
    </div>
  )
}

ReviewCard.propTypes = {

    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

export default ReviewCard