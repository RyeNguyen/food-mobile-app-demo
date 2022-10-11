import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";

import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
    }

    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            data={results}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '900',
        marginLeft: 20
    }
});

export default withNavigation(ResultsList);