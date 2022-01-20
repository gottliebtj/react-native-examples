import 'dotenv/config';

export default {
  expo: {
    name: 'expo-firebase-auth-example',
    slug: 'expo-firebase-auth-example',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
  apiKey: "AIzaSyDRfogi1PBhOFLVN4XHB_dhxuF51XGhip8",
  authDomain: "pusheez-362b4.firebaseapp.com",
  projectId: "pusheez-362b4",
  storageBucket: "pusheez-362b4.appspot.com",
  messagingSenderId: "850070414754",
  appId: "1:850070414754:web:840ad4602404cdb752fefb"
}
  }
};
