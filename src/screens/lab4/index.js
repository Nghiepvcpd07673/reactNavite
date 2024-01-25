import React from 'react';
import { Text,View,FlatList, Image, StyleSheet, ImageBackground } from 'react-native';

const DATA =[
  {
    id: '1',
    title: 'Data Structures',
    imageSource: require('../lab4/image/avta1.png'),
  },
  {
    id: '2',
    title: 'Java',
    imageSource: require('../lab4/image/avta2.png'),
  },
  {
    id: '3',
    title: 'Python',
    imageSource:require('../lab4/image/avta3.png'),
  },
  {
    id: '4',
    title: 'C++',
    imageSource: require('../lab4/image/avta4.png'),
  },
  {
    id: '5',
    title: 'Web',
    imageSource: require('../lab4/image/avta5.png'),
  },
  {
    id: '6',
    title: 'Kotlin',
    imageSource: require('../lab4/image/avta6.png'),
  },
  
];
const Item = ({title, imageSource}) => {
  return (
    <View style={styles.item}>
      <ImageBackground source={imageSource} style={styles.avatar}> </ImageBackground>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const renderItem =({item}) =>(
  <Item imageSource={item.imageSource} title={item.title}/>
);
const ListCourse = () => {
  return(
    <View style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  );
};
export default React.memo(ListCourse);
export const styles = StyleSheet.create({
    container: {
        maginTop: 30,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f5f520',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    avatar: {
        with: 50,
        height: 50,
        borderRadius: 50,
    },
});