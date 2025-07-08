import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    Header,
} from 'react-native/Libraries/NewAppScreen';

import RazorpayCheckout from 'react-native-razorpay';


export default function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Button
                        title={'Pay with Razorpay'}
                        onPress={() => {
                            var options = {
                                description: 'Credits towards consultation',
                                image: 'https://cdn-icons-png.flaticon.com/512/1019/1019607.png',
                                currency: 'INR',
                                key: 'rzp_test_6pwO2qRP7wivv5', // Your api key
                                amount: '10',
                                name: 'Payer name',
                                prefill: {
                                    email: 'payer@razorpay.com',
                                    contact: '9191919191',
                                    name: 'Razorpay Software',
                                },
                                theme: { color: '#F37254' },
                            };
                            RazorpayCheckout.open(options)
                                .then((data: any) => {
                                    // handle success
                                    alert(`Success: ${data.razorpay_payment_id}`);
                                })
                                .catch((error: any) => {
                                    // handle failure
                                    alert(`Error: ${error.code} | ${error.description}`);
                                });
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};