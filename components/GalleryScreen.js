import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const GalleryScreen = () => {

    const images = [
        { id: 1, imageUrl: require("../data/images/1.jpg") },
        { id: 2, imageUrl: require("../data/images/2.jpg") },
        { id: 3, imageUrl: require("../data/images/3.jpg") },
        // Add more images here
    ];

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) => {
            const start = index * size;
            return array.slice(start, start + size);
        });
    };

    const chunkedImages = chunkArray(images, 2);

    const rows = [];
    for (let i = 0; i < chunkedImages.length; i++) {
        const row = chunkedImages[i];
        const rowItems = [];
        for (let j = 0; j < row.length; j++) {
            const image = row[j];
            rowItems.push(
                <View key={image.id} style={styles.card}>
                    <Image source={image.imageUrl} style={styles.image} />
                </View>
            );
        }
        if (row.length === 1) {
            rowItems.push(<View key={'empty'} style={styles.card} />);
        }
        rows.push(
            <View key={i} style={styles.row}>
                {rowItems}
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {rows}
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
        marginBottom: 10,
    },
    card: {
        flex: 1,
        aspectRatio: 4 / 3,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GalleryScreen;
