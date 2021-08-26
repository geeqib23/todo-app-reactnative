import React, {useEffect, useState} from 'react';
import {View, StatusBar, FlatList, Settings} from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Store, {StoreProvider} from './store/Store';
import HomeScreen from './Screens/HomeScreen';
import SettingScreen from './Screens/SettingScreen';

export default function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (data.length) {
  //     // console.log(data);
  //     async function storeData() {
  //       try {
  //         await AsyncStorage.setItem('data', JSON.stringify(data));
  //         // console.log('successfully saved');
  //       } catch (e) {
  //         alert('error saving');
  //       }
  //     }
  //     storeData();
  //   }
  // }, [data]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem('data');
  //       // jsonValue && console.log('successfully read', JSON.parse(jsonValue));
  //       jsonValue && setData(JSON.parse(jsonValue));
  //     } catch (e) {
  //       alert('error reading');
  //     }
  //   };
  //   getData();
  // }, []);

  const store = new Store();
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="black" />
        </View>
        <StoreProvider store={store}>
          {/* <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Settings" component={SettingScreen} />
          </Tabs.Navigator> */}
          <HomeScreen store={store} />
        </StoreProvider>
      </ComponentContainer>
    </NavigationContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: #121212;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
