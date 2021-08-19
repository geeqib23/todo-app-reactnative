import React, {useEffect, useState} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import styled from 'styled-components';
import AddInput from './Components/AddInput';
import TodoList from './Components/TodoList';
import Empty from './Components/Empty';
import Header from './Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = async value => {
    if (value) {
      setData(prevTodo => {
        return [
          {
            value: value,
            key: Math.random().toString(),
          },
          ...prevTodo,
        ];
      });
    }
  };

  useEffect(() => {
    if (data.length) {
      // console.log(data);
      async function storeData() {
        try {
          await AsyncStorage.setItem('data', JSON.stringify(data));
          // console.log('successfully saved');
        } catch (e) {
          alert('error saving');
        }
      }
      storeData();
    }
  }, [data]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('data');
        // jsonValue && console.log('successfully read', JSON.parse(jsonValue));
        jsonValue && setData(JSON.parse(jsonValue));
      } catch (e) {
        alert('error reading');
      }
    };
    getData();
  }, []);

  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="black" />
      </View>

      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoList item={item} deleteItem={deleteItem} />
          )}
        />
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: #121212;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
