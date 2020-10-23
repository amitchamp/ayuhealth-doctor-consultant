import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Screens
import HomeScreen from './HomeScreen';

const OTPScreen = (props) => {
  const navigation = useNavigation();

  const [otp, setOtp] = useState([]);
  const [error, setError] = useState(false);
  let firstTextInput = React.createRef();
  let secondTextInput = React.createRef();
  let thirdTextInput = React.createRef();
  let fourthTextInput = React.createRef();

  const _setOTP = (value = null, postion = -1) => {

    if (postion !== -1) {
      let otpNumber = [...otp];
      otpNumber[postion] = value === null ? '' :  value

      setOtp([...otpNumber]);

      if (value === "" || value === null) {
        return;
      }
      switch (postion) {
        case 0:
          secondTextInput.focus();
          break;

        case 1:
          thirdTextInput.focus();
          break;

        case 2:
          fourthTextInput.focus();
          break;

        default:
          break;
      }

      setError(false);
    }
  }

  const _onSubmitOTP = () => {
    let otpValue = otp.join("");

    if (otpValue !== "0123") {
      setError(true);
    } else if (otpValue === "0123") {
      props.handleModel(false);
      navigation.navigate('Home');
    }
  }

  const _showNumber = (isSecure = true) => {
    return `********${props.phoneNumber % 100}`;
  }

  return (
    <View>
      <View style={{ height: 100, backgroundColor: 'rgba(69, 194, 217, 0.8)', paddingHorizontal: 15, paddingTop: 50, top: 0, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Verify phone number</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
          props.handleModel(false);
        }}>
          <Text style={{ fontSize: 16, color: 'white' }}>Close</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 20, paddingTop: 40 }}>
        <Text style={styles.headline}>Enter OTP code</Text>
        <Text style={styles.subHeadline}>Please verify your number with 4 digit OTP code sent to {_showNumber()} </Text>

        <View style={{flex: 2, flexDirection: 'row'}}>
          <TextInput
            style={[styles.textInput, error ? styles.errorBorder : styles.textInputBorder]}
            underlineColorAndroid="transparent"
            onChangeText={(text) => _setOTP(text, 0)}
            ref={(input) => {firstTextInput = input}}
            value={otp[0] ? otp[0] : ''}
          />
          <TextInput
            style={[styles.textInput, error ? styles.errorBorder : styles.textInputBorder]}
            underlineColorAndroid="transparent"
            onChangeText={(text) => _setOTP(text, 1)}
            ref={(input) => { secondTextInput = input}}
            value={otp[1] ? otp[1] : ''}
          />
          <TextInput
            style={[styles.textInput, error ? styles.errorBorder : styles.textInputBorder]}
            underlineColorAndroid="transparent"
            onChangeText={(text) => _setOTP(text, 2)}
            ref={(input) => { thirdTextInput = input }}
            value={otp[2] ? otp[2] : ''}
          />
          <TextInput
            style={[styles.textInput, error ? styles.errorBorder : styles.textInputBorder]}
            underlineColorAndroid="transparent"
            onChangeText={(text) => _setOTP(text, 3)}
            ref={(input) => { fourthTextInput = input }}
            value={otp[3] ? otp[3] : ''}
          />
        </View>

        {
          error ? (
            <View style={{ top: 65, marginBottom: 15 }}>
              <Text style={{ color: 'red'}}>Invalid OTP. Please retry</Text>
            </View>
          ) : null
        }

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline', top: 65}}>
          <Text>Didn't receive code?</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {
            console.log("Resend OTP")
          }}>
            <Text style={{ fontSize: 16, color: 'rgba(235, 180, 96, 1)', fontWeight: 'bold' }}> Resend</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: 110 }}>
          <TouchableOpacity
            style={[styles.verifyBtn, otp.length === 4 ? styles.noOpacity : styles.defaultOpacity ]}
            onPress={_onSubmitOTP} disabled={otp.length === 4 ? false : true}
          >
            <Text style={[styles.verifyText, otp.length === 4 ? styles.noOpacity : styles.defaultOpacity ]}>
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headline: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'left',
    marginBottom: 10,
  },
  subHeadline: {
    fontSize: 15,
    marginBottom: 40,
  },
  defaultOpacity: {
    opacity: 0.7
  },
  noOpacity: {
    opacity: 1
  },
  verifyBtn: {
    height: 60,
    backgroundColor: 'rgb(235, 180, 96)',
    borderRadius: 5,
    padding: 17,
    width: 145,
  },
  verifyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    // borderColor: 'red',
    borderWidth: 1.5,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
    flex: 2,
    textAlign: 'center',
    fontSize: 25
  },
  textInputBorder: {
    borderColor: 'rgba(69, 194, 217, 0.8)',
  },
  errorBorder: {
    borderColor: 'red'
  }
});

export default OTPScreen;
