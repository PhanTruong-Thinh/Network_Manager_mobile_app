import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
// import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Nav/Home';
import Account from './Nav/Account';
import Signal from './Nav/Signal';
// import HomeScreen from './Nav/Home'
const Tab = createBottomTabNavigator();

const App = () => {
  const [itemsNav, setItemNav] = useState(null);
  const onPressNav = buttonName => {
    setItemNav(buttonName);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn == 'Home') {
              iconName = 'cellphone-nfc';
            } else if (rn == 'Signal') {
              iconName = 'signal-cellular-outline';
            } else if (rn == 'Account') {
              iconName = 'account-circle-outline';
            }
            return (
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              </TouchableOpacity>
            );
          },

          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white', // Màu sắc của biểu tượng khi tab được chọn
          tabBarInactiveTintColor: 'white', // Màu sắc của biểu tượng khi tab không được chọn
          tabBarStyle: {
            backgroundColor: '#003B64', // Màu sắc nền của thanh tab
          }
        })}>
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Signal'} component={Signal} />
        <Tab.Screen name={'Account'} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
