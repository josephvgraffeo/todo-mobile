import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function AddTask({ setTasks }) {
    const [task, setTask] = useState("")

    const handleAddNewTask = () => {
        const newTask = { "done": false , "task": task }

        fetch(`https://ugly-website-jg.web.app/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask), 
        })
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }

    return (
        <View>
            <Text style={styles.addText}>Add new task</Text>
            <TextInput style={styles.inputBox} value={task} onChangeText={setTask}/>
            <Button style={styles.addButton} title="+" onPress={handleAddNewTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        padding: 10,
        margin: 5,
        backgroundColor: '#FFFFFFa5',
        borderWidth: 1,
    },

    addText: {
        fontSize: 24,
        fontWeight: "900",
        padding: 10,
        color: "#FFFFFF",
        textTransform: "capitalize",
        display: "flex",
        textAlign: "center",
    },

    addButton: {
        color: "#18CF23",
        padding: 3,
        backgroundColor: "#18CF23",
    }
})