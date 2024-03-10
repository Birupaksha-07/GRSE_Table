import React, { useState } from 'react';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = data.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    console.log("resultissss--", results)
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="results-list">
        {searchResults.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Search_Fun = () => {
  const data = [
    { id: 1, name: 'hii this is biru' },
    { id: 2, name: 'hello, this is a test' },
    { id: 3, name: 'another example' },
    // Add more data as needed
  ];

  return <SearchComponent data={data} />;
};

export default Search_Fun;
