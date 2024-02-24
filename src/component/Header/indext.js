import React, { useState } from "react"
import { Image, Pressable, Text, View, Inpu } from "react-native";
import style from "./style";
import Input from "../../screens/input";

const Header = ({ tile, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }
    return (
        <View style={style.mainContainer}>
            <View style={style.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={style.icon} source={require('../../../assets/back.jpg')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable>
                        <Image style={style.icon} source={require('../../../assets/search.png')} />
                    </Pressable>
                ) : <View style={style.icon}>

                </View>
                }
                <Text style={style.tile}>
                    {tile}
                </Text>
                {
                    showLogout ? (
                        <Pressable hitSlop={20} onPress={onLogout}>
                            <Image style={style.icon} source={require('../../../assets/logout.png')} />
                        </Pressable>
                    ) : <View style={style.space} />
                }
            </View>
            {showSearchInput ? (
                <Input onChangeText ={onSearch} value={keyword} placeholder="Type your keyword..."/>
            ): null}
        </View>
    )
}
export default React.memo(Header);