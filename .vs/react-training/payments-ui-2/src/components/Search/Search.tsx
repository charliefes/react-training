import { useState } from 'react';
import './Search.css';

const Search = () : JSX.Element => {

    const [search,setSearch] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };

      const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(search);
       
      };


    return (
        <div className="searchBox">
            <form onSubmit={submitForm}>
                <label htmlFor="orderId">Order Id:</label>
                <input id="orderId" type="text" value={search} onChange={handleChange} />
                <button  type="submit" >Search</button>
            </form>
        </div>
    );
}

export default Search
