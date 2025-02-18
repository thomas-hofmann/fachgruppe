'use client';

export default function Headline() {

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
    return (
      <div className="text-center my-6">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Fachgruppe:
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Medieninformatik
            </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Hochschule Darmstadt
        </p>
        <p className="text-start">
          <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white text-xs p-2 rounded">Dark/Light Toggle</button>
        </p>
      </div>
    );
}