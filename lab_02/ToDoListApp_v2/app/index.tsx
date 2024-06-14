import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToDoForm from './ToDoForm'

const index = () => {
  return (
   <View>
    <ToDoForm></ToDoForm>
    <ScrollView style={styles.taskView}>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 1</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> 🛒 Buy groceries</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 2</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}>🐕 Walk the dog</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 3</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}>📚 Finish homework</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 4</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}>📞 Call mom</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 5</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> 💪 Go to the gym</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 6</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> 📖 Read a book</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 7</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}>💸 Pay bills</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 8</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> 🧹 Clean the house</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 9</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> 🎬 Watch a movie</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.pressableTask}>
        <View style={styles.task}>
          <View style={styles.taskTitleHeader}>
            <Text style={styles.taskTitle}>Task # 10</Text>
          </View>
          <View style={styles.taskInfoBody}>
            <Text style={styles.taskInfo}> ✈️ Plan vacation</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  taskView:{
    padding:20
  },
  pressableTask:{
    overflow: 'visible',
    shadowColor:'black',
    shadowOffset:{
      width: 10,
      height:10,
    },
    shadowOpacity:0.05,
    shadowRadius:10,

  marginBottom:20

  },
  task:{
    borderRadius:15,
    height:150,
    flex:1,
    flexDirection:'column',
    overflow:'hidden',

  },
  taskTitleHeader:{
    flex:1,
    backgroundColor:'crimson'
  },
  taskTitle:{
    padding:8,
    fontSize:30,
    color:'ivory',
    fontWeight:'semibold'
  },
  taskInfoBody:{
    flex:2,
    backgroundColor:'#fff'
  },
  taskInfo:{
    padding:25,
    fontSize:30,
  }
  
});