function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen sm:p-3">
      <div className="max-w-lg w-full h-full shadow-lg p-3 flex flex-col-reverse gap-3">
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Calculate
          </button>
        </div>
        <div className="border border-inherit rounded-md p-3">1 + 1 = 2</div>
      </div>
    </div>
  );
}

export default App;
