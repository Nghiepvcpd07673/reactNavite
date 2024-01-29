import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'



const MyLab5B1 = () => {
    return (
        <View>
            <Text style={styles.Text}>React là một thư viện JavaScript phổ biến cho
                việc xây dựng giao diện người dùng động và hiệu quả.
                Phát triển bởi Facebook, React sử dụng cú pháp JSX để tạo
                các thành phần tái sử dụng và sử dụng Virtual DOM để cải thiện
                hiệu suất. Được ưa chuộng với cộng đồng lớn, React thúc đẩy mô
                hình phát triển gồm các thành phần, giúp tạo ứng dụng web linh hoạt,
                dễ duy trì và có trải nghiệm người dùng tốt.
            </Text>
            <Text style={{
                fontFamily: "RobotoMono-SemiBold",
                margin: 10,
                fontSize:15,
                color:'black'
            }}>
                React là một thư viện JavaScript phổ biến cho
                việc xây dựng giao diện người dùng động và hiệu quả.
                Phát triển bởi Facebook, React sử dụng cú pháp JSX để tạo
                các thành phần tái sử dụng và sử dụng Virtual DOM để cải thiện
                hiệu suất. Được ưa chuộng với cộng đồng lớn, React thúc đẩy mô
                hình phát triển gồm các thành phần, giúp tạo ứng dụng web linh hoạt,
                dễ duy trì và có trải nghiệm người dùng tốt.
            </Text>
        </View>
    )
}

export default MyLab5B1
const styles = StyleSheet.create({
    Text: {
        fontFamily: "DancingScript-Bold",
        margin: 10,
        color: 'black',
        fontSize: 25
    }
})