// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const form = useRef();


//   const sendEmail = (e) => {
//     e.preventDefault();

//     const publicKey = 'karx15GpWAiRxPy6W'
//     const servicesId = 'service_e9yinm2'
//     const templateId = 'service_e9yinm2'

//     emailjs
//       .sendForm(servicesId, templateId, form.current, {
//         publicKey: publicKey,
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <section id="contact" className="bg-sky-100 py-10 max-sm:py-5 max-sm:px-1 ">
//       <div className=" bg-slate-50 rounded-lg shadow-lg mx-auto w-3/4 sm:w-1/2 p-20 max-sm:p-5 ">
//         <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
//           <h2 className="text-3xl font-bold text-center text-black pt-5 pb-10 max-sm:text-xl ">
//             Looking for the right business solutions? <br/>
//             Let us help-fill out the form today!
//           </h2>

//           <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 ">
//             <div>
//               <label
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="Name"
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 required
//                 ></input>
              
//             </div>
//             <div>
//               <label
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Business Email
//               </label>
//               <input
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="rahul@healthcarer.com"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Contact Number
//               </label>
//               <input
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="9898989898"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Company Name
//               </label>
//               <input
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="wellness company"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               className="block mb-2 text-base text-black font-bold"
//             >
//               Employee Count
//             </label>
//             <select
//               defaultValue={0 - 10}
//               className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//               placeholder="0-10"
//               required
//             >
//               <option value="0-10">0-10</option>
//               <option value="10-20">10-20</option>
//               <option value="30-40">30-40</option>
//             </select>
//           </div>
//           <div>
//             <label
//               className="block mb-2 text-base text-black font-bold"
//             >
//               What are you looking for?
//             </label>
//             <input
//               className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//               placeholder="Joining Kits"
//               required
//             />
//           </div>
//         </form>
//         <div className="flex justify-center items-center p-5 sm:p-5">
//           <button type="submit" className=" text-white bg-[#05629c]  border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
//             Get Quote
//           </button>
//         </div>
//         <div className="flex justify-center items-center pb-6">
//           <button type="submit" className=" text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
//             WhatsAPP Us
//           </button>
//         </div>
//         <p className="text-gray-600 font-semibold flex justify-center items-center">
//           *We typically reply within 30 minutes 10 AM to 7 PM MON to SAT.
//         </p>
//       </div>
//     </section>
//   );
// }









import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    employee_count: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = "karx15GpWAiRxPy6W";
    const serviceId = "service_e9yinm2";
    const templateId = "template_tl5eqqj"; // Corrected templateId

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-sky-500 py-10 max-sm:py-5 max-sm:px-1">
      <div className="bg-slate-50 rounded-lg shadow-lg mx-auto w-3/4 sm:w-1/2 p-20 max-sm:p-5">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-6"
        >
          <h2 className="text-3xl font-bold text-center text-black pt-5 pb-10 max-sm:text-xl">
            Looking for the right business solutions? <br />
            Let us help—fill out the form today!
          </h2>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-base text-black font-bold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base text-black font-bold"
              >
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="rahul@healthcarer.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contactNumber"
                className="block mb-2 text-base text-black font-bold"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="9898989898"
                required
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-base text-black font-bold"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Wellness Company"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="employeeCount"
              className="block mb-2 text-base text-black font-bold"
            >
              Employee Count
            </label>
            <select
              id="employeeCount"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
            >
              <option value="0-10">0-10</option>
              <option value="10-20">10-20</option>
              <option value="30-40">30-40</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="block mb-2 text-base text-black font-bold"
            >
              What are you looking for?
            </label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Joining Kits"
              required
            />
          </div>
          <div className="flex justify-center items-center p-5">
            <button
              type="submit"
              className="text-white bg-[#05629c] border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
            >
              Get Quote
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center pb-6">
          <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
            WhatsApp Us
          </button>
        </div>
        <p className="text-gray-600 font-semibold flex justify-center items-center">
          *We typically reply within 30 minutes 10 AM to 7 PM MON to SAT.
        </p>
      </div>
    </section>
  );
}

