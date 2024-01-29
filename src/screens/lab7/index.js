import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeLab6Screen from '../lab6/HomeLab6';
import Article from '../lab6/Article';
import SettingLab6 from '../lab6/setting';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

{/**const BottomTabs = ()=>{
  return(
    
  )
} */}

const MyLab7 = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'

          component={HomeLab6Screen}
        />
        <Tab.Screen
          name='Article' component={Article} />
        <Tab.Screen
          name='Chat' component={SettingLab6} />
        <Tab.Screen
          name='Setting' component={SettingLab6} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MyLab7

const styles = StyleSheet.create({})