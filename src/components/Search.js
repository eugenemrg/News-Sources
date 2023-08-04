import React from 'react'
import { useState } from 'react';

function Search({ handleSearch }) {
    const [searchInput, setSearchInput] = useState('')

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchInput);
        setSearchInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'></label>
            <input type='text' name='search' placeholder='Search for news that interests you' value={searchInput} onChange={handleChange} />
            <input type='submit' value='Search' />
        </form>
    )
}

export default Search