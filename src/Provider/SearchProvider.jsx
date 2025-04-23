import React, { useState } from 'react';
import { SearchContext } from './context';

const SearchProvider = ({children}) => {
    const [searchText, setSearchText] =useState("");
    return (
        <div>
            <SearchContext.Provider value={{searchText, setSearchText}}>
                {children}
            </SearchContext.Provider>
        </div>
    );
};

export default SearchProvider;