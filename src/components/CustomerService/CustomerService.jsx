import React from "react";
import icon from "../../assets/facebook icon.png"
export default function Experience() {
  return (
    <>
        <div className="flex flex-row justify-start items-center px-20 py-10 bg-gray-200 pt-24 pb-24">
        <div className="grid grid-cols-2 gap-8 pr-80">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Why Printo?</h2>
        </div>
        <div className="grid grid-cols-2 gap-20 pl-20">
          <div className="">
            
            <h1> <img src={icon} className="max-w-20 max-h-10"/> GST invoice</h1>
            <p>
              We facilitate PO base orders and Invoicing. GST reconciliation is
              quick and easy with Printo.
            </p>
          </div>
          <div>
            <h1> <img src={icon} className="max-w-20 max-h-10"/> Single POC</h1>
            <p>
              We designate a Single Point of Contact (POC) responsible for all
              your print needs, ensuring swift order handling and issues without
              unnecessary handovers.
            </p>
          </div>
          <div>
            <h1> <img src={icon} className="max-w-20 max-h-10"/>Drop-Shipping Facilities</h1>
            <p>
              We deliver to multiple locations handling inventory, storage and
              order fulfillment, saving you time and logistical hassles.
            </p>
          </div>
          <div>
            <h1> <img src={icon} className="max-w-20 max-h-10"/> CustomerService</h1>
            <p>
              We emphasize exceptional customer service, being responsive,
              helpful, and adaptable to unique business needs.
            </p>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}
