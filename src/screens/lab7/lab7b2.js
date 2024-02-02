import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeLab6Screen from '../lab6/HomeLab6';
import Article from '../lab6/Article';
import SettingLab6 from '../lab6/setting';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const TopTabs = createMaterialTopTabNavigator();

const MyLab7b2 = () => {

  return (
    <NavigationContainer>
      <TopTabs.Navigator 
       tabBarOptions={{
        activeTintColor: '#E66340',
        inactiveTintColor: 'gray',
        
        tabBarStyle: {
          backgroundColor: '#E66340', // Thay đổi màu nền của thanh tab
        },

      }}>
      <TopTabs.Screen
          name='Home'
          component={HomeLab6Screen}
          options={{
            
            tabBarLabel: 'Home', // Tiêu đề của tab
            tabBarIcon: ({ color, size=30 }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <TopTabs.Screen
          name='Article'
          component={Article}
          options={{
           tabBarLabel:'Article',
           tabBarIcon:({color,size=20}) =>(
            <FontAwesome name="newspaper-o" color={color} size={size} />
           )
           
          }}
        />
        <TopTabs.Screen
          name='Chat'
          component={SettingLab6}
          options={{
            tabBarLabel:'Chat',
            tabBarIcon:({color,size=20})=>(
              <FontAwesome name="comment" color={color} size={size} />
            )
          }} />
        <TopTabs.Screen
          name='Setting'
           component={SettingLab6} 
           options={{
            tabBarLabel:'Seting',
            tabBarIcon:({color,size=20}) =>(
             <FontAwesome name="cogs" color={color} size={size} />
            )
            
           }}/>
      </TopTabs.Navigator>

    </NavigationContainer>
  )
}

export default MyLab7b2

const styles = StyleSheet.create({})