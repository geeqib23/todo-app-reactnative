import React from 'react';
import {View, FlatList, Text} from 'react-native';
import AddInput from '../Components/AddInput';
import TodoList from '../Components/TodoList';
import Empty from '../Components/Empty';
import Header from '../Components/Header';
import {useStore} from '../store/Store';
import {observer} from 'mobx-react-lite';
import {toJS} from 'mobx';
import Store from '../store/Store';
import * as Test from '../store/Store';

const HomeScreen = observer(({navigation}) => {
  //   const {data, submitHandler, deleteItem} = useStore();
  const store = new Store();
  const {test} = Test;
  const {data, submitHandler, deleteItem} = store;
  const deepCopy = toJS(data);
  return (
    <View>
      <TodoList item={test} />
      {data.map(item => {
        return <TodoList item={item} deleteItem={deleteItem} />;
      })}
      <FlatList
        data={data}
        extraData={deepCopy}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TodoList item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <TodoList item={{key: 1, value: 'hewfuh'}} deleteItem={deleteItem} /> */}
      <View>
        <AddInput submitHandler={test.setTest} />
      </View>
    </View>
  );
});

export default HomeScreen;
