import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMsg('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta').then(r => console.log(r));
    }, []);

    return [searchApi, results, errorMsg];
}