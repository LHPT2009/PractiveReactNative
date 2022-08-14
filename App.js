import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Form from './components/Form';
import styles from './App.components.style'
import Task from './components/Task'
import { useState } from 'react';
export default function App() {
  const [taskList,setTaskList] = useState([])
  const handleAddTask = (task) =>{
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) =>{
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "OK", onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
        } }
        ,{
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>Todo List</Text>
            <ScrollView style={styles.items}>
              {
                taskList.map((item,index) =>{
                  return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
                })
              }
            </ScrollView>
        </View>
        <Form onAddTask={handleAddTask}/>
    </View>
  );
}