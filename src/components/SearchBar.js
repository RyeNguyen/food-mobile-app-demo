import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {EvilIcons} from '@expo/vector-icons';

const SearchBar = ({searchTerm, setSearchTerm, onTermSubmitted}) => {
    return <View style={styles.background}>
        <EvilIcons name='search' size={30}/>
        <TextInput
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            value={searchTerm}
            onChangeText={newText => setSearchTerm(newText)}
            onEndEditing={onTermSubmitted}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        height: 50,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#5f5c5c',
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        height: '100%',
        marginLeft: 5,
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;