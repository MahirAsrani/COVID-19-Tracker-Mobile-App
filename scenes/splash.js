import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native';

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
      alignContent: 'center',
      padding: 0,
      margin: 0
    },
    img : {
        width: 350, 
        height: 350,
        top: 90
    },
    txt : {
        position: 'relative',
        textAlign: 'center',
        fontSize: 25,
        width: 500,
        top: 100,
        lineHeight: 30,
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
        position: 'absolute',
        bottom: 100,
    }
});
      
