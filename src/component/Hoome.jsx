
// import React from 'react'

// const Hoome = () => {
//   return (
//     <div>
//       <div className='bg-[#206CA2] flex md:flex-col  md:mt-12  shadow-lg shadow-black w-full md:w-[200px] lg:w-[250px]'>
//         {/* 1 */}
//         <div className='p-3   cursor-pointer  border-l-2 border-yellow-300 mt-2'>
//           <h1 className='text-yellow-300 font-semibold ml-2'>Course</h1>
//           <p className='text-white ml-2'>Course Name</p>
//         </div>
//         {/* 2 */}
//         <div className='p-3 cursor-pointer border-l-2 border-yellow-300 mt-2'>
//           <h1 className='text-yellow-300 ml-2 font-semibold'>Course</h1>
//           <p className='text-white ml-2'>Course Name</p>
//         </div>
//         {/* 3 */}
//         <div className='p-3 cursor-pointer border-l-2 border-yellow-300 mt-2'>
//           <h1 className='text-yellow-300 ml-2 font-semibold'>Subject</h1>
//           <p className='text-white ml-2'>Subject Name</p>
//         </div>
//         {/* 4 */}
//         <div className='p-3 cursor-pointer border-l-2 border-yellow-300 mt-2'>
//           <h1 className='text-yellow-300 ml-2 font-semibold'>Chapter</h1>
//           <p className='text-white ml-2'>Chapter Name</p>
//         </div>
//         {/* 5 */}
//         <div className='p-3 cursor-pointer border-l-2 border-yellow-300 mt-2'>
//           <h1 className='text-yellow-300 ml-2 font-semibold'>Topic</h1>
//           <p className='text-white ml-2'>Topic Name</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hoome




















import React from 'react';

const Hoome = ({ currentStep }) => {
  const sections = [
    { title: 'Course', content: 'Course Name' },
    { title: 'Course', content: 'Course Name' },
    { title: 'Subject', content: 'Subject Name' },
    { title: 'Chapter', content: 'Chapter Name' },
    { title: 'Topic', content: 'Topic Name' },
  ];

  return (
    <div className='bg-[#206CA2]   md:mt-12 shadow-lg shadow-black w-[150px] md:w-[200px] lg:w-[200px]'>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`p-3 cursor-pointer border-l-2 mt-2 ${
            index === currentStep ? 'border-yellow-300' : 'border-transparent'
          }`}
        >
          <h1 className='text-yellow-300 font-semibold ml-2'>{section.title}</h1>
          <p className='text-white ml-2'>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Hoome;






















