import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView, Modal, TextInput } from "react-native"

import { styles } from './styles'



const ListUser = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [openDailog, setOpenDailog] = useState(false);
    const [selecttedUser, setSelectedUser] = useState(undefined);
    const getAPI = async () => {
        const url = 'https://65d402ff522627d50109bfe2.mockapi.io/user';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    };
    const handleDelete = async id => {
        const url = 'https://65d402ff522627d50109bfe2.mockapi.io/user';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete'
        });
        result = await result.json();
        if (result) {
            getAPI();

        }
    };
    const handleUpdate = data => {
        setOpenDailog(true);
        setSelectedUser(data);
        console.log("update");
    };
    React.useEffect(() => {
        const focuHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focuHandler;
    }, [navigation]);
    return (
        <ScrollView>
            <TouchableOpacity style={styles.buttonNew}
                onPress={() => navigation.navigate('AddUser')}>
                <Text style={styles.buttonNew}> Add New</Text>
            </TouchableOpacity>
            {
                data.length ? data.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.birthday}>{item.birthday}</Text>

                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}
                                    onPress={() => handleUpdate(item)}>update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}
                                    onPress={() => handleDelete(item.id)}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )) : null
            }
            <Modal visible={openDailog} transparent={true}>
                <UpdateModel
                    setOpenDailog={setOpenDailog}
                    selecttedUser={selecttedUser}
                    getAPI={getAPI}>

                </UpdateModel>
            </Modal>

        </ScrollView>
    )

}
// update
const UpdateModel = props => {
    const [name, setName] = useState(undefined);
    const [birthday, setbirthday] = useState(undefined);
    useEffect(() => {
        if (props.selecttedUser) {
            setName(props.selecttedUser.name);
            setbirthday(props.selecttedUser.birthday);
        }
    }, [props.selecttedUser]);
    const updateUser = async () => {
        const url = 'https://65d402ff522627d50109bfe2.mockapi.io/user';
        let result = await fetch(`${url}/${id}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthday }),
        });
        result = await result.json();
        if (result) {
            props.getAPIData();
            props.setOpenDailog(false);
        }
    };
    return (
        <View style={styles.modelContent}>
            <TextInput style={styles.input}
                placeholder='Enter name'
                value={name}
                onChangeText={text => (setName = { text })}>
            </TextInput>
            <TextInput style={styles.input}
                placeholder='Enter birthday'
                value={birthday}
                onChangeText={text => (setbirthday = { text })}>
            </TextInput>
            <View style ={styles.buttonGroup}>
                <TouchableOpacity style = {styles.button} onPress={updateUser}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={updateUser}>
                    <Text style={styles.buttonText}
                    onPress={()=> props.setOpenDailog(false)}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default ListUser;