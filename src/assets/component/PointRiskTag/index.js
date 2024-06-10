import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {
   Tag,
   TextArea,
   IdentView,
   Identify,
   Title,
   Description,
   ButtonView,
   ButtonArea,
   ButtonAreaWithBorders
} from './styles'


const PointRiskTag = () => {
  const navigation = useNavigation();

  return (
   <Tag>
      <Identify>Identificação</Identify>
      <Title>Titulo do PR</Title>

      <IdentView>
        <Description>Descrição do ponto de Risco</Description>

        <ButtonView>

          <ButtonArea >
            <Feather name='x' color='#000' size={35} />
          </ButtonArea>

          <ButtonAreaWithBorders onPress={() => navigation.navigate('EditRiskPoint')}>
            <Feather name='play' color='#000' size={30} />
          </ButtonAreaWithBorders>
        </ButtonView>
      </IdentView>
    </Tag>
  )
}

export default PointRiskTag;