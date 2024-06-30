// import React, { useState } from 'react';

// const ClassList = () => {
//   const initialClasses = ['cls4', 'class 10']; // Initial classes
//   const [classes, setClasses] = useState(initialClasses);
//   const [newClass, setNewClass] = useState('');

//   const handleAddClass = () => {
//     if (newClass.trim() !== '') {
//       setClasses([...classes, newClass]);
//       setNewClass(''); // Clear input field after adding
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="lg:w-[800px] rounded-lg  p-6 shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <input
//             type="text"
//             value={newClass}
//             onChange={(e) => setNewClass(e.target.value)}
//             placeholder="Enter new class name"
//             className="flex-1 p-2 mr-2 text-gray-600 focus:outline-none border border-gray-300 rounded-lg"
//           />
//           <button
//             className="bg-[#5fc6c6] px-4 py-2 rounded-lg text-white hover:bg-[#4ea8a8] focus:outline-none"
//             onClick={handleAddClass}
//           >
//             Add Class
//           </button>
//         </div>
//         <ul className="flex flex-wrap">
//           {classes.map((className, index) => (
//             <li
//               key={index}
//               className="bg-blue-200 m-2 rounded-lg px-4 py-1 text-gray-700 font-semibold"
//             >
//               {className}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ClassList;















import React, { useState, useEffect } from 'react';

const ClassList = ({ items, label }) => {
  const [list, setList] = useState(items);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    setList(items);
  }, [items]);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setList([...list, newItem]);
      setNewItem(''); // Clear input field after adding
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-[800px] rounded-lg  p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder={`Enter new ${label}`}
            className="flex-1 p-2 mr-2 text-gray-600 focus:outline-none border border-gray-300 rounded-lg"
          />
          <button
            className="bg-[#5fc6c6] px-4 py-2 rounded-lg text-white hover:bg-[#4ea8a8] focus:outline-none"
            onClick={handleAddItem}
          >
            Add {label}
          </button>
        </div>
        <ul className="flex flex-wrap">
          {list.map((item, index) => (
            <li
              key={index}
              className="bg-blue-200 m-2 rounded-lg px-4 py-1 text-gray-700 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassList;
