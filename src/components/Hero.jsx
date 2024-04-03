import React from "react";
import hero from "../assets/Hero.png";
import nextLevel from "../assets/nextLevel.svg";
import { ServiceSelection, Footer } from "./index";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <section className="flex p-8 md:max-w-[75%] max-w-[95%] mx-auto flex-col gap-y-8 justify-center items-center">
        <div className="text-center">
          <p className="sm:text-7xl text-6xl font-bold text-green-950">
            The Freedom To Focus On Improving Your Technology
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl">
            We design and develop custom software applications tailored to
            streamline your business processes, improve efficiency, and enhance
            productivity.
          </p>
        </div>

        <div className="text-center flex gap-4 md:text-2xl text-xl">
          <Link
            to="/About"
            className="ease-in-out duration-300 bg-blue-300 hover:bg-yellow-300 rounded-full md:h-14 md:w-36 h-12 w-32 text-green-950 p-3"
          >
            Read More
          </Link>
          <Link
            to="/Contact"
            className="ease-in-out duration-500 border-2 border-green-950 hover:bg-green-950 hover:text-white rounded-full md:h-14 md:w-36 text-green-950 h-12 w-32 p-3"
          >
            Contact Us
          </Link>
        </div>
        <div className="">
          <img src={hero} alt="Hero" />
        </div>

        <div className="text-left max-w-[1000px] grid md:grid-cols-2">
          <div className="flex gap-y-4 flex-col">
            <p className="sm:text-6xl text-4xl font-semibold ">
              We Can Take Your Business To The Next Level.
            </p>
            <p className="text-gray-600 text-xl ">
              We provide strategic IT consulting services to help businesses
              align their technology goals with their overall business
              objectives, enabling them to make informed decisions and stay
              ahead in the competitive market.
            </p>
            <Link to="/About">
            <button
              className="ease-in-out duration-300 bg-blue-300 hover:bg-yellow-300 rounded-full md:h-16 md:w-36 h-12 w-32 text-green-950"
            >
              Read More
            </button>
            </Link>
          </div>
          <div>
            <img src={nextLevel} alt="next level" />
          </div>
        </div>
        <ServiceSelection />
      </section>
      <section className="md:max-w-[98%] mx-auto">
        <Footer />
      </section>
    </>
  );
};

export default Hero;
