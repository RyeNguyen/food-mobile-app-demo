import React from 'react';
import {View, Text, Image, StyleSheet} from "react-native";

const ResultsDetail = ({result}) => {
    return <View style={styles.result}>
        <Image
            source={{uri: result.image_url}}
            style={styles.image}
        />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    result: {
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 20
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
    },
    name: {
        fontWeight: '900',
        fontSize: 15,
        marginTop: 8
    }
});

export default ResultsDetail;