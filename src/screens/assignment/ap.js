import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
const buttonTabs = createBottomTabNavigator();
const TrangChu = () =>{

}
const Home = () => {
  return (
    <NavigationContainer>
      <buttonTabs.Navigator>
        <buttonTabs.Screen name='Home'
        component={TrangChu}
        options={
          {title:'Home'}
        }/>
        <buttonTabs.Screen name='SanPham'
        component={TrangChu}
        options={
          {title:'Sản Phẩm'}
        }/>
        <buttonTabs.Screen name='caiDat'
        component={TrangChu}
        options={
          {title:'Cài  Đặt'}
        }/>

      </buttonTabs.Navigator>
    </NavigationContainer>
  )
}

export default Home

