import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title, imageUrl }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={imageUrl} style={styles.image} resizeMode="contain"/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    image: {
        width: 150,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Header;
