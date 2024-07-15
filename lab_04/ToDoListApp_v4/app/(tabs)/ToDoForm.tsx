import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

interface Props {
  addTask: (task: string) => void;
}

const ToDoForm: React.FC<Props> = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Pressable style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ToDoForm;
