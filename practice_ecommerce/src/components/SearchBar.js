import React,{useState} from 'react';
import searchLogo from '../assets/icons/search.svg';

function SearchBar(props){
    const [search, setSearch] = useState('');

    function onChange(event){
        setSearch(event.target.value);
    }
    function onSubmit(event){
        event.preventDefault();
        console.log(search)
    }

    return(
        <div className='searchbar'>
            <form onSubmit={(event)=>onSubmit(event)}>
                <input type='text' value={search} onChange={(event) => onChange(event)} />
                <button className='search'><img src={searchLogo} alt='search'/></button>
            </form>
        </div>
    )
};

export default SearchBar;