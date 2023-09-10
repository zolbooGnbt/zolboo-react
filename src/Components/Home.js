import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useState } from "react";


const Home = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="flex">
        {data && data.length > 0 ? (
          <Posts data={filteredData} />
        ) : (
          <p className="h-[38vh]">Loading data...</p>
        )}
   
        <Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        {localStorage.getItem("currentUser") && <Modal />}
      </div>
    </>
  );
};

export default Home;
