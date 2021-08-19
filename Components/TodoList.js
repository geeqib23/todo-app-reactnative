import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

let today = new Date().toISOString().slice(0, 10);

export default function TodoList({item, deleteItem}) {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Entypo name="circle" size={15} color="#ffc68a" />
        </CirlceContainer>
        <View>
          {item.value && <TextItem>{item.value}</TextItem>}
          <TextDate> {today}</TextDate>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="#ffc68a" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: #1e1e1e;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: whitesmoke;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  font-family: poppins-regular;
`;

const TextDate = styled.Text`
  color: gray;
  opacity: 10;
  font-size: 13px;
  margin-right: 20px;
  padding-bottom: 3px;
  font-family: poppins-regular;
  border-radius: 10px;
  width: 90px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 15px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
