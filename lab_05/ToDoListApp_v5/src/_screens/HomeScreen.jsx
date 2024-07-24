import { Button, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import MainLayout from '../_layouts/MainLayout'
import ToDoForm from '../_components/ToDoForm'
import ToDoList from '../_components/ToDoList'
import { useState } from 'react'

function HomeScreen ({navigation}) {
  const [tasks, setTasks] = useState([
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

  const addTask = (taskText) => {
    setTasks([...tasks, { title: taskText }]);
  };

  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <MainLayout>
      <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      <ScrollView style={styles.taskView}>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
      </ScrollView>
    </MainLayout>
    
  )
}

export default HomeScreen

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