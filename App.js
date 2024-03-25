import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
return (
        <NavigationContainer>
            <View style={styles.container}>
                <Header
                    title="Лабораторна робота 1"
                    imageUrl={require('./assets/logo_zdtu.png')}
                />
                <Navigation />
                {/*<Text>Open up App.js to start working on your app!</Text>*/}
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
