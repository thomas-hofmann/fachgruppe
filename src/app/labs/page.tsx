import React from 'react';

const labs = [
  { name: "D15/102 - Multimedia Lab", description: "Lab for multimedia projects", link: "https://fbi.h-da.de/studium/labore/multimedia-grafik" },
  { name: "D15/107 - Graphics Lab", description: "Lab for graphics and visualization", link: "https://fbi.h-da.de/studium/labore/multimedia-grafik" },
  // Weitere Labore können hier hinzugefügt werden
];

export default function Labs() {
  return (
    <section>
      <h1>Labore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {labs.map((lab, index) => (
          <a 
            key={index} 
            href={lab.link} 
            target="_blank" 
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {lab.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {lab.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}