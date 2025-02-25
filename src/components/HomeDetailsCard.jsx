import PropTypes from "prop-types";

export const HomeDetailsCard = ({ value, label }) => {
  return (
    // <div className="min-w-[300px] rounded-[20px] shadow-2xl px-10 py-4 bg-white">
    //     <div className='flex flex-col justify-center items-center'>
    //         <p className="text-4xl font-semi-bold font-normal">{value}</p>
    //         <p className="text-lg mt-1 break-words font-light text-slate-gray">{label}</p>
    //     </div>
    // </div>

    <div className="min-w-[250px] max-w-[400px] rounded-[20px] shadow-2xl px-6 py-4 bg-white transition-transform duration-300 ease-in-out transform hover:scale-[103%] hover:shadow-2xl">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
          {value}
        </p>
        <p className="text-sm sm:text-base lg:text-lg mt-2 break-words font-light text-gray-500">
          {label}
        </p>
      </div>
    </div>
  );
};

HomeDetailsCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};
