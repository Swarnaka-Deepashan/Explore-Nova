import { locations } from "../constants";
import LocationsCard from "../components/LocationsCard";

const Locations = () => {
  return (
    <section id="locations" className="max-container">
      <div className="flex items-end justify-between mb-8 max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div className="flex flex-col items-start max-lg:items-center">
          <p className="text-lg font-normal lg:max-w-lg text-slate-gray">
            Mindblowing Locations
          </p>
          <h2 className="text-4xl font-semibold max-md:text-3xl">
            Thailand tourism
          </h2>
        </div>
        <p>
          <p className="max-w-md text-lg font-normal leading-normal text-center max-lg:mt-4 text-slate-gray lg:text-end">
            Unparalleled natural splendor, embrace the vibrant culture, and
            experience the kindness of the local people.
          </p>
        </p>
      </div>

      {/* First Row */}
      <div className="flex gap-4 max-md:flex-col max-md:gap-2">
        <div className="flex-[2]">
          <LocationsCard {...locations[0]} />
        </div>
        <div className="flex-[1]">
          <LocationsCard {...locations[1]} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-4 mt-4 max-md:flex-col max-md:gap-2 max-md:mt-2">
        <div className="flex-[1]">
          <LocationsCard {...locations[2]} />
        </div>
        <div className="flex-[2]">
          <LocationsCard {...locations[3]} />
        </div>
      </div>
    </section>
  );
};

export default Locations;
