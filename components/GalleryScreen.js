import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const GalleryScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Image source={require('../data/images/1.jpg')} style={styles.image} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 2</Text>
                </View>
            </View>
            {/* Add more rows as needed */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        aspectRatio: 4 / 3,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        // https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        width: '100%', // Make the image width 100% of its container
        height: '100%', // Make the image height 100% of its container
        borderRadius: 8,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GalleryScreen;
