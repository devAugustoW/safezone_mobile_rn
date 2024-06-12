import React, { useState } from 'react'
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {
   Tag,
   IdentifyView,
   Identify,
   IconContainer,
   TitleView,
   IdentView,
   DesciptionText,
   ButtonView,
   ButtonArea,
   ButtonAreaWithBorders
} from './styles'


const PointRiskTag = ({ id, refValue, title, description, image, location }) => {
  const navigation = useNavigation();

  const deleteRiskPoint = async () => {



    try {
      const response = await axios.delete(`http://192.168.1.2:3333/delete/${id}`);

      if (response.data) {
        Alert.alert('Ponto de risco deletado com sucesso!');
        console.log('Response da API:', response.data);
        
      }

    } catch (error) {
      console.log('Erro na requisição para deletar ponto de risco', error);
      Alert.alert('Erro ao deletar ponto de risco');
    
    } 

  }  

  return (
   <Tag>
      <IdentifyView>
        <Identify>
          {refValue}
        </Identify>
        
        <Feather name='map-pin' color='#fff' size={20} />
        
      </IdentifyView>

      <TitleView>{title}</TitleView>

      <IdentView>
        <DesciptionText>{description}</DesciptionText>

        <ButtonView>
          <ButtonArea onPress={deleteRiskPoint}>
            <Feather name='trash-2' color='#000' size={35} />
          </ButtonArea>

          <ButtonAreaWithBorders onPress={() => navigation.navigate('ViewRiskPoint', { id, refValue, title, description, image, location })}>
            <Feather name='search' color='#000' size={30} />
          </ButtonAreaWithBorders>
        </ButtonView>
      </IdentView>
    </Tag>
  )
}

export default PointRiskTag;