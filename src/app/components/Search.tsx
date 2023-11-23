import SearchIcon from "../icons/SearchIcon";

function Search() {
  return (
    <div className="border-2 border-custom-green-500 flex rounded-lg 2xl:w-[582px]">
      <input
        type="text"
        placeholder="Search here"
        className="px-6 py-3 rounded-lg w-full text-custom-gray-500"
      />

      <div className="border-l-2 flex pl-1 pr-4">
        <select className="pr-2 bg-inherit text-custom-gray-500">
          <option>Categories</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-custom-green-500 px-5 flex items-center"
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
