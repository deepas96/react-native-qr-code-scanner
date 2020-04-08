/*==========================================================================================*/
// Login - User enters mobile number and hit the API
//       - Our API checks whether the mobile number is registered
//       - If already registered redirect to password screen
//       - If not registered redirect to OTP screen
/*==========================================================================================*/

import React, { Component } from 'react';
import {
    Dimensions,
    SafeAreaView,
    Text,
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera } from 'react-native-camera'

const { width, height } = Dimensions.get('window');

console.disableYellowBox = true

export default class ScanCode extends Component {
    /*==========================================================================================*/
    // Component life cycle - constructor
    /*==========================================================================================*/
    constructor(props) {
        super(props);
        this.state = {
            isScan : false
        }
    }

    openScanner = () => {
        this.setState({isScan : true})
        this.forceUpdate()
    }

    onSuccess = (e) => {
        console.log("qr code",e)
        global.code = e.data
        // console.log("params====",this.props.route.params.onGoBack())
        this.props.route.params.onGoBack()
        this.props.navigation.goBack()
        }
     
    /*==========================================================================================*/
    // Component life cycle - render
    /*==========================================================================================*/
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <QRCodeScanner
                    flashMode={Camera.Constants.FlashMode.off}  
                    onRead={(e) => this.onSuccess(e)}    
                    topContent={
                        <Text style={styles.centerText}>
                        </Text>
                    }
                />
            </SafeAreaView>
        )
    };
}

const styles = {
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    
}