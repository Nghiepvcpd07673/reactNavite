import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const HomeLab6Screen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const goToArticle = () => {
        
        // Kiểm tra xem trường text có giá trị không
        if (!text.trim()) {
            console.error('Vui lòng không được bỏ trống');
        } else {
            // Chuyển sang trang Article và truyền giá trị từ TextInput
            navigation.navigate('Article', { enteredText: text });
        }
    };

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Chào bạn, đây là màn hình chính
            </Text>
            <TextInput
            id='textName'
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Nhập tên'
            />
            <TouchableOpacity style={styles.button} onPress={goToArticle}>

                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17
                }}>Đi tới màn hình chi tiết</Text>

            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#0505FF',
        fontFamily: 'MuseoModerno-Bold',
        fontSize: 20
    },
    input: {

        width: '80%',
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#899B2C',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.5,
        shadowRadius: 10,
        elevation: 5,
    }
});

export default HomeLab6Screen;