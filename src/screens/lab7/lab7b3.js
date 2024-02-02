import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeLab6Screen from '../lab6/HomeLab6';
import Article from '../lab6/Article';
import SettingLab6 from '../lab6/setting';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export const Top = () => {
    <TopTab.Navigator
        tabBarOptions={{
            activeTintColor: '#E66340',
            inactiveTintColor: 'gray',

            tabBarStyle: {
                backgroundColor: '#E66340', // Thay đổi màu nền của thanh tab
            },

        }}>
        <TopTab.Screen
            name='Home'
            component={HomeLab6Screen}
            options={{

                tabBarLabel: 'Home', // Tiêu đề của tab
                tabBarIcon: ({ color, size = 30 }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }}
        />
        <TopTab.Screen
            name='Article'
            component={Article}
            options={{
                tabBarLabel: 'Article',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="newspaper-o" color={color} size={size} />
                )

            }}
        />
        <TopTab.Screen
            name='Chat'
            component={SettingLab6}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="comment" color={color} size={size} />
                )
            }} />
        <TopTab.Screen
            name='Setting'
            component={SettingLab6}
            options={{
                tabBarLabel: 'Seting',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="cogs" color={color} size={size} />
                )

            }} />
    </TopTab.Navigator>
}
export const Bottom = () => {
    <TabBottom.Navigator
        screenOptions={{
            headerShown: false,

            tabBarInactiveTintColor: 'blue',
            tabBarActiveBackgroundColor: '#E66340',
            tabBarActiveTintColor: 'white',

        }}
    >
        <TabBottom.Screen
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
        <TabBottom.Screen
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
        <TabBottom.Screen
            name='Chat'
            component={SettingLab6}
            options={{
                tabBarBadge: 10,
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

        <TabBottom.Screen
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
    </TabBottom.Navigator>
}
const MyLab7b3 = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='TopTab' component={Top}  />
                <Stack.Screen name='BottomTab' component={Bottom}  />
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default MyLab7b3

const styles = StyleSheet.create({})