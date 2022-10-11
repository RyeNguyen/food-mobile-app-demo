import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(result)
    }

    useEffect(() => {
        getResult(id).then();
    }, []);

    if (!result) return null;

    return <>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri: item}}/>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginBottom: 5
    }
});

export default ResultsShowScreen;