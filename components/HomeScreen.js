import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
    // Dummy news data
    const newsData = [
        {
            id: 1,
            title: 'Breaking News',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 25, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim lobortis, feugiat massa eget, placerat turpis.',
        },
        {
            id: 2,
            title: 'Latest Update',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 24, 2024',
            description: 'Praesent et metus vel sem vehicula efficitur. Phasellus dignissim posuere magna nec malesuada.',
        },
        {
            id: 3,
            title: 'Breaking News',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 25, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim lobortis, feugiat massa eget, placerat turpis.',
        },
        {
            id: 4,
            title: 'Latest Update',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 24, 2024',
            description: 'Praesent et metus vel sem vehicula efficitur. Phasellus dignissim posuere magna nec malesuada.',
        },
        {
            id: 5,
            title: 'Breaking News',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 25, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim lobortis, feugiat massa eget, placerat turpis.',
        },
        {
            id: 6,
            title: 'Latest Update',
            imageUrl: 'https://via.placeholder.com/100',
            date: 'March 24, 2024',
            description: 'Praesent et metus vel sem vehicula efficitur. Phasellus dignissim posuere magna nec malesuada.',
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Latest News</Text>
            {newsData.map((news) => (
                <View key={news.id} style={styles.newsContainer}>
                    <Image source={{ uri: news.imageUrl }} style={styles.newsImage} />
                    <View style={styles.newsDetails}>
                        <Text style={styles.newsTitle}>{news.title}</Text>
                        <Text style={styles.newsDate}>{news.date}</Text>
                        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.newsDescription}>{news.description}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    newsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 120,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
    },
    newsImage: {
        width: 120,
        height: '100%',
    },
    newsDetails: {
        flex: 1,
        padding: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newsDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    newsDescription: {
        fontSize: 16,
    },
});

export default HomeScreen;
