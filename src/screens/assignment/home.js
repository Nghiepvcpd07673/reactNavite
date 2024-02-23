import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";


const windownWith = Dimensions.get('window').width;
const windownHeght = Dimensions.get('window').height;
const Index = () => {
    const buttonTabs = createBottomTabNavigator();
    const [timKiem, setTimKiem] = useState('');
    const TrangChu = () =>{

    }
    return (
        <View style={style.container}>
            <TextInput
                placeholder='Tìm kiếm'
                style={style.timKiem}
                value={timKiem}
            >
            </TextInput>
            <Text style={{
                height: 0.6 * windownHeght,
                borderWidth: 1,
                borderColor: 'black'
            }}></Text>
            <NavigationContainer>
                <buttonTabs.Navigator>
                    <buttonTabs.Screen name='Home'
                        component={TrangChu}
                        options={
                            { title: 'Home' }
                        } />
                    <buttonTabs.Screen name='SanPham'
                        component={TrangChu}
                        options={
                            { title: 'Sản Phẩm' }
                        } />
                    <buttonTabs.Screen name='caiDat'
                        component={TrangChu}
                        options={
                            { title: 'Cài  Đặt' }
                        } />

                </buttonTabs.Navigator>
            </NavigationContainer>
        </View>
    )
}
export default Index;
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    timKiem: {
        padding: 10,
        margin: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black'

    },
    sanPham: {
        backgroundColor: 'black',


    }
})