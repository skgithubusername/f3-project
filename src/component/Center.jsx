



// // import React from 'react';

// // const questions = [
// //   {
// //     question: '1. भारताची राष्ट्रभाषा कोणती आहे?',
// //     marks: '3 Marks',
// //     options: ['A. भारताची', 'B. भारताच', 'C. भारता', 'D. भारत'],
// //     ans: 'सही उत्तर : A',
// //     type: 'Type: Objective',
// //     level: 'Difficulty Level : Easy'
// //   },
// //   {
// //     question: '2. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
// //     marks: '2 Marks',
// //     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
// //     ans: 'सही उत्तर : C',
// //     type: 'Type: Objective',
// //     level: 'Difficulty Level : Easy'
// //   },
// //   {
// //     question: '3. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
// //     marks: '2 Marks',
// //     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
// //     ans: 'सही उत्तर : C',
// //     type: 'Type: Objective',
// //     level: 'Difficulty Level : Easy'
// //   },
// //   {
// //     question: '4. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
// //     marks: '2 Marks',
// //     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
// //     ans: 'सही उत्तर : C',
// //     type: 'Type: Objective',
// //     level: 'Difficulty Level : Easy'
// //   },
// //   {
// //     question: '5. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
// //     marks: '2 Marks',
// //     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
// //     ans: 'सही उत्तर : C',
// //     type: 'Type: Objective',
// //     level: 'Difficulty Level : Easy'
// //   },
 
// // ];

// // const Quiz = () => {
// //   return (
// //     <div className="h-screen overflow-hidden pt-20 flex flex-col md:flex-row">
// //       <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#185179] scrollbar-track-[#00366C] flex-grow">
// //         <div className="p-6 space-y-6">
// //           <label className='text-white font-medium flex items-center'>
// //             <input type="checkbox" className="cursor-pointer ml-2 m-2 w-4 h-4 bg-blue-900" />
// //             Select All
// //           </label>
// //           {questions.map((item, index) => (
// //             <div key={index} className="mb-6 w-full md:w-[600px] lg:w-[800px] xl:w-[980px] p-4 bg-[#00366C] text-white rounded shadow-md">
// //               <div className='flex justify-between'>
// //                 <div className="flex items-center mb-4">
// //                   <input type="checkbox" id={`q${index}`} className="mr-2 w-4 h-4 cursor-pointer" />
// //                   <label htmlFor={`q${index}`} className="text-xl font-medium">
// //                     {item.question}
// //                   </label>
// //                 </div>
// //                 <p className='font-semibold text-red-600 float-end'>{item.marks}</p>
// //               </div>
// //               <ul className="list-none flex flex-col md:flex-row md:justify-between items-start md:items-center">
// //                 {item.options.map((option, idx) => (
// //                   <li key={idx} className="text-md mb-2 md:mb-0">{option}</li>
// //                 ))}
// //               </ul>
// //               <p className="mt-4">{item.ans}</p>
// //               <div className="flex justify-between items-center mt-2">
// //                 <p>{item.type}</p>
// //                 <p>{item.level}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       {/* Custom Scrollbar on the right side */}
// //       <div className="m-4 w-2 mr-4 flex-shrink-0">
// //         {/* Spacer for scrollbar positioning */}
// //         <div className="absolute inset-y-0 right-0 w-1"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Quiz;























// import React from 'react';

// const questions = [
//   {
//     question: '1. भारताची राष्ट्रभाषा कोणती आहे?',
//     marks: '3 Marks',
//     options: ['A. भारताची', 'B. भारताच', 'C. भारता', 'D. भारत'],
//     ans: 'सही उत्तर : A',
//     type: 'Type: Objective',
//     level: 'Difficulty Level : Easy'
//   },
//   {
//     question: '2. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
//     marks: '2 Marks',
//     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
//     ans: 'सही उत्तर : C',
//     type: 'Type: Objective',
//     level: 'Difficulty Level : Easy'
//   },
//   {
//     question: '3. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
//     marks: '2 Marks',
//     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
//     ans: 'सही उत्तर : C',
//     type: 'Type: Objective',
//     level: 'Difficulty Level : Easy'
//   },
//   {
//     question: '4. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
//     marks: '2 Marks',
//     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
//     ans: 'सही उत्तर : C',
//     type: 'Type: Objective',
//     level: 'Difficulty Level : Easy'
//   },
//   {
//     question: '5. भारताच्या राष्ट्रीय पक्षाचे नाव काय आहे?',
//     marks: '2 Marks',
//     options: ['A. मोर', 'B. वाघ', 'C. हत्ती', 'D. सिंह'],
//     ans: 'सही उत्तर : C',
//     type: 'Type: Objective',
//     level: 'Difficulty Level : Easy'
//   },
// ];

// const Quiz = () => {
//   return (
//     <div className="h-screen overflow-hidden pt-20 flex flex-col md:flex-row">
//       <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#185179] scrollbar-track-[#00366C] flex-grow">
//         <div className="p-6 space-y-6">
//           <label className='text-white font-medium flex items-center'>
//             <input type="checkbox" className="cursor-pointer ml-2 m-2 w-4 h-4 bg-blue-900" />
//             Select All
//           </label>
//           {questions.map((item, index) => (
//             <div key={index} className="mb-6 w-full md:w-[600px] lg:w-[800px] xl:w-[980px] p-4 bg-[#00366C] text-white rounded shadow-md">
//               <div className='flex justify-between'>
//                 <div className="flex items-center mb-4">
//                   <input type="checkbox" id={`q${index}`} className="mr-2 w-4 h-4 cursor-pointer" />
//                   <label htmlFor={`q${index}`} className="text-xl font-medium">
//                     {item.question}
//                   </label>
//                 </div>
//                 <p className='font-semibold text-red-600 float-end'>{item.marks}</p>
//               </div>
//               <ul className="list-none flex flex-col md:flex-row md:justify-between items-start md:items-center">
//                 {item.options.map((option, idx) => (
//                   <li key={idx} className="text-md mb-2 md:mb-0">{option}</li>
//                 ))}
//               </ul>
//               <p className="mt-4">{item.ans}</p>
//               <div className="flex justify-between items-center mt-2">
//                 <p>{item.type}</p>
//                 <p>{item.level}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Custom Scrollbar on the right side */}
//       <div className="m-4 w-2 mr-4 flex-shrink-0">
//         {/* Spacer for scrollbar positioning */}
//         <div className="absolute inset-y-0 right-0 w-1"></div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;
























