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
const Trangchu =()=>{
  <View>
    <Text>Trang chủ </Text>
  </View>
}
const NguoiDung = ()=>{
  <View>
    <Text>Người Dùng </Text>
  </View>

}
const CaiDat = ()=>{
  <View>
    <Text> Cài Đặt </Text>
  </View>
}
const Shop = () =>{
  <View>
    <Text>Shop </Text>
  </View>
}
const MyHomel7= () => {

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
          name='TrangChu'
          component={Trangchu}
          options={{
            
            tabBarLabel: 'Trang chủ', // Tiêu đề của tab
            tabBarIcon: ({ color, size=30 }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <TopTabs.Screen
          name='NguoiDung'
          component={NguoiDung}
          options={{
           tabBarLabel:'Người Dùng',
           tabBarIcon:({color,size=20}) =>(
            <FontAwesome name="newspaper-o" color={color} size={size} />
           )
           
          }}
        />
        <TopTabs.Screen
          name='CaiDat'
          component={CaiDat}
          options={{
            tabBarLabel:'Cài Đặt',
            tabBarIcon:({color,size=20})=>(
              <FontAwesome name="comment" color={color} size={size} />
            )
          }} />
        <TopTabs.Screen
          name='Shop'
           component={Shop} 
           options={{
            tabBarLabel:'Shop',
            tabBarIcon:({color,size=20}) =>(
             <FontAwesome name="cogs" color={color} size={size} />
            )
            
           }}/>
      </TopTabs.Navigator>

    </NavigationContainer>
  )
}

export default MyHomel7

const styles = StyleSheet.create({})