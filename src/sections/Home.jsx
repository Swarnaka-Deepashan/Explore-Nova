import { home01 } from "../assets/images";
import { HomeDetailsCard } from "../components/HomeDetailsCard";
import { statistics } from "../constants";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center">
      <div className="flex relative px-3 py-3 w-full h-[120vh] max-lg:h-[100vh] bg-cover bg-center">
        <img
          src={home01}
          alt="Home Image"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="absolute flex flex-col gap-10 [@media(max-width:640px)_or_(max-height:640px)]:gap-5 justify-center items-center">
        <div className="w-full text-center ">
          <h3 className=" px-20  text-white text-[6vw] max-lg:text-[7vw] font-medium leading-none drop-shadow-lg">
            Majestic Landscapes & Rich Cultural Legacy
          </h3>
          <p className="px-12 text-white text-[2rem] max-lg:text-[3vw] leading-none drop-shadow-2xl mt-4 [@media(max-width:640px)_or_(max-height:640px)]:text-[16px]">
            Visiting Thailand is an adventure of a lifetime.
          </p>
        </div>

        <div className="z-50">
          <SearchBar />
        </div>
      </div>

      <div className="absolute -bottom-[5%] px-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-center items-center [@media(max-width:640px)_or_(max-height:640px)]:hidden">
        {statistics.map((stat, index) => (
          <HomeDetailsCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Home;
