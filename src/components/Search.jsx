import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        const trimmedEmail = searchValue.trim();

        if (trimmedEmail === '') {
            onSearch('');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(trimmedEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        onSearch(trimmedEmail.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="d-flex justify-content-center py-2">
            <div className="input-group" style={{ maxWidth: '400px', width: '100%' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;

