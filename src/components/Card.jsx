export function Card({ image, name, description, showFullDescription, toggleDescription }) {
  // Helper function to limit text to the first 5 words
  const limitWords = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + (text.split(' ').length > wordLimit ? '...' : '');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-gray-200">
      <img
        className="w-full object-cover"
        src={image}
        alt={name}
        style={{ width: '500px', height: '500px' }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {showFullDescription ? description : limitWords(description, 10)}
        </p>
        <button
          className="mt-2 text-blue-500 hover:underline"
          onClick={toggleDescription}
        >
          {showFullDescription ? 'Show Less' : 'Click More'}
        </button>
      </div>
    </div>
  );
}