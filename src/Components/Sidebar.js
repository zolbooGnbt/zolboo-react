import React from 'react';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["Mystery", "Action", "Romance", "Fantasy"]
  const onFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };
  return (
    <div className="w-[320px] flex-3 h-[300px] m-10 mr-28 pb-8 bg-gray-100 rounded-lg flex flex-col items-center absolute right-5">
      <div className="mt-8">
        <span className="text-lg font-semibold text-gray-800">Genres</span>
        {categories.map(category => (
          <div key={category}>
            <label>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={category}
                className="checkbox" />
              {category}
            </label>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;
