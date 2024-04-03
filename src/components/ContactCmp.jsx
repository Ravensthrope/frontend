import React from "react";
import Form from "./Form";
import { SectionName } from "./index";
import contactBottom from "../assets/contactBottom.svg";

const ContactCmp = () => {
  return (
    <>
      <main className="bg-[#f8f0e3] w-full flex gap-y-4 flex-col">
        <section className="grid md:grid-cols-12 gap-4 md:max-w-[100%] p-4 h-fit max-w-[95%] mx-auto bg-[#e0d6c6]">
          <SectionName title="Contact Us"/>
        </section>
        {/* For contact no and mail */}
        <section></section>
        <section className="bg-white rounded-lg grid md:grid-cols-2 grid-cols-1 gap-4 md:max-w-[95%] max-w-[98%] m-auto p-4 mb-6">
          <div className="md:col-span-1 flex flex-col gap-y-2 p-4">
            <div className="w-full">
              <h1 className="md:text-7xl text-3xl">
                Feel Free, Contact Us Today And Get Your Solution!
              </h1>
            </div>
            <div className="w-full">
              <img
                src={contactBottom}
                alt="contactBottomImg"
                className="w-full h-56 mx-48"
              />
            </div>
          </div>
          <div className="md:col-span-1 p-4">
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactCmp;
