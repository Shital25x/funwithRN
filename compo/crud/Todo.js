import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  // AsyncStorage
    // Function to load tasks from AsyncStorage
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTodos(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks.', error);
      }
    };
  
    // Save tasks to AsyncStorage
    const saveTasks = async (newTasks) => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      } catch (error) {
        console.error('Failed to save tasks.', error);
      }
    };
  
    // Load tasks when the component mounts
    useEffect(() => {
      loadTasks();
    }, []);

  const Handlesubmit = () => {
    // if a task being editing
    if (edit) { 
      const updateTask = todos.map((task) =>
        task.id == edit ? {...task, text: todo} : task,
      );
      setTodos(updateTask);
      setEdit(null);
      saveTasks(updateTask);
    }
    // Add a new task
    else {
      const newTasks = [...todos, {id: Date.now(), text: todo}];
      setTodos(newTasks);
      saveTasks(newTasks);
    }
    setTodo("");
  };

  //  delete
  const HandleDelete = async(id) => {
    const filterItem = todos.filter(task => task.id != id);
    setTodos(filterItem);
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(filterItem)); // Save the updated tasks to AsyncStorage
    } catch (error) {
      console.error('Failed to delete task from storage', error);
    }
  };

  // update
  const HandleEdit = id => {
    const EditItem = todos.find(task => task.id == id);
    setTodo(EditItem.text);
    setEdit(id);
  };
  return (
    <View>
      <TextInput
        placeholder="Add Item"
        value={todo}
        onChangeText={value => setTodo(value)}
      />
      {!edit ? (
        <Button title="Add" onPress={() => Handlesubmit()} />
      ) : (
        <Button title="Update" onPress={() => Handlesubmit()} />
      )}

      <FlatList
        data={todos}
        keyExtractor={text => text.id}
        renderItem={({item}) => (
          <View style={styles.view}>
            <Text style={styles.txt}>{item.text}</Text>
            <TouchableOpacity>
              <Text style={styles.edit} onPress={() => HandleEdit(item.id)}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.delete} onPress={() => HandleDelete(item.id)}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  view: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt: {
    fontSize: 20,
    color: 'black',
  },
  edit: {
    color: 'blue',
  },
  delete: {
    color: 'red',
  },
});
