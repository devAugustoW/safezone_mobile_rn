import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import { 
  ViewRiskPointContainer,
  Titulo,
  AreaInput,
  BtnAndImageView,
  Input,
  DescriptionInput,
  BtnEdit,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraEdit 
} from './styles.js';

const ViewRiskPoint = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, refValue, title, description, image } = route.params;
  
  console.log('Entrei na Página Visualizar Ponto de Risco')
  console.log('Console da imagem: ', image)
    
  return (
    <ViewRiskPointContainer>
      <Titulo>Visualizar Ponto de Risco</Titulo>
      
      <AreaInput>
        <Input value={refValue} editable={false} />
      </AreaInput>
      <AreaInput>
        <Input value={title} editable={false} />
      </AreaInput>
      <AreaInput>
        <DescriptionInput
          multiline={true}
          numberOfLines={6}
          value={description}
          editable={false} />
      </AreaInput>

      <BtnAndImageView>
        <BtnEdit onPress={() => navigation.navigate('EditRiskPoint', { id, refValue, title, description, image })}>
          <Feather name='edit' color='#fff' size={45} />
          <CameraEdit>
            Editar
          </CameraEdit>
        </BtnEdit>

        {image && (
          <ImageView source={{ uri: image }} />
        )}
      </BtnAndImageView>

      <ButtonSubmit>
        <BtnText>Cadastrar</BtnText>
      </ButtonSubmit>
    </ViewRiskPointContainer>
  )
}

export default ViewRiskPoint;