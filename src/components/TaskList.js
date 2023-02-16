import { useEffect, useState } from "react";
import { ScrollView, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import TaskCard from "./TaskCard.js";

export default function TaskList() {
    const [tasks, setTasks] = useState();

    useEffect(() => {
        // https://express-ts-c8.web.app/photos
        // http://127.0.0.1:5002/tasks
        fetch('https://ugly-website-jg.web.app/tasks')
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error)
    }, [])
    
    const toggleDone = (task) => {
        console.log(task.taskId)
        const done = !!!task.done

        fetch(`https://ugly-website-jg.web.app/tasks/${task.taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ done }), 
        })
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }

    return (
        <ScrollView>
            <ImageBackground
                source={require("../../assets/bgimage.webp")}
                resizeMode="cover"
                style={styles.bg}>
                <Text style={styles.h1}>To Do List:</Text>
                {
                    !tasks
                        ? <Text>Loading...</Text>
                        : tasks.map( (element) => (
                            <TouchableOpacity onPress={ () => toggleDone(element) } key={tasks.taskId}>
                                <TaskCard data={element} />
                            </TouchableOpacity>
                            ))
                }

                {/* <Text>hello</Text>
            { !tasks
            ? tasks.map(task => <TaskCard key={task.taskId} task={task} />) 
            : null } */}
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center'
    },

    h1: {
        fontSize: 30,
        fontWeight: "900",
        padding: 20,
        color: "#000000",
        textTransform: "capitalize",
        display: "flex",
        textAlign: "center",
        backgroundColor: "#ffffffa5"
    }
})
