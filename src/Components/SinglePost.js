import { useParams } from "react-router-dom";


const SinglePost = ({ data }) => {

  const { id } = useParams();
  const postIndex = parseInt(id);
  if (isNaN(postIndex) || postIndex < 0 || postIndex >= data.length) {
    return <div>Post not found</div>;
  }

  const post = data[postIndex];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex-9 w-full h-auto">
      <div className="p-4" key={id}>
        <div className="m-max-[1500px] flex bg-gray-100 mx-28">
          <img
            className="w-fw-full h-[380px] object-cover rounded-md transition-transform transform ml-[250px]"
            src={post.img}
            alt=""
          />
          <div className="ml-[150px] m-12 mt-20  italic font-bold">
            <h1 className="text-center text-4xl font-serif my-6">
              {post.title}
            </h1>
            <div className="flex justify-between text-sm text-gold my-2">
              <span>
                Author:   {post.author}
              </span>
            </div>
          </div>
        </div>
        <p className="w-auto mx-[250px] h-full overflow-auto mt-14 mb-16 text-gray-700 leading-7 text-xl">
          {post.post}
        </p>
      </div>
    </div>
  );
}

export default SinglePost