import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/globalStyles';

// You can add validation here if you like
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const sendResetPasswordLink = async () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      await axios.post('YOUR_API_ENDPOINT/forgot-password', { email });
      Alert.alert("Success", "A link to reset your password has been sent to your email.");
      // Redirect back to the login screen
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || 'An error occurred while attempting to reset password.');
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <TextInput
          style={globalStyles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={globalStyles.button} onPress={sendResetPasswordLink}>
          <Text style={globalStyles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Add styles for ForgotPassword if needed
// const styles = StyleSheet.create({ ... });

export default ForgotPassword;
