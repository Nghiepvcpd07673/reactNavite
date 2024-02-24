import { Text, TextInput, View } from "react-native"
import { styles } from "./style"

const Input = ({label, placeholder}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style ={styles.inputContainer}>
                <TextInput placeholder={placeholder} style={styles.input}></TextInput>
            </View>
        </View>
    )
}
export default Input;