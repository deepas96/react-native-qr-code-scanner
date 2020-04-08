/*==========================================================================================*/
// Landing - The first screen of the app       
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, Alert } from 'react-native'

//Class constants      
const { width, height } = Dimensions.get('window');

console.disableYellowBox = true

export default class Home extends Component {
    
    // Constructor of class
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //componentDidMount(): Component life cycle method
    componentDidMount() {
    }

    refresh = () => {
        this.forceUpdate()
    }

    goToScanner = () => {
        Alert.alert(
            'Alert',
            'Do you want to scan QR Code',
            [
              {text: 'Yes', onPress: () => this.props.navigation.navigate('ScanCode', {onGoBack: () => this.refresh()})},
              {text: 'No', onPress: () => console.log('No'), style: 'cancel'},
            ],
            { cancelable: false }
          )
    }

    
    //render(): Method to render components
    render() {
        return (
            <View style={{ flex: 1, justifyContent:'center' }}>
                <Text style = {{textAlign:'center',color:'blue', fontSize:24 }} onPress={() => this.goToScanner()}> QR Code Scanner</Text>
                <Text style = {{textAlign:'center', margin:10, fontSize:18, }}>{global.code ? "Your scanned code is => '"+global.code + "'" : ''}</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})