import './App.css'

const App = () => {
   // Helper function to limit text to the first 5 words
  const limitWords = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + (text.split(' ').length > wordLimit ? '...' : '');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Breakfast</th>
              <th className="border border-gray-300 px-4 py-2">Lunch</th>
              <th className="border border-gray-300 px-4 py-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Monday</td>
              <td className="border border-gray-300 px-4 py-2">Pancakes</td>
              <td className="border border-gray-300 px-4 py-2">Grilled Chicken</td>
              <td className="border border-gray-300 px-4 py-2">Spaghetti</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tuesday</td>
              <td className="border border-gray-300 px-4 py-2">Omelette</td>
              <td className="border border-gray-300 px-4 py-2">Salad</td>
              <td className="border border-gray-300 px-4 py-2">Steak</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Wednesday</td>
              <td className="border border-gray-300 px-4 py-2">Toast</td>
              <td className="border border-gray-300 px-4 py-2">Burger</td>
              <td className="border border-gray-300 px-4 py-2">Pizza</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Thursday</td>
              <td className="border border-gray-300 px-4 py-2">Cereal</td>
              <td className="border border-gray-300 px-4 py-2">Pasta</td>
              <td className="border border-gray-300 px-4 py-2">Fish</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Friday</td>
              <td className="border border-gray-300 px-4 py-2">Bagel</td>
              <td className="border border-gray-300 px-4 py-2">Soup</td>
              <td className="border border-gray-300 px-4 py-2">Tacos</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Saturday</td>
              <td className="border border-gray-300 px-4 py-2">Waffles</td>
              <td className="border border-gray-300 px-4 py-2">
                {limitWords('Long text that needs to wrap, so I can address the issue with Captain America', 5)}
              </td>
              <td className="border border-gray-300 px-4 py-2">BBQ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Sunday</td>
              <td className="border border-gray-300 px-4 py-2">Smoothie</td>
              <td className="border border-gray-300 px-4 py-2">Roast</td>
              <td className="border border-gray-300 px-4 py-2">Curry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
