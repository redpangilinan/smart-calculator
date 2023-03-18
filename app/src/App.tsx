import { useState, useEffect } from 'react';
import Solution from './components/Solution';

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [solutions, setSolutions] = useState<string[]>([]);

  useEffect(() => {
    const savedSolutions = localStorage.getItem('solutions');
    if (savedSolutions) {
      setSolutions(JSON.parse(savedSolutions));
    }
  }, []);

  useEffect(() => {
    if (solutions.length > 0) {
      localStorage.setItem('solutions', JSON.stringify(solutions));
    }
  }, [solutions]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim()) {
      setSolutions((prevSolutions) => [...prevSolutions, input]);
      setInput('');
    }
  };

  const handleClear = () => {
    setSolutions([]);
    localStorage.clear();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const inputSolution = (item: any) => {
    setInput(item);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen sm:p-3 bg-slate-200 touch-manipulation">
      <div className="max-w-lg w-full h-full shadow-lg flex flex-col-reverse bg-slate-50">
        {/* Input */}
        <form className="flex gap-2 p-3">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Calculate
          </button>
        </form>

        {/* Results */}
        <div
          key={solutions.join()}
          className="flex flex-col-reverse gap-3 overflow-y-auto px-3 h-full"
        >
          {solutions
            .slice(0)
            .reverse()
            .map((item, id) => (
              <Solution
                key={id}
                item={item}
                id={id}
                passSolution={() => inputSolution(item)}
              />
            ))}
        </div>

        {/* Clear */}
        <button
          onClick={handleClear}
          type="button"
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 border border-red-500 hover:border-transparent rounded m-3"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
