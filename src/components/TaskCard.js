import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

export default function TaskCard( {data} ) {
    const { task, done } = data;

    return (
            <View style={styles.taskCardContainer}>
                <Text style={done ? styles.textColorDone : styles.textColor}>* {task}
                {/* <Button
                 title="X" 
                 backgroundColor="red" 
                 color="red" 
                 fontSize="30" 
                 fontWeight="500"
                 padding="30"
                 /> */}
                 </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    taskCardContainer: {
        padding: 30,
        margin: 5,
    },

    textColor: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#FFFFFFa5"
    },

    textColorDone: {
        color: "#1DA925",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#FFFFFFa5",
        textDecorationLine: "line-through",
    },

})