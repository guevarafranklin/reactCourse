import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import { Card } from '../components/Card';

export default function MainLayout({ cards }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState({}); // Track expanded state for each card

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // Update the search term state
  };

  const toggleDescription = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the specific card
    }));
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* Search Form */}
      <div className="container mx-auto mt-8 mb-8 flex justify-center">
        <SearchForm onSearch={handleSearch} />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            description={card.description}
            showFullDescription={!!expandedCards[index]} // Check if the card is expanded
            toggleDescription={() => toggleDescription(index)} // Toggle the expanded state
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
