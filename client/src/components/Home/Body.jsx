import "./body.css"; // Import your CSS file for custom styling

const Body = () => {

  return (
    <div className="mx-5 p-5">
      <form action="" className="bg-white rounded-lg relative">
        <div className="p-10 flex gap-5">
          <label
            htmlFor="from"
            className="flex w-[30%] flex-col border rounded-lg text-gray-600 border-gray-300 p-3">
            From
            <input
              type="text"
              placeholder="Enter city or airport"
              className="outline-none rounded px-3 py-1 text-3xl text-black placeholder-gray-300 font-bold"
            />
          </label>
          <label
            htmlFor="to"
            className="flex w-[30%] flex-col border rounded-lg text-gray-600 border-gray-300 p-3">
            To
            <input
              type="text"
              placeholder="Enter city or airport"
              className="outline-none rounded px-3 py-1 text-3xl text-blak placeholder-gray-300 font-bold"
            />
          </label>
          <div className="grid grid-cols-3 gap-2 text-gray-300">
            <div className="border p-3 rounded-lg">Departure</div>
            <div className="border p-3 rounded-lg">Departure</div>
            <div className="border p-3 rounded-lg">Departure</div>
          </div>
        </div>
        <button className="absolute bg-gradient-to-r from-blue to-darkBlue rounded-full px-10 py-2 font-bold text-white right-[50%]  -bottom-5 text-xl">
          Search
        </button>
      </form>

      
    </div>
  );
};

export default Body;
