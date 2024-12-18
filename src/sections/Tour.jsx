import { tourGuide } from "../constants"
import TourCard from "../components/TourCard"
import TourImageCard from "../components/TourImageCard"
import { tourImageDetails } from "../constants"

const Tour = () => {
  return (
    <section id="tour" className="max-container">
      <div className="flex items-center justify-center gap-10 max-lg:flex-col-reverse">

        <div className="flex-1">
          <TourImageCard {...tourImageDetails} />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className='flex flex-col items-start max-lg:items-center'>
            <p className='text-lg font-normal lg:max-w-lg text-slate-gray'>Simplifying Your Journey</p>
            <h2 className='text-4xl font-semibold max-md:text-3xl'>At Your Fingertips</h2>
          </div>
          {tourGuide.map((tourGuideElement, index)=>(
                <div key={index}>
                    <TourCard {...tourGuideElement}/>
                </div>
            ))
            }
        </div>
        
      </div>
    </section>
  )
}

export default Tour