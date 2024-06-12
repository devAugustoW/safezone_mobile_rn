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


const PointRiskTag = ({ refValue, title, description }) => {
  const navigation = useNavigation();

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
          <ButtonArea onPress={() => navigation.navigate('ViewRiskPoint')}>
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