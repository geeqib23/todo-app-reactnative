import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    console.log(text);
    setTasks(prev => prev.concat(text));
    setText('');
  };
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TO-DO APP</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Enter a task"
        value={text}
        onChangeText={value => setText(value)}
        onSubmitEditing={handleSubmit}
      />
      <View>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskBox}>
              <Text style={{fontSize: 30}}> {task + '  ' + index} </Text>
              <View style={styles.deleteButton}>
                <TouchableOpacity
                  style={{padding: 3, backgroundColor: 'red'}}
                  title={'Delete'}
                  onPress={() => {
                    setTasks(prev =>
                      prev.slice(0, index).concat(prev.slice(index + 1)),
                    );
                  }}>
                  <Text style={{fontSize: 13}}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
  },
  textBox: {
    backgroundColor: 'white',
  },
  taskBox: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    height: 20,
    padding: 0,
    right: 0,
    fontSize: 5,
  },
});

export default App;
