import React, { useState } from 'react';

// ตัวอย่างข้อมูลผลิตภัณฑ์
const products = [
  'Laptop Model 1',
  'Laptop Model 2',
  'Smartphone Model X',
  'Tablet Model Y'
];

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>(''); 
  const [results, setResults] = useState<string[]>([]); 
  const [noResults, setNoResults] = useState<boolean>(false); 

  const handleSearch = () => {
    if (query.trim() === '') {
      setResults([]);
      setNoResults(false);
      return;
    }
    
    // การค้นหาผลลัพธ์ที่ตรงกับคำค้นหา
    const filteredResults = products.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );
    
    setResults(filteredResults);
    setNoResults(filteredResults.length === 0);
  };

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>{result}</div>
          ))
        ) : (
          noResults && <div>No results found</div> // แสดงข้อความเมื่อไม่มีผลลัพธ์
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
