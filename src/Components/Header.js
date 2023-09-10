function Header() {
  return (
    <div className="mt-4 header">
      <div className="flex flex-col items-start  font-serif text-gray-700">
        <span className="absolute top-60 right-40 text-6xl ">Light Novel's </span>
      </div>
      <img
        className="w-full h-64 mt-12 object-cover headerImg"
        src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/banner_images/5438/original/book_banner.jpg?1609791964"
        alt=""
      />
    </div>
  );
}
export default Header;