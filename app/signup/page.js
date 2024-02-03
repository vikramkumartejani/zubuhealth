import React from "react";

const Signup = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className="bg-dark_green w-full py-20">
      <h2 className="md:text-5xl text-3xl text-center text-white w-full max-w-[650px] m-auto">
        Seamless Sign-Up, Exceptional Service
      </h2>
       <div className="relative mx-3">
       <div className="bg-white_1000 py-14 px-[.9rem] sm:px-10 mt-16 w-full sm:max-w-[1200px] max-w-full mx-auto ">
       <div className="flex flex-col md:flex-row justify-start gap-8 ">
        <div className="flex-1 flex gap-6 flex-col">
          <h2 className="text-white text-lg font-medium">Your Information <span className="text-white_1100"> *</span></h2>
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <input type="text" placeholder="First Name*" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            <input type="text" placeholder="Last Name*" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
          </div>
            <input type="email" placeholder="Email or Phone Number" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            <input type="text" placeholder="Country*" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            <input type="text" placeholder="Address Line 1*" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
        </div>
        <div className="flex-1 flex gap-6 flex-col">
          <h2 className="text-white text-lg font-medium">Card Information<span className="text-white_1100"> *</span></h2>
            <input type="text" placeholder="Card Number" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            <div className="sm:h-16 h-auto flex flex-col sm:flex-row gap-4 sm:items-center">
              <h2 className="text-white text-lg font-medium sm:min-w-28">Expiry Date</h2>
              <select className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base">
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                {month}
                </option>
              ))}
            </select>
             <input type="text" placeholder="Year" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            </div>
            <input type="text" placeholder="Security Code" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
            <input type="text" placeholder="Address Line 2" className="text-white w-full h-16 outline-none px-4 bg-dark_green placeholder:text-white placeholder:text-base" />
        </div>
       </div>
        <button className="bg-green_600 h-16 w-full mt-12 text-green_700 text-base font-normal">Signup</button>
      </div>
       </div>
    </div>
  );
};

export default Signup;
