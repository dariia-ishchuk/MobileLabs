import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./ProfileScreen";

const HomeScreen = () => (
    <View style={styles.screen}>
        <Text>Home Screen</Text>
    </View>
);

const GalleryScreen = () => (
    <View style={styles.screen}>
        <Text>Gallery Screen</Text>
    </View>
);

const HomeIcon = () => (
    <Image source={require('../assets/home.png')} style={styles.tabIcon} />
);

const GalleryIcon = () => (
    <Image source={require('../assets/gallery.png')} style={styles.tabIcon} />
);

const ProfileIcon = () => (
    <Image source={require('../assets/profile.png')} style={styles.tabIcon} />
);

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: HomeIcon,
                    }}
                />
                <Tab.Screen
                    name="Gallery"
                    component={GalleryScreen}
                    options={{
                        tabBarIcon: GalleryIcon,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ProfileIcon,
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 20,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
});

const screenOptions = {
    tabBarStyle:{
        height: 60,
    },
    tabBarItemStyle:{
        margin: 8,
    }
};

export default Navigation;
