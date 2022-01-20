
import Routes from './navigation/index';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Linking  } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, useRef } from 'react';
import Constants from 'expo-constants';
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
 const [notification, setNotification] = useState(false);
 const notificationListener = useRef();
 const responseListener = useRef();

 useEffect(() => {
   registerForPushNotificationsAsync().then(token =>{
     setExpoPushToken(token);
   });

   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
     setNotification(notification);
   });

   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
     console.log(response);
     console.log("HERE TG");
     Linking.openURL('https://expo.dev');

   });

   return () => {
     Notifications.removeNotificationSubscription(notificationListener.current);
     Notifications.removeNotificationSubscription(responseListener.current);
   };
 }, []);

  return <Routes />;

}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
