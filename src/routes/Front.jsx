import React from 'react';
import Left_img from "./images/Left_img.svg";
import Right_img from "./images/Right_img.svg";

const Front = (props) => {
    return (
        <>
<<<<<<< HEAD
            <section className="p-8 md:max-w-[100%] bg-[#e9e6e3]">
=======
            <section className="p-8 md:max-w-[100%] bg-[#e0d6c6]">
>>>>>>> 1f6078873885e8a254f538bbe62b814db4fa816c
                <div className="bodyPart flex flex-col md:flex-row justify-center md:items-center">
                    <div className="first mb-4 md:mb-0 md:mr-4 md:flex-shrink-0 flex justify-center items-center">
                        <img src={Left_img} alt="" className="w-48 h-48 md:w-64 md:h-64" />
                    </div>
                    <div className="text w-full flex justify-center items-center">
<<<<<<< HEAD
                        <p className="text-gray-800 text-center md:text-5xl font-bold mb-5">Our {props.service}</p>
=======
                        <p className="md:text-7xl text-5xl font-bold text-green-950 text-center"> {props.service}</p>
>>>>>>> 1f6078873885e8a254f538bbe62b814db4fa816c
                    </div>
                    <div className="second mb-4 md:mb-0 md:ml-4 md:flex-shrink-0 flex justify-center items-center">
                        <img src={Right_img} alt="" className="w-48 h-48 md:w-64 md:h-64" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Front;
