import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';

export default function splash({ navigation }) {
    return (
        <View style={styles.container}>
                <Image 
                source={require('../assets/corona.jpg')} 
                resizeMode="cover" style={styles.img} />
                <Text style={styles.txt}>
                    Track the current status {"\n"} 
                    of the COVID-19 and{"\n"}
                    stay up to date.</Text>
                <Text 
                style={styles.btn}
                onPress={() => navigation.navigate('Corona')}
                >Get Started</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3d4ff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    img : {
        width: 350, 
        height: 350,
    },
    txt : {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3B318E'
    },
    btn: {
        backgroundColor: '#39375b',
        color: '#fff',
        padding: 15,
        paddingHorizontal: 100,
        fontSize: 25,
        borderRadius: 30,
    }
});
      
