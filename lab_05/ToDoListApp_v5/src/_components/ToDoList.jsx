import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ToDoList = ({tasks}) => {

    const taskList = tasks.map((task, index) => (
        <Pressable key={index} style={styles.pressableTask}>
      <View style={styles.task}>
        <View style={styles.taskTitleHeader}></View>
        <View style={styles.taskInfoBody}>
          <Text style={styles.taskInfo}>{task.title}</Text>
        </View>
      </View>
    </Pressable>

    ));

  return (
    <View>
      {taskList}
    </View>
  );
};


export default ToDoList;

const styles = StyleSheet.create({
    pressableTask: {
      overflow: 'visible',
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      marginBottom: 20,
    },
    task: {
      borderRadius: 15,
      height: 150,
      flex: 1,
      flexDirection: 'column',
      overflow: 'hidden',
    },
    taskTitleHeader: {
      flex: 1,
      backgroundColor: 'crimson',
    },
    taskInfoBody: {
      flex: 2,
      backgroundColor: '#fff',
    },
    taskInfo: {
      padding: 25,
      fontSize: 30,
    },
  });

