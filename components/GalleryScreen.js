import React, {useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Config from "../config";

const GalleryScreen = () => {

    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        fetchImagesData();
    }, []);

    const fetchImagesData = async () => {
        try {
            const response = await fetch(Config.galleryUrl);
            const data = await response.json();
            setImagesData(data);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) => {
            const start = index * size;
            return array.slice(start, start + size);
        });
    };

    const chunkedImages = chunkArray(imagesData, 2);

    const rows = [];
    for (let i = 0; i < chunkedImages.length; i++) {
        const row = chunkedImages[i];
        const rowItems = [];
        for (let j = 0; j < row.length; j++) {
            const image = row[j];
            rowItems.push(
                <View key={image.id} style={styles.card}>
                    <Image source={{ uri: image.imageUrl }} style={styles.image} />
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
