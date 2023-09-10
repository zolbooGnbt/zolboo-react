import SinglePost from "./SinglePost";

const Single=({data})=> {
  return (
    <div className="flex">
      <SinglePost data={data}/>
    </div>
  );
}
export default Single;