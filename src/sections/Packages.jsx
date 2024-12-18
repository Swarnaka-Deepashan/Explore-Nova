import PackagesCard from "../components/PackagesCard"
import { packageDetails } from "../constants"
import Button from "../components/Button"

const Packages = () => {
  return (
    <section id="packages" className="max-container">

      <div className="flex flex-col gap-6 ">

        <div className="flex items-end justify-between max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className='flex flex-col items-start max-lg:items-center'>
            <p className='text-lg font-normal lg:max-w-lg text-slate-gray'>Travel Packages</p>
            <h2 className='text-4xl font-semibold max-md:text-3xl'>Explore Our Destinations</h2>
          </div>
          <p>
            <p className='max-w-md text-lg font-normal leading-normal text-center max-lg:mt-2 text-slate-gray lg:text-end'>Our travel destinations provide a unique combination of stunning landscapes and vibrant cultural heritage.</p>
          </p>
        </div>

        <div className="flex gap-4 mt-2 max-sm:flex-col">
        {packageDetails.map((packageDetail, index)=>(
                  <div key={index} className="flex-1" >
                      <PackagesCard {...packageDetail}/>
                  </div>
              ))
              }
        </div>

        <div className="flex justify-center mt-4 max-sm:mt-1">
          <Button label="View More"/>
        </div>

      </div>
    </section>
  )
}

export default Packages