import { Link } from "react-router-dom";

const Posts = ({ data }) => {

  return (
    <div className="h-auto w-[70%] flex-9 flex flex-wrap m-10 ml-28">
        {data.map((item,id) => (
          <Link to={`/post/${id}`} key={id} className="w-[320px] mx-12 mb-10 flex flex-col">
            <img
              className="w-full h-[400px] object-cover rounded-md transition-transform transform hover:scale-110"
              src={item.img}
              alt=""
            />

            <div className="mt-4 text-center">
              <div className="flex space-x-2">
                <span className="font-varela text-xs text-gold">{item.category}</span>
              </div>
              <span className="font-josefin text-2xl  font-semibold mt-2">
                {item.title}
              </span>
              <hr className="mt-2" />
            </div>
            <p className="font-varela text-sm text-gray-700 mt-2 overflow-hidden h-24">
              {item.shortInfo}
            </p>
          </Link>
        ))}
    </div>
  );
}

export default Posts;
