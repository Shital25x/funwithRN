import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axios = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null); // To track if we are editing a task

  // Post data from frontend to backend
  const HandlePress = async () => {
    if (editTaskId) {
      // If in edit mode, update the task
      await handleUpdateTask();
    } else {
      try {
        const response = await axios.post('http://10.0.2.2:8080/tasks', {
          title: task,
        });
        console.log('Task added:', response.data);
        setTask(''); // Clear input after adding
        fetchData(); // Re-fetch the task list after adding
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  // Get data from backend to frontend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8080/tasks');
      console.log('Tasks fetched:', response.data);
      setTasks(response.data); // Set fetched tasks to the state
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Delete task
  const handleDeleteTask = async id => {
    try {
      await axios.delete(`http://10.0.2.2:8080/tasks/${id}`);
      console.log('Task deleted:', id);
      fetchData(); // Re-fetch tasks after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Update task
  const handleUpdateTask = async () => {
    try {
      await axios.put(`http://10.0.2.2:8080/tasks/${editTaskId}`, {
        title: task,
      });
      console.log('Task updated:', editTaskId);
      setTask(''); // Clear input after updating
      setEditTaskId(null); // Exit edit mode
      fetchData(); // Re-fetch tasks after updating
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Set task data for editing
  const handleEditTask = task => {
    setTask(task.title);
    setEditTaskId(task._id); // Track the task being edited
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add or Edit Task"
        value={task}
        onChangeText={value => setTask(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={HandlePress} style={styles.button}>
        <Text style={styles.buttonText}>
          {editTaskId ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={item => item._id} // Use the task's _id as the key
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              onPress={() => handleEditTask(item)}
              style={styles.editButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteTask(item._id)}
              style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Axios;

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  button: { backgroundColor: '#2196F3', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
  taskItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  editButton: { backgroundColor: '#FFA500', padding: 5, marginTop: 5 },
  deleteButton: { backgroundColor: '#FF0000', padding: 5, marginTop: 5 },
});
