



// // // import React, { useState } from "react";
// // // import { FaGraduationCap, FaBook, FaClipboardList, FaFileUpload } from "react-icons/fa";
// // // import { RiNewspaperLine } from "react-icons/ri";
// // // import { GiTeacher, GiNotebook } from "react-icons/gi";
// // // import Hoome from "./Hoome";
// // // import Center from "./Center";

// // // const steps = [
// // //   { label: "Select course", icon: FaGraduationCap },
// // //   { label: "Select Class", icon: GiTeacher },
// // //   { label: "Select Subject", icon: FaBook },
// // //   { label: "Select Chapter", icon: GiNotebook },
// // //   { label: "Select Topic", icon: FaClipboardList },
// // //   { label: "Create Question", icon: RiNewspaperLine },
// // //   { label: "Download Question", icon: FaFileUpload }
// // // ];

// // // function Stepper() {
// // //   const [currentStep, setCurrentStep] = useState(0);

// // //   const goToNextStep = () => {
// // //     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
// // //   };

// // //   const goToPreviousStep = () => {
// // //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center">
// // //       {/* Heading */}
// // //       <div className="rounded-2xl m-4 mx-4  w-2/3 bg-[#00366C]">
// // //         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
// // //           Exam Preparation
// // //         </h1>
// // //       </div>

// // //       {/* Stepper */}
// // //       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
// // //         <ol className="flex items-center w-full justify-center">
// // //           {steps.map((step, index) => (
// // //             <li
// // //               key={index}
// // //               className={`flex w-full items-center ${
// // //                 index < steps.length - 1
// // //                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
// // //                   : ""
// // //               } ${
// // //                 index <= currentStep
// // //                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
// // //                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
// // //               }`}
// // //             >
// // //               <span
// // //                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
// // //                   index <= currentStep ? "bg-blue-900 text-yellow-300 " : "bg-[#5fc6c6] text-black"
// // //                 }`}
// // //               >
// // //                 {React.createElement(step.icon, {
// // //                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
// // //                 })}
// // //               </span>
// // //             </li>
// // //           ))}
// // //         </ol>

// // //         {/* Other components */}
// // //         <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-20 mt-8">
// // //           <Hoome />
// // //           <Center />
// // //         </div>

// // //         {/* Navigation buttons */}
// // //         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
// // //           <button
// // //             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
// // //               currentStep === 0
// // //                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// // //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// // //             }`}
// // //             onClick={goToPreviousStep}
// // //             disabled={currentStep === 0}
// // //           >
// // //             Back
// // //           </button>
// // //           <button
// // //             className={`px-4 md:px-6 py-2 rounded-md ${
// // //               currentStep === steps.length - 1
// // //                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
// // //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// // //             }`}
// // //             onClick={goToNextStep}
// // //             disabled={currentStep === steps.length - 1}
// // //           >
// // //             Next
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Stepper;

























// // // import React, { useState } from "react";
// // // import { FaGraduationCap, FaBook, FaClipboardList, FaFileUpload } from "react-icons/fa";
// // // import { RiNewspaperLine } from "react-icons/ri";
// // // import { GiTeacher, GiNotebook } from "react-icons/gi";
// // // import Hoome from "./Hoome";
// // // import Center from "./Center";

// // // const steps = [
// // //   { label: "Select course", icon: FaGraduationCap },
// // //   { label: "Select Class", icon: GiTeacher },
// // //   { label: "Select Subject", icon: FaBook },
// // //   { label: "Select Chapter", icon: GiNotebook },
// // //   { label: "Select Topic", icon: FaClipboardList },
// // //   { label: "Create Question", icon: RiNewspaperLine },
// // //   { label: "Download Question", icon: FaFileUpload }
// // // ];

// // // function Stepper() {
// // //   const [currentStep, setCurrentStep] = useState(0);

// // //   const goToNextStep = () => {
// // //     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
// // //   };

// // //   const goToPreviousStep = () => {
// // //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center">
// // //       {/* Heading */}
// // //       <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
// // //         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
// // //           Exam Preparation
// // //         </h1>
// // //       </div>

// // //       {/* Stepper */}
// // //       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
// // //         <ol className="flex items-center w-full justify-center">
// // //           {steps.map((step, index) => (
// // //             <li
// // //               key={index}
// // //               className={`flex w-full items-center ${
// // //                 index < steps.length - 1
// // //                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
// // //                   : ""
// // //               } ${
// // //                 index <= currentStep
// // //                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
// // //                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
// // //               }`}
// // //             >
// // //               <span
// // //                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
// // //                   index <= currentStep ? "bg-blue-900 text-yellow-300" : "bg-[#5fc6c6] text-black"
// // //                 }`}
// // //               >
// // //                 {React.createElement(step.icon, {
// // //                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
// // //                 })}
// // //               </span>
// // //             </li>
// // //           ))}
// // //         </ol>

// // //         {/* Other components */}
// // //         <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-20 mt-8">
// // //           <Hoome currentStep={currentStep} />
// // //           <Center />
// // //         </div>

// // //         {/* Navigation buttons */}
// // //         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
// // //           <button
// // //             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
// // //               currentStep === 0
// // //                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// // //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// // //             }`}
// // //             onClick={goToPreviousStep}
// // //             disabled={currentStep === 0}
// // //           >
// // //             Back
// // //           </button>
// // //           <button
// // //             className={`px-4 md:px-6 py-2 rounded-md ${
// // //               currentStep === steps.length - 1
// // //                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
// // //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// // //             }`}
// // //             onClick={goToNextStep}
// // //             disabled={currentStep === steps.length - 1}
// // //           >
// // //             Next
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Stepper;


































// // import React, { useState } from "react";
// // import { FaGraduationCap, FaBook, FaClipboardList, FaFileUpload } from "react-icons/fa";
// // import { RiNewspaperLine } from "react-icons/ri";
// // import { GiTeacher, GiNotebook } from "react-icons/gi";
// // import Hoome from "./Hoome";



// // const steps = [
// //   { label: "Select course", icon: FaGraduationCap },
// //   { label: "Select Class", icon: GiTeacher },
// //   { label: "Select Subject", icon: FaBook },
// //   { label: "Select Chapter", icon: GiNotebook },
// //   { label: "Select Topic", icon: FaClipboardList },
// //   { label: "Create Question", icon: RiNewspaperLine },
// //   { label: "Download Question", icon: FaFileUpload }
// // ];

// // function Stepper() {
// //   const [currentStep, setCurrentStep] = useState(0);

// //   const goToNextStep = () => {
// //     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
// //   };

// //   const goToPreviousStep = () => {
// //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// //   };

// //   return (
// //     <div className="flex flex-col items-center">
// //       {/* Heading */}
// //       <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
// //         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
// //           Exam Preparation
// //         </h1>
// //       </div>

// //       {/* Stepper */}
// //       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
// //         <ol className="flex items-center w-full justify-center">
// //           {steps.map((step, index) => (
// //             <li
// //               key={index}
// //               className={`flex w-full items-center ${
// //                 index < steps.length - 1
// //                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
// //                   : ""
// //               } ${
// //                 index <= currentStep
// //                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
// //                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
// //               }`}
// //             >
// //               <span
// //                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
// //                   index <= currentStep ? "bg-blue-900 text-yellow-300" : "bg-[#5fc6c6] text-black"
// //                 }`}
// //               >
// //                 {React.createElement(step.icon, {
// //                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
// //                 })}
// //               </span>
// //             </li>
// //           ))}
// //         </ol>


// //           {/* input */}
// //           <div className="w-4/5 mt-12  bg-white flex flex-row">
// //           <input
// //             type="text"
// //             // value={filterText}
// //             // onChange={handleFilterChange}
// //             placeholder="Filter steps..."
// //             className="w-full px-4 py-2  focus:outline-none "
            
// //           />
// //            <button
// //           className=" py-2 px-6  bg-[#5fc6c6] text-white hover:bg-blue-300 focus:outline-none"
// //           // onClick={handleAddButtonClick}
// //         >
// //           Add
// //         </button>
// //         </div>
       
      

// //         {/* Other components */}
// //         <div className=" float-start mt-12 mr-[80%] lg:mr-[85%] ">
// //           <Hoome currentStep={currentStep} />
        

       
// //         </div>

// //         {/* Navigation buttons */}
// //         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
// //           <button
// //             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
// //               currentStep === 0
// //                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToPreviousStep}
// //             disabled={currentStep === 0}
// //           >
// //             Back
// //           </button>
// //           <button
// //             className={`px-4 md:px-6 py-2 rounded-md ${
// //               currentStep === steps.length - 1
// //                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToNextStep}
// //             disabled={currentStep === steps.length - 1}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //       </div>
// //   );
// // }

// // export default Stepper;
















































// // import React, { useState } from "react";
// // import {
// //   FaGraduationCap,
// //   FaBook,
// //   FaClipboardList,
// //   FaFileUpload,
// // } from "react-icons/fa";
// // import { RiNewspaperLine } from "react-icons/ri";
// // import { GiTeacher, GiNotebook } from "react-icons/gi";
// // import Hoome from "./Hoome";

// // const steps = [
// //   { label: "Select course", icon: FaGraduationCap },
// //   { label: "Select Class", icon: GiTeacher },
// //   { label: "Select Subject", icon: FaBook },
// //   { label: "Select Chapter", icon: GiNotebook },
// //   { label: "Select Topic", icon: FaClipboardList },
// //   { label: "Create Question", icon: RiNewspaperLine },
// //   { label: "Download Question", icon: FaFileUpload },
// // ];

// // function Stepper() {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [filterText, setFilterText] = useState("");
// //   const [filters, setFilters] = useState([]);

// //   const handleFilterChange = (e) => {
// //     setFilterText(e.target.value);
// //   };

// //   const handleAddButtonClick = () => {
// //     if (filterText.trim() !== "") {
// //       setFilters((prevFilters) => [...prevFilters, filterText.trim()]);
// //       setFilterText("");
// //     }
// //   };

// //   const goToNextStep = () => {
// //     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
// //   };

// //   const goToPreviousStep = () => {
// //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// //   };

// //   return (
// //     <div className="flex flex-col items-center">
// //       {/* Heading */}
// //       <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
// //         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
// //           Exam Preparation
// //         </h1>
// //       </div>

// //       {/* Stepper */}
// //       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
// //         <ol className="flex items-center w-full justify-center">
// //           {steps.map((step, index) => (
// //             <li
// //               key={index}
// //               className={`flex w-full items-center ${
// //                 index < steps.length - 1
// //                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
// //                   : ""
// //               } ${
// //                 index <= currentStep
// //                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
// //                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
// //               }`}
// //             >
// //               <span
// //                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
// //                   index <= currentStep
// //                     ? "bg-blue-900 text-yellow-300"
// //                     : "bg-[#5fc6c6] text-black"
// //                 }`}
// //               >
// //                 {React.createElement(step.icon, {
// //                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
// //                 })}
// //               </span>
// //             </li>
// //           ))}
// //         </ol>

// //         {/* Input and Add Button */}
// //         <div className="w-4/5 mt-12 bg-white flex flex-row">
// //           <input
// //             type="text"
// //             value={filterText}
// //             onChange={handleFilterChange}
// //             placeholder="Filter steps..."
// //             className="w-full px-4 py-2 focus:outline-none"
// //           />
// //           <button
// //             className="py-2 px-6 bg-[#5fc6c6] text-white hover:bg-blue-300 focus:outline-none"
// //             onClick={handleAddButtonClick}
// //           >
// //             Add
// //           </button>
// //         </div>

// //         {/* Display Filters */}
// //         <div className="mt-4 flex">
// //           {filters.map((filter, index) => (
// //             <div key={index} className="bg-gray-200 p-2 px-4 m-2 rounded-md">
// //               {filter}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Other components */}
// //         <div className="float-start mt-12 mr-[80%] lg:mr-[85%]">
// //           <Hoome currentStep={currentStep} />
// //         </div>

// //         {/* Navigation buttons */}
// //         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
// //           <button
// //             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
// //               currentStep === 0
// //                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToPreviousStep}
// //             disabled={currentStep === 0}
// //           >
// //             Back
// //           </button>
// //           <button
// //             className={`px-4 md:px-6 py-2 rounded-md ${
// //               currentStep === steps.length - 1
// //                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToNextStep}
// //             disabled={currentStep === steps.length - 1}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Stepper;





















// // import React, { useState } from "react";
// // import {
// //   FaGraduationCap,
// //   FaBook,
// //   FaClipboardList,
// //   FaFileUpload,
// // } from "react-icons/fa";
// // import { RiNewspaperLine } from "react-icons/ri";
// // import { GiTeacher, GiNotebook } from "react-icons/gi";
// // import Hoome from "./Hoome";
// // import ClassList from "./ClassList";

// // const steps = [
// //   { label: "Select course", icon: FaGraduationCap },
// //   { label: "Select Class", icon: GiTeacher },
// //   { label: "Select Subject", icon: FaBook },
// //   { label: "Select Chapter", icon: GiNotebook },
// //   { label: "Select Topic", icon: FaClipboardList },
// //   { label: "Create Question", icon: RiNewspaperLine },
// //   { label: "Download Question", icon: FaFileUpload },
// // ];

// // function Stepper() {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [filterText, setFilterText] = useState("");
// //   const [classes, setClasses] = useState([]);
// //   const [showClassInput, setShowClassInput] = useState(false);
// //  const [classText, setClassText] = useState("");

 

 

 

// //   const goToNextStep = () => {
// //     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
// //   };

// //   const goToPreviousStep = () => {
// //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// //   };

// //   return (
// //     <div className="flex flex-col items-center">
// //       {/* Heading */}
// //       <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
// //         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
// //           Exam Preparation
// //         </h1>
// //       </div>

// //       {/* Stepper */}
// //       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
// //         <ol className="flex items-center w-full justify-center">
// //           {steps.map((step, index) => (
// //             <li
// //               key={index}
// //               className={`flex w-full items-center ${
// //                 index < steps.length - 1
// //                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
// //                   : ""
// //               } ${
// //                 index <= currentStep
// //                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
// //                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
// //               }`}
// //             >
// //               <span
// //                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
// //                   index <= currentStep
// //                     ? "bg-blue-900 text-yellow-300"
// //                     : "bg-[#5fc6c6] text-black"
// //                 }`}
// //               >
// //                 {React.createElement(step.icon, {
// //                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
// //                 })}
// //               </span>
// //             </li>
// //           ))}
// //         </ol>

       

// //         {/* Other components */}
// //         <div className=" flex  flex-col r">
// //         <ClassList/>
// //           <Hoome currentStep={currentStep} />
  
// //         </div>

// //         {/* Navigation buttons */}
// //         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
// //           <button
// //             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
// //               currentStep === 0
// //                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToPreviousStep}
// //             disabled={currentStep === 0}
// //           >
// //             Back
// //           </button>
// //           <button
// //             className={`px-4 md:px-6 py-2 rounded-md ${
// //               currentStep === steps.length - 1
// //                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
// //                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
// //             }`}
// //             onClick={goToNextStep}
// //             disabled={currentStep === steps.length - 1}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Stepper;


























// import React, { useState } from "react";
// import {
//   FaGraduationCap,
//   FaBook,
//   FaClipboardList,
//   FaFileUpload,
// } from "react-icons/fa";
// import { RiNewspaperLine } from "react-icons/ri";
// import { GiTeacher, GiNotebook } from "react-icons/gi";
// import Hoome from "./Hoome";
// import ClassList from "./ClassList";

// const steps = [
//   { label: "Select Course", icon: FaGraduationCap },
//   { label: "Select Class", icon: GiTeacher },
//   { label: "Select Subject", icon: FaBook },
//   { label: "Select Chapter", icon: GiNotebook },
//   { label: "Select Topic", icon: FaClipboardList },
//   { label: "Create Question", icon: RiNewspaperLine },
//   { label: "Download Question", icon: FaFileUpload },
// ];

// const courses = ['Course 1', 'Course 2', 'Course 3'];
// const classes = ['Class 4', 'Class 10'];
// const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
// const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
// const topics = ['Topic 1', 'Topic 2', 'Topic 3'];

// function Stepper() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const goToNextStep = () => {
//     setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
//   };

//   const goToPreviousStep = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
//   };

//   const getCurrentItems = () => {
//     switch (currentStep) {
//       case 0:
//         return { items: courses, label: 'Course' };
//       case 1:
//         return { items: classes, label: 'Class' };
//       case 2:
//         return { items: subjects, label: 'Subject' };
//       case 3:
//         return { items: chapters, label: 'Chapter' };
//       case 4:
//         return { items: topics, label: 'Topic' };
//       default:
//         return { items: [], label: 'Item' };
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Heading */}
//       <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
//         <h1 className="text-[#FFF906] p-2 text-center font-semibold text-lg lg:text-2xl">
//           Exam Preparation
//         </h1>
//       </div>

//       {/* Stepper */}
//       <div className="flex flex-col items-center mt-8 px-4 w-full lg:w-3/4">
//         <ol className="flex items-center w-full justify-center">
//           {steps.map((step, index) => (
//             <li
//               key={index}
//               className={`flex w-full items-center ${
//                 index < steps.length - 1
//                   ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
//                   : ""
//               } ${
//                 index <= currentStep
//                   ? "text-[#0C283C] after:border-[#0C283C] dark:after:border-yellow-300"
//                   : "after:border-[#0C283C] dark:after:border-[#0a3c6d]"
//               }`}
//             >
//               <span
//                 className={`flex items-center justify-center w-12 h-12 sm:p-2 px-2 lg:w-20 lg:p-4 lg:h-20 xl:w-20 xl:h-20 rounded-full ${
//                   index <= currentStep
//                     ? "bg-blue-900 text-yellow-300"
//                     : "bg-[#5fc6c6] text-black"
//                 }`}
//               >
//                 {React.createElement(step.icon, {
//                   className: "w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
//                 })}
//               </span>
//             </li>
//           ))}
//         </ol>

//         {/* Other components */}
//         <div className="flex flex-col">
//           <ClassList {...getCurrentItems()} />
//         </div>

//         {/* Navigation buttons */}
//         <div className="mt-6 mb-4 flex justify-between w-full px-4 lg:px-12">
//           <button
//             className={`px-4 md:px-6 py-2 mr-2 rounded-md ${
//               currentStep === 0
//                 ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
//             }`}
//             onClick={goToPreviousStep}
//             disabled={currentStep === 0}
//           >
//             Back
//           </button>
//           <button
//             className={`px-4 md:px-6 py-2 rounded-md ${
//               currentStep === steps.length - 1
//                 ? "bg-[#5fc6c6] text-gray-200 cursor-not-allowed"
//                 : "bg-[#5fc6c6] text-white hover:bg-blue-700"
//             }`}
//             onClick={goToNextStep}
//             disabled={currentStep === steps.length - 1}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stepper;




















import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBook,
  FaClipboardList,
  FaFileUpload,
} from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { GiTeacher, GiNotebook } from "react-icons/gi";
import Hoome from "./Hoome";
import ClassList from "./ClassList";

const steps = [
  { label: "Select Course", icon: FaGraduationCap },
  { label: "Select Class", icon: GiTeacher },
  { label: "Select Subject", icon: FaBook },
  { label: "Select Chapter", icon: GiNotebook },
  { label: "Select Topic", icon: FaClipboardList },
  { label: "Create Question", icon: RiNewspaperLine },
  { label: "Download Question", icon: FaFileUpload },
];

const courses = ['Course 1', 'Course 2', 'Course 3'];
const classes = ['Class 4', 'Class 10'];
const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
const topics = ['Topic 1', 'Topic 2', 'Topic 3'];

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const getCurrentItems = () => {
    switch (currentStep) {
      case 0:
        return { items: courses, label: 'Course' };
      case 1:
        return { items: classes, label: 'Class' };
      case 2:
        return { items: subjects, label: 'Subject' };
      case 3:
        return { items: chapters, label: 'Chapter' };
      case 4:
        return { items: topics, label: 'Topic' };
      default:
        return { items: [], label: 'Item' };
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <div className="rounded-2xl m-4 mx-4 w-2/3 bg-[#00366C]">
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
                  index <= currentStep
                    ? "bg-blue-900 text-yellow-300"
                    : "bg-[#5fc6c6] text-black"
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
        <div className="flex flex-col">
          <ClassList {...getCurrentItems()} />
          <Hoome currentStep={currentStep} />
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
