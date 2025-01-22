import React from "react";
import image1 from "../../assets/Tesco images.png";
import image2 from "../../assets/paytam image.png";
import image3 from "../../assets/Customer Experince image.png";
import image4 from "../../assets/hr image.png";

function Deliverd() {
  return (
    <>
<div className="bg-sky-200 pb-10 ">
      <h2 className="text-4xl text-center font-bold text-sky-800 p-10 ">
        Work We Delivered forIndia’s Largest Brands.
        </h2>
      <div className="flex flex-wrap justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-32">
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image1} alt="project-image" className="w-full object-cover"/>
            <h2 className="text-4xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg">Tesco</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image2} alt="project-image" className="w-full object-cover "/>
              <h2 className="text-3xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg">For Sales</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image3} alt="project-image" className="w-full object-cover"/>
              <h2 className="text-2xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg pt-4">For Customer Experience</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image4} alt="project-image" className="w-full object-cover "/>
              <h2 className="text-2xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg">For HR</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image3} alt="project-image" className="w-full object-cover"/>
              <h2 className="text-2xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg pt-4">For Customer Experience</h2>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden">
              <img src={image4} alt="project-image" className="w-full object-cover "/>
              <h2 className="text-2xl text-sky-200 font-bold text-center bg-yellow-300 rounded-br-lg rounded-bl-lg">For HR</h2>
            </div>
          </div>
      </div>
        </div>
    </>
  );
}

export default Deliverd;
