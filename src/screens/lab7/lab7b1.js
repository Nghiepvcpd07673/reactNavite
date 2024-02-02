import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeLab6Screen from '../lab6/HomeLab6';
import Article from '../lab6/Article';
import SettingLab6 from '../lab6/setting';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();



const MyLab7b1 = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#E66340',
                    inactiveTintColor: 'gray',
                    tabBarActiveBackgroundColor:'#E66340',
                    tabBarStyle:{
                        backgroundColor:'#E66340'
                    }
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomeLab6Screen}
                    options={{

                        tabBarLabel: 'Home', // Tiêu đề của tab
                        
                        tabBarLabelStyle: {
                            fontSize: 17,
                            fontWeight: 'bold'
                        },
                        tabBarIcon: ({ color, size = 30 }) => (
                            <FontAwesome name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Article'
                    component={Article}
                    options={{
                        tabBarLabel: 'Article',
                        
                        tabBarLabelStyle: {
                            fontSize: 17,
                            fontWeight: 'bold'
                        },
                        tabBarIcon: ({ color, size = 20 }) => (
                            <FontAwesome name="newspaper-o" color={color} size={size} />
                        )

                    }}
                />
                <Tab.Screen
                    name='Chat'
                    component={SettingLab6}
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarLabelStyle: {
                            fontSize: 17,
                            fontWeight: 'bold'
                        },
                       
                        tabBarIcon: ({ color, size = 20 }) => (
                            <FontAwesome name="comment" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen
                    name='Setting'
                    component={SettingLab6}
                    options={{
                        tabBarLabel: 'Seting',
                        tabBarLabelStyle: {
                            fontSize: 17,
                            fontWeight: 'bold'
                        },
                      
                        tabBarIcon: ({ color, size = 20 }) => (
                            <FontAwesome name="cogs" color={color} size={size} />
                        )

                    }} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default MyLab7b1

const styles = StyleSheet.create({})