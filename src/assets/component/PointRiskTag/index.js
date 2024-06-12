import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {
   Tag,
   Identify,
   TitleView,
   IdentView,
   DescriptionInput,
   ButtonView,
   ButtonArea,
   ButtonAreaWithBorders
} from './styles'


const PointRiskTag = ({ id, refValue, title, description, image, location }) => {
  const navigation = useNavigation();

  
  console.log('Entrei na TAG');
  console.log('id', id);
  console.log('refValue', refValue);


  return (
   <Tag>
      <Identify>{refValue}</Identify>
      <TitleView>{title}</TitleView>

      <IdentView>
        <DescriptionInput
          multiline={true}
          numberOfLines={4}
          value={description}
          editable={false} />

        <ButtonView>
          <ButtonArea onPress={() => navigation.navigate('ViewRiskPoint', { id, refValue, title, description, image, location })}>
            <Feather name='x' color='#000' size={35} />
          </ButtonArea>

          <ButtonAreaWithBorders onPress={() => navigation.navigate('EditRiskPoint', { id, refValue, title, description, image, location })}>
            <Feather name='play' color='#000' size={30} />
          </ButtonAreaWithBorders>
        </ButtonView>
      </IdentView>
    </Tag>
  )
}

export default PointRiskTag;