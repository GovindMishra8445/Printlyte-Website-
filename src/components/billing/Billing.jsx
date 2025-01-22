import React from 'react'

function Billing() {
  return (
    <>
          <div className="bg-blue-500">
          <div className="p-5 justify-center items-center flex">
          <h2 className="font-bold text-6xl text-center p-16 text-white">
            Work We Delivered forIndia’s Largest Brands.
            </h2>
          <div className="container flex flex-wrap gap-52 pt-10">
                <div className="max-w-sm rounded-lg overflow-hidden bg-red-800">
                  {/* <img src={image1} alt="project-image" className="w-full h-full object-cover "></img> */}
                <h2 className="text-2xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg">Tesco</h2>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden">
                  {/* <img src={image2} alt="project-image" className="w-full h-full object-cover "></img> */}
                  <h2 className="text-2xl text-sky-200 font-bold">For Sales</h2>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden">
                  {/* <img src={image3} alt="project-image" className="w-full h-full object-cover "></img> */}
                  <h2 className="text-2xl text-sky-200 font-bold">For Customer Experience</h2>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden">
                  {/* <img src={image4} alt="project-image" className="w-full h-full object-cover "></img> */}
                  <h2 className="text-2xl text-sky-200 font-bold">For HR</h2>
                </div>
              </div>
           
            
            </div>
            </div>
        </>
  )
}

export default Billing