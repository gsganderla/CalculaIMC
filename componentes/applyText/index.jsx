import { Text, TouchableOpacity, View } from "react-native";

import {styles} from './styles'

export function ApplyResult(props){

    return (
        <View style={styles.container}>
            <Text style={styles.textResultado} >{props.textResult}</Text>
        </View>
    )

}
