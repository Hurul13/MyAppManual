import React, { useEffect, useState } from 'react';
import { View, Text, ToastAndroid, RefreshControl, ScrollView, ActivityIndicator } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics'
// import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { WARNA_BLACK, WARNA_UTAMA } from '../../utils/constant';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BiometrikPopup = ({ navigation, route }) => {

    // const { redirectUrl } = route.params;

    // untuk refresh
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);

        // Simulate an async action
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };


    // untuk biometrik
    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

    rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
        .then((resultObject) => {
            const { success } = resultObject

            if (success) {
                console.log('successful biometrics provided')
            } else {
                console.log('user cancelled biometric prompt')
            }
        })
        .catch((e) => {
            console.log('biometrics failed: ' + e)
        })


    // url midtrans
    const [redirectUrl, setRedirectUrl] = useState('');

    useEffect(() => {
        getRedirectUrl();
    }, []);

    const getRedirectUrl = async () => {
        try {
            const redirectUrlValue = await AsyncStorage.getItem('redirect_url');
            setRedirectUrl(redirectUrlValue);
        } catch (error) {
            console.log(error);
        }
    };

    if (redirectUrl) {
        return <WebView source={{ uri: redirectUrl }} />;
    }

    // return <View style={{ flex: 1 }} />;

}

export default BiometrikPopup;
