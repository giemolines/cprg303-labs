import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ToDoForm from './ToDoForm'; // Adjust the import path as per your project structure

const App = () => {
  const [tasks, setTasks] = useState<{ title: string }[]>([
    { title: '🛒 Buy groceries' },
    { title: '🐕 Walk the dog' },
    { title: '📚 Finish homework' },
    { title: '📞 Call mom' },
    { title: '💪 Go to the gym' },
    { title: '📖 Read a book' },
    { title: '💸 Pay bills' },
    { title: '🧹 Clean the house' },
    { title: '🎬 Watch a movie' },
    { title: '✈️ Plan vacation' }
  ]);

  const addTask = (taskText: string) => {
    setTasks([...tasks, { title: taskText }]);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.taskView}>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
      </ScrollView>
    </SafeAreaView>
  );
};

const ToDoList: React.FC<{ tasks: { title: string }[] }> = ({ tasks }) => {
  const taskList = tasks.map((task, index) =>
    <Pressable key={index} style={styles.pressableTask}>
      <View style={styles.task}>
        <View style={styles.taskTitleHeader}></View>
        <View style={styles.taskInfoBody}>
          <Text style={styles.taskInfo}> {task.title}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View>
      {taskList}
    </View>
  );
};

const styles = StyleSheet.create({
  taskView: {
    padding: 20
  },
  pressableTask: {
    overflow: 'visible',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginBottom: 20
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
    backgroundColor: 'crimson'
  },
  taskInfoBody: {
    flex: 2,
    backgroundColor: '#fff'
  },
  taskInfo: {
    padding: 25,
    fontSize: 30,
  }
});

export default App;
