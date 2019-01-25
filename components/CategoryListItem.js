import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';

import CoupleImage from './../assets/couple.png';

export default function CategoryListItem(props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={CoupleImage} style={styles.categoryImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        width:64, 
        height:64
    }
});