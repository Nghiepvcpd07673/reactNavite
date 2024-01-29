import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import HomeLab6Screen from './HomeLab6';
import SettingLab6 from './setting'
import Article from './Article'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const MyLab6 = () => {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const HomeStack = () => {
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeLab6Screen} />
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Chat" component={SettingLab6} />
            <Stack.Screen name="Setting" component={SettingLab6} />
        </Stack.Navigator>
    }


    return (
        <NavigationContainer>

            <Drawer.Navigator
                initialRouteName="HomeLab6"
                drawerContent={
                    (props) => {
                        return (
                            <SafeAreaView>
                                <View>
                                    
                                    <ImageBackground 
                                    source={require('../lab6/image/backgroud_Drawer.jpg')}
                                    style={{
                                        height: 200,
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 2,
                                        

                                    }}
                                    >
                                        <View
                                        >
                                            <Image source={
                                                require('../lab6/image/people.jpg')}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: 50
                                                }}
                                            />
                                        </View>
                                        <View>
                                            <Text style={{margin:10,fontSize:20,fontWeight:'bold',color:'black'}}>Võ Công Nghiệp</Text>
                                           
                                        </View>
                                    </ImageBackground>


                                </View>
                                <DrawerItemList {...props} />
                            </SafeAreaView>
                        )
                    }
                }
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeLab6Screen}
                    options={{
                        drawerLabel: 'Home',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome name="home" color={color} size={size} />
                        ),
                        headerStyle:{
                            backgroundColor:'#f4511e'
                        },
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerTintColor:"#fff",

                        
                        drawerActiveTintColor:'#f4511e',

                    }}
                />
                <Drawer.Screen
                    name="Article"
                    component={Article}
                    options={{
                        drawerLabel: 'Article',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome name="newspaper-o" color={color} size={size} />
                        ),
                        headerStyle:{
                            backgroundColor:'#f4511e'
                        },
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerTintColor:"#fff",

                        
                        drawerActiveTintColor:'#f4511e',
                    }}
                />
                <Drawer.Screen
                    name="Chat"
                    component={SettingLab6}
                    options={{
                        drawerLabel: 'Chat',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome name="comment" color={color} size={size} />
                        ),
                        headerStyle:{
                            backgroundColor:'#f4511e'
                        },
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerTintColor:"#fff",

                        
                        drawerActiveTintColor:'#f4511e',
                    }}
                />
                <Drawer.Screen
                    name="Setting"
                    component={SettingLab6}
                    options={{
                        drawerLabel: 'Setting',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome name="cogs" color={color} size={size} />
                        ), headerStyle:{
                            backgroundColor:'#f4511e'
                        },
                        headerTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerTintColor:"#fff",

                        
                        drawerActiveTintColor:'#f4511e',
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MyLab6

const styles = StyleSheet.create({})