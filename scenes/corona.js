import React from 'react'
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class corona extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            country : '',
            deaths : '',
            countryflag : '',
            country : '',
            cases : '',
            active : '',
            recovered : '',
            todayCases : '',
            todayDeaths : ''
        }
        
    }

    setCountry(text) {
        this.setState({
            value : text
        })
    }

    componentDidMount() {
        this.COVID_19()
    }
     
    COVID_19 = (value) => {
        axios.get(`https://corona.lmao.ninja/countries/${value}`)
              .then((response) => {
                console.log(response.data);
                this.setState({ 
                  deaths : response.data.deaths,
                  countryflag : response.data.countryInfo.flag,
                  country : response.data.country,
                  cases : response.data.cases,
                  active : response.data.active,
                  recovered : response.data.recovered,
                  todayCases : response.data.todayCases,
                  todayDeaths : response.data.todayDeaths
                })
              })
              .catch((error) => {
                console.log(error);
              })
            }
            render() {
                return (

                <View style={{flex:1, backgroundColor: '#3B318E'}}>
                    <View style={styles.top}>
                        <View style={{marginTop:30, flexDirection: 'row' }}>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.country}</Text>
                                <Text style={styles.boxtext}>Country</Text>
                            </View>
                            
                            <View style={styles.box}>
                            <ImageBackground style={styles.img} source={{uri: this.state.countryflag}}>
                            </ImageBackground>
                                <Text style={styles.boxtext}>Flag </Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.cases}</Text>
                                <Text style={styles.boxtext}>Cases</Text>
                            </View>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.active}</Text>
                                <Text style={styles.boxtext}>Active</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.deaths}</Text>
                                <Text style={styles.boxtext}>Deaths</Text>
                            </View>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.recovered}</Text>
                                <Text style={styles.boxtext}>Recovered</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.todayDeaths}</Text>
                                <Text style={styles.boxtext}>Today Deaths</Text>
                            </View>
                            
                            <View style={styles.box}>
                                <Text style={styles.boxtext_res}>{this.state.todayCases}</Text>
                                <Text style={styles.boxtext}>Today Cases</Text>
                            </View>

                        </View>
                    
                    </View>
                    <View style={styles.bottom}>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text) => this.setCountry(text)}
                            placeholder="Country eg. India"
                            placeholderTextColor="#ebe6e6" 
                            />
                        <TouchableOpacity style={styles.btn} onPress={() => this.COVID_19(this.state.value)}>
                            <Text style={{color: "white", fontSize: 25}}>Fetch Data</Text>
                        </TouchableOpacity>

                        <Text style={styles.made}>Made with ❤ by Mahir Asrani</Text>
                    </View>
                </View>
                
        )
    }
}

const styles = StyleSheet.create({
    top: {
      flex: 2,
      backgroundColor: '#3B318E',
      alignSelf: 'center',
    },
    bottom: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius:  30,
      borderTopRightRadius: 30,
      alignItems: 'center',
    },
    btn: {
        backgroundColor: '#39375b',
        padding: 15,
        paddingHorizontal: 100,
        borderRadius: 10,
    },
    input: {
        width: 320,
        marginVertical: 30,
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 25,
        borderStyle: 'solid',
        borderColor: '#39375b',
        // borderRadius: 10,
        // borderWidth: 1,
        borderBottomWidth: 1
    },
    box: {
        flexDirection: 'column',
        backgroundColor: '#E0E2EB',
        width: 160,
        height: 100,
        margin: 10, 
        marginHorizontal: 15, 
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxtext: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2d132c'
    },
    boxtext_res: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#464159'
    },
    img: {
        alignSelf: 'center',
        justifyContent: 'center',
        width:100, 
        height:50,
    },
    made: {
        fontWeight: 'bold',
        top: 50,
    },
});