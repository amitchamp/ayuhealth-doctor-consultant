import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Button } from 'react-native';

import { faPhoneAlt, faChevronCircleRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// Screens
import OTPScreen from './otp'

export default function App() {
  const [phone, setPhone] = useState('');
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const buttonPress = () => {

    if (phone.length !== 10) {
      setShowError(true);
    } else {
      setShowModal(true);
    }
  }

  const _onChangePhoneNumber = (text = '') => {
    setPhone(text);
    if (text !== "") {
      setShowError(false);
    }
  }

  const _handleModel = (isShow = false) => {
    setShowModal(isShow);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Welcome to Ayu.Health</Text>
      <Text style={styles.subHeadline}>Enter your details below to access your medical reports and hospital</Text>

      <View>
        <View style={[styles.sectionStyle, showError ? styles.inputErrorBorderColor : styles.inputBorderColor]}>
          <FontAwesomeIcon icon={faPhoneAlt} color={showError ? "red" : "rgba(176, 176, 176, 1)"} size={20} style={{ padding: 10, marginLeft: 10, marginRight: 10 }} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Mobile Number"
            underlineColorAndroid="transparent"
            onChangeText={(text) => _onChangePhoneNumber(text)}
            value={phone}
          />
          <TouchableOpacity activeOpacity={0.5} onPress={buttonPress}>
            <FontAwesomeIcon icon={faChevronCircleRight} color="rgba(69, 194, 217, 0.8)" size={30} style={{ padding: 10, marginLeft: 10, marginRight: 10, }} />
          </TouchableOpacity>
        </View>
        { showError && <Text style={styles.inputError}>Please enter 10 digit number</Text> }
        <Text style={styles.inputDescription}>OTP code will be sent to this number</Text>
      </View>

      <Modal
        animationType={'slide'}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <OTPScreen handleModel={_handleModel} phoneNumber={phone} />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
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
  textInput: {
    flex: 1,
    height: 60,
    fontSize: 18
  },
  inputDescription: {
    paddingTop: 5,
    fontSize: 13,
    color: 'rgba(176, 176, 176, 1)'
  },
  inputError: {
    paddingTop: 5,
    fontSize: 13,
    color: 'red'
  },
  inputBorderColor: {
    borderColor: 'rgba(69, 194, 217, 0.8)',
  },
  inputErrorBorderColor: {
    borderColor: 'red'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    height: 60,
    borderRadius: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    padding: 100,
  },
});
