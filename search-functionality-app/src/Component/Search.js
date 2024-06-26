import { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (eventTrigerr) => {
        eventTrigerr.preventDefault();
        setError('');
        try {
            const responseApi = await axios.get(`http://localhost:4000/User/searchUser?query=${query}`)
            setResult(responseApi.data);
        } catch (catchError) {
            if (catchError.response && catchError.response.status === 404) {
                setError('No User Found');
            } else {
                alert('Search InValid. Please try Again Later.');
            }
            setResult([]);
        };
    };

    return (
        <>
            <div className='body'>
                <div className="search-container">
                    <h1>Search User Profile</h1>
                    <div className="search-box">
                        <input type="text"
                            className="form-control"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..." />
                        <button className="btn-search mt-2"
                            onClick={handleSearch}>Search</button>
                    </div>

                    {error && <p className='err'>{error}</p>}

                    <div className="profile-box">

                        {results.map((search, index) => (
                            <>
                                <p key={index}><strong>Name:</strong> {search.F_Name} {search.L_Name}</p>
                                <p key={index}><strong>Email:</strong> {search.Email_Id}</p>
                                <p key={index}><strong>Contact:</strong> {search.Mobile_No}</p>
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;