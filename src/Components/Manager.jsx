const Manager = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" mx-auto max-w-4xl  py-14">
        <h1 className="text-4xl font-bold text-center">
          {" "}
          <span className="text-green-500"> &lt;</span>Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className=" flex-col flex p-4 gap-8">
          <input
            className="rounded-full border border-green-500 outline-none text-black px-4 py-1"
            type="text"
          />
          <div className="flex w-full gap-8 ">
            <input
              className="rounded-full w-1/2 border border-green-500 outline-none text-black px-4 py-1"
              type="text"
            />
            <input
              className="rounded-full w-1/2 border border-green-500 outline-none text-black px-4 py-1"
              type="text"
            />
          </div>

          <button className="flex justify-center items-center bg-green-300 hover:bg-green-200 rounded-full px-4 py-2 w-fit font-semibold  mx-auto">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              // style={{width:"250px" , height:"250px"}}
            ></lord-icon>{" "}
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
