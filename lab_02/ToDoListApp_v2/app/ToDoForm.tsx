import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ToDoForm = () => {
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task..."
    />
    <Button title="Add" />
  </View>
  )
}

export default ToDoForm

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
})