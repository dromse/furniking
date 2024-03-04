import SearchIcon from "@/app/icons/SearchIcon";

function Search() {
  return (
    <div className="border-2 border-custom-green-500 flex m-auto rounded-lg custom-lg:w-[582px] order-last md:order-none">
      <input
        type="text"
        placeholder="Search here"
        className="px-6 py-3 rounded-lg w-full text-custom-gray-500"
      />

      <div className="border-l-2 flex pl-1 pr-1 md:pr-4">
        <select className="md:pr-2 bg-inherit text-custom-gray-500">
          <option>Categories</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-custom-green-500 p-5 flex items-center"
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
