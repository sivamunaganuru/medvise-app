import * as Google from 'expo-google-app-auth';
import firebase from './firebaseConfig';

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      behavior: 'web',
      androidClientId: 'YOUR_ANDROID_CLIENT_ID',
      iosClientId: 'YOUR_IOS_CLIENT_ID',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
      await firebase.auth().signInWithCredential(credential);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
