


// import React, { useState } from "react";
// import { FaGraduationCap, FaBook, FaClipboardList, FaFileUpload } from "react-icons/fa";
// import { RiNewspaperLine } from "react-icons/ri";
// import { GiTeacher, GiNotebook } from "react-icons/gi";
// import Hoome from "./Hoome";
// import Center from "./Center";

// const steps = [
//   { label: "Select course", icon: FaGraduationCap },
//   { label: "Select Class", icon: GiTeacher },
//   { label: "Select Subject", icon: FaBook },
//   { label: "Select Chapter", icon: GiNotebook },
//   { label: "Select Topic", icon: FaClipboardList },
//   { label: "Create Question", icon: RiNewspaperLine },
//   { label: "Download Question", icon: FaFileUpload }
// ];

// function Stepper() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const goToNextStep = () => {
//     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
//   };

//   const goToPreviousStep = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
//   };

//   return (
//     <div>
//       {/*heading */}
//           <div className=' rounded-2xl m-4  mx-24 lg:mx-44 bg-[#00366C]'>
//       <h1 className=' text-[#FFF906] p-1 lg:p-2 sm:p-0 text-center font-semibold sm:text-sm lg:text-2xl  text-lg'>Exam Preparation</h1>
//      </div>
// {/* stpper */}
      
//     <div className="flex flex-col items-center mt-8 px-4">
  
//   <ol className="flex items-center w-full justify-center lg:w-3/4">
//     {steps.map((step, index) => (
//         <li key={index} className={`flex w-full items-center ${index < steps.length - 1 ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-4 after:inline-block' : ''} ${index <= currentStep ? 'text-[#0C283C]  after:border-[#0C283C] dark:after:border-yellow-300' : 'after:border-[#0C283C] dark:after:border-[#0a3c6d]'}`}>
//         <span className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2  lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${index <= currentStep ? 'bg-blue-900 text-yellow-300 ' : 'bg-[#5fc6c6] text-black'}`}>
//           {React.createElement(step.icon, { className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" })}
//         </span>
//       </li>
//     ))}
//   </ol>
// {/* other comp. */}
//   <div className=" flex lg:flex-row  items-center   space-x-20 ">
  
//    <Hoome   />
  
// <Center />

//   </div>
//   <div className="md:mt-16 md:mb-12 mt-6 mb-4 flex justify-between w-full md:px-12 ">
//     <button
//       className={`px-4 md:px-6 py-2 mr-2 rounded-md ${currentStep === 0 ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-[#5fc6c6] text-white hover:bg-blue-700'}`}
//       onClick={goToPreviousStep}
//       disabled={currentStep === 0}
//     >
//       Back
//     </button>
//     <button
//       className={`px-4 md:px-6 py-2 rounded-md ${currentStep === steps.length - 1 ? 'bg-[#5fc6c6] text-gray-200 cursor-not-allowed' : 'bg-[#5fc6c6] text-white hover:bg-blue-700'}`}
//       onClick={goToNextStep}
//       disabled={currentStep === steps.length - 1}
//     >
//       Next
//     </button>
//   </div>
// </div>
//     </div>
//   );
// }

// export default Stepper;























import React, { useState } from "react";
import { FaGraduationCap, FaBook, FaClipboardList, FaFileUpload } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { GiTeacher, GiNotebook } from "react-icons/gi";
import Hoome from "./Hoome";
import Center from "./Center";

const steps = [
  { label: "Select course", icon: FaGraduationCap },
  { label: "Select Class", icon: GiTeacher },
  { label: "Select Subject", icon: FaBook },
  { label: "Select Chapter", icon: GiNotebook },
  { label: "Select Topic", icon: FaClipboardList },
  { label: "Create Question", icon: RiNewspaperLine },
  { label: "Download Question", icon: FaFileUpload }
];

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <div className="rounded-2xl m-4 mx-4  w-2/3 bg-[#00366C]">
        <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
          Exam Preparation
        </h1>
      </div>

      {/* Stepper */}
      <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
        <ol className="flex items-center w-full justify-center">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex w-full items-center ${
                index < steps.length - 1
                  ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
                  : ""
              } ${
                index <= currentStep
                  ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
                  : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
              }`}
            >
              <span
                className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
                  index <= currentStep ? "bg-blue-900 text-yellow-300 " : "bg-[#5fc6c6] text-black"
                }`}
              >
                {React.createElement(step.icon, {
                  className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
                })}
              </span>
            </li>
          ))}
        </ol>

        {/* Other components */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-20 mt-8">
          <Hoome />
          <Center />
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
          <button
            className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
              currentStep === 0
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-[#5fc6c6] text-white hover:bg-blue-700"
            }`}
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            className={`px-4 md:px-6 py-2 rounded-md ${
              currentStep === steps.length - 1
                ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
                : "bg-[#5fc6c6] text-white hover:bg-blue-700"
            }`}
            onClick={goToNextStep}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stepper;


















