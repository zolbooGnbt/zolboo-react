import axios from "axios";
import { useState } from "react";

export default function Write({ hide }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState("");
  const [shortInfo, setShortInfo] = useState("");
  const [date, setDate] = useState("");
  function addHandler() {
    var posts = {
      img: image,
      title: title,
      category: category,
      post: post,
      shortInfo: shortInfo,
      author: author

    }
    axios.post('https://blogproject-5047e-default-rtdb.firebaseio.com/post.json', posts)
      .then(response => {
        alert("amjilttai nemegdlee")
      }
      )
  }

  const categories = ["Mystery", "Action", "Romance", "Fantasy"]

  return (
    <div className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center;">
      <div className="  p-10 rounded-md shadow-md">

        <form className="relative">
          <input
            type="text"
            alt=""
            className="m-2 text-3xl border-b border-gray-300 outline-none placeholder-gray-400 w-[70vw] rounded-md ml-32 text-center"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="image URL"
          />
          <input
            type="text"
            alt=""
            className="m-2 text-3xl border-b border-gray-300 outline-none placeholder-gray-400 w-[70vw] rounded-md ml-32 text-center"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="author name"
          />
             <input
            type="date"
            alt=""
            className="m-2 text-3xl border-b border-gray-300 outline-none placeholder-gray-400 w-[70vw] rounded-md ml-32 text-center"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="choose date"
          />
          <div className="flex items-center ml-32">
            <label htmlFor="fileInput" className="text-gray-400 hover:text-gray-600 cursor-pointer">
              <i className="fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className=" text-3xl border-b border-gray-300 outline-none placeholder-gray-400 w-[70vw] rounded-md text-center"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus={true}
            />
          </div>
          <select className="ml-32 m-2 w-[300px]" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option >Төрөл сонгох</option>
            {categories.map((category, id) => {
              return (<option key={id}>
                {category}
              </option>)
            })}
          </select>
          <div className="ml-32 mt-4">
            <textarea
              className="w-[70vw] h-[10vh] font-sans text-xl outline-none"
              placeholder="Summary"
              type="text"
              autoFocus={true}
              value={shortInfo}
              onChange={(e) => setShortInfo(e.target.value)}
            />
          </div>
          <div className="ml-32 mt-4">
            <textarea
              className="w-[70vw] h-screen font-sans text-xl outline-none"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <button
            className=" w-[200px] absolute top-8 right-20 text-white bg-teal-500 rounded-lg px-4 py-2 text-lg cursor-pointer"
            onClick={addHandler}
          >
            Publish
          </button>
          <button onClick={hide} className='w-[200px] absolute top-24 right-20 text-white bg-teal-500 rounded-lg px-4 py-2 text-lg cursor-pointer'>Close</button>
        </form>
      </div>
    </div>
  );
}
