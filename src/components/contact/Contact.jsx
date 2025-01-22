import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-sky-100 py-10 ">
      <div className=" bg-slate-50 rounded-lg shadow-lg mx-auto w-3/4 sm:w-1/2 p-20 ">
        <form action="#" className="grid grid-cols-1 gap-6">
          <h2 className="text-3xl font-bold text-center text-black pt-5 pb-10">
          Looking for the right business solutions? <br/>Let us help-fill out the form today!
          </h2>

          <div className="grid grid-cols-2 gap-4 ">
            
            <div>
            <label
              for="Name"
              className="block mb-2 text-base text-black font-bold"
            >
              Full Name
            </label>
            <input
              type="Name"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Dr. Rahul"
              required
            />
            </div>
            <div>
            <label
              for="email"
              className="block mb-2 text-base text-black font-bold"
            >
              Business Email
            </label>
            <input
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="rahul@healthcarer.com"
              required
            />
            </div>
            
            <div>
            <label
              for="Contact"
              className="block mb-2 text-base text-black font-bold"
            >
              Contact Number
            </label>
            <input
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="9898989898"
              required
            />
            </div>
            
            <div>
            <label
              for="Company"
              className="block mb-2 text-base text-black font-bold"
            >
              Company Name
            </label>
            <input
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="wellness company"
              required
            />
            </div>
          </div>

          <div>
            <label
              for="Company"
              className="block mb-2 text-base text-black font-bold"
            >
              Employee Count
            </label>
            <select
              defaultValue={0 - 10}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="0-10"
              required
            >
              <option value="0-10">0-10</option>
              <option value="10-20">10-20</option>
              <option value="30-40">30-40</option>
            </select>
          </div>
          <div>
            <label
              for="Looking For"
              className="block mb-2 text-base text-black font-bold"
            >
              What are you looking for?
            </label>
            <input
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Joining Kits"
              required
            />
          </div>
        </form>
          <div className="flex justify-center items-center p-5 sm:p-5">
          <button className=" text-white bg-[#05629c]  border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
            Get Quote
          </button>
          </div>
         <div className="flex justify-center items-center pb-6">
         <button className=" text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
            WhatsAPP Us
          </button>
         </div>
          <p className="text-gray-600 font-semibold flex justify-center items-center">
            *We typically reply within 30 minutes 10 AM to 7 PM MON to SAT.
          </p>
        </div>
    </section>
  );
}
