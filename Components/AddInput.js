import React, {useState} from 'react';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AddInput({submitHandler}) {
  const [value, setValue] = useState('');

  const onChangeText = text => {
    // console.log(text);
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          if (value) {
            submitHandler(value);
            setValue('');
          }
        }}>
        <AntDesign name="plus" size={24} color="black" />
      </SubmitButton>
    </ComponentContainer>
  );
}

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
