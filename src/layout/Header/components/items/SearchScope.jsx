import React from 'react';
import search_scope from '../../../../assets/images/search_scope.png'
import search_body from '../../../../assets/images/search_body.png'
import VItem from './VItem';
const SearchScope = () => {
    return (
        <>
            <VItem img={search_scope} label="search"/>
            <VItem img={search_body} label="body"/>
            <div className="menu-item-detail">
                <p>filter</p>
            </div>
        </>
    );
};

export default SearchScope;