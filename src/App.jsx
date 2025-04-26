import React from 'react';
import MainLayout from './layouts/MainLayout';

const App = () => {
  

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to the Meal Finder</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Find your favorite meals and recipes.</p>
      </div>
    </MainLayout>
  );
};

export default App;
