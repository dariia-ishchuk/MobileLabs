import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GalleryScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 1</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 2</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 3</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 4</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 5</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 6</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 7</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 8</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 9</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 10</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 11</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Picture 12</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
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
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GalleryScreen;
