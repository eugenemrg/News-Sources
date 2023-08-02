import React from 'react'
import { useState } from 'react';

function Search({ handleSearch}) {
    const [searchInput, setSearchInput] = useState('')

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchInput);
        const searchQuery = searchInput
        console.log('search Query:', searchQuery);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'></label>
            <input type='text' name='search' value={searchInput} onChange={handleChange} />
            <input type='submit' value='Submit'/>
        </form>
    )
}

export default Search