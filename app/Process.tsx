const Process = () => {
  return (
    <div className="bg-gray-900 py-28">
      <div className="bg-gray-800 mx-auto py-10 grid max-w-screen-xl grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
          <h1 className="mb-6 text-4xl">Process</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.
          </p>
        </div>
        <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gray-600 p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
          <div className="relative flex gap-5">
            <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">
              01
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">Beginning</h3>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit..
              </p>
            </div>
          </div>
          <div className="relative flex gap-5">
            <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">
              02
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">Storytelling</h3>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit..
              </p>
            </div>
          </div>
          <div className="relative flex gap-5">
            <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">
              03
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">
                Keeping the reader hooked
              </h3>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit..
              </p>
            </div>
          </div>
          <div className="relative flex gap-5">
            <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">
              04
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">Ending with a hook</h3>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
