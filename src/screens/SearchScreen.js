import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import useResults from "../hooks/useResults";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return <>
        <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onTermSubmitted={() => searchApi(searchTerm)}
        />
        <Text>{errorMsg ?? null}</Text>

        <ScrollView>
            <ResultsList
                title='Cost Effective'
                results={filterResultsByPrice('$')}
            />
            <ResultsList
                title='Bit Pricier'
                results={filterResultsByPrice('$$')}
            />
            <ResultsList
                title='Big Spender'
                results={filterResultsByPrice('$$$')}
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({});

export default SearchScreen;