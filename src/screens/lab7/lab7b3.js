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
const TopTabs = createMaterialTopTabNavigator();
const Trangchu = () => {
    <View>
        <Text>Trang chủ </Text>
    </View>
}
const NguoiDung = () => {
    <View>
        <Text>Người Dùng </Text>
    </View>

}
const CaiDat = () => {
    <View>
        <Text> Cài Đặt </Text>
    </View>
}
const Shop = () => {
    <View>
        <Text>Shop </Text>
    </View>
}

const BottomTabNavigation = () => {
    <Tab.Navigator>
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
}

const TopTabNavigation = () => {
    <TopTabs.Navigator
        tabBarOptions={{
            activeTintColor: '#E66340',
            inactiveTintColor: 'gray',

            tabBarStyle: {
                backgroundColor: '#E66340', // Thay đổi màu nền của thanh tab
            },

        }}>
        <TopTabs.Screen
            name='TrangChu'
            component={Trangchu}
            options={{

                tabBarLabel: 'Trang chủ', // Tiêu đề của tab
                tabBarIcon: ({ color, size = 30 }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }}
        />
        <TopTabs.Screen
            name='NguoiDung'
            component={NguoiDung}
            options={{
                tabBarLabel: 'Người Dùng',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="newspaper-o" color={color} size={size} />
                )

            }}
        />
        <TopTabs.Screen
            name='CaiDat'
            component={CaiDat}
            options={{
                tabBarLabel: 'Cài Đặt',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="comment" color={color} size={size} />
                )
            }} />
        <TopTabs.Screen
            name='Shop'
            component={Shop}
            options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({ color, size = 20 }) => (
                    <FontAwesome name="cogs" color={color} size={size} />
                )

            }} />
    </TopTabs.Navigator>
}
const MyLab7b3 = () => {

    <NavigationContainer>
        <TopTabNavigation />
        <BottomTabNavigation />
    </NavigationContainer>

}

export default MyLab7b3

const styles = StyleSheet.create({})