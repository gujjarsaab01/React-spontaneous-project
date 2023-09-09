import React from 'react';

const Category = ({ categories, onSelectCategory }) => {
  return (
    <div className='mb-4'>
      <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Select a Category:</label>
      <select id="category" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">-- Select Category --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
