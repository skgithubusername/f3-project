//  side navbar









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
    <div className='bg-[#206CA2]    md:mt-12 shadow-lg shadow-black w-[150px] md:w-[200px] lg:w-[200px]'>
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






















