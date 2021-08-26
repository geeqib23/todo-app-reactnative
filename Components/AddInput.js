import React, {useState} from 'react';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {observer} from 'mobx-react-lite';
import {useStore} from '../store/Store';
import Store from '../store/Store';
import * as Test from '../store/Store';
import {store} from '../store/Store';

const AddInput = observer(() => {
  // const store = useStore();
  const [value, setValue] = useState('');
  // const store = new Store();
  // const {data, test, submitHandler, deleteItem, setTest} = store;

  // const onChangeText = text => {
  //   console.log(text);
  //   setValue(text);
  // };
  // const {test} = Test;

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          value={value}
          onChangeText={setValue}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          if (value) {
            store.submitHandler(value);
            setValue('');
          }
        }}>
        <AntDesign name="plus" size={24} color="black" />
      </SubmitButton>
    </ComponentContainer>
  );
});

export default AddInput;

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: rgba(360, 360, 360, 0.7);
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: #ffc68a;
  margin-bottom: 20px;
  border-radius: 50px;
`;
