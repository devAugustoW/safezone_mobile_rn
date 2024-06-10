import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Feather from 'react-native-vector-icons/Feather';

import { 
  RegisterContainer,
  Titulo,
  AreaInput,
  Input,
  DescriptionInput,
  BtnCamera,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraText 
} from './styles.js';

const EditRiskPoint = () => {
    
    const [image, setImage] = useState(null);
  
    /*
    const pickImage  = async() => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
     
    }
    */
  
    const pickImage  = async() => {
      console.log('Aqui 1');
  
      // Solicitar permissão para a câmera
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraPermission.status !== 'granted') {
        Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para acessar a câmera!');
        return;
      }
  
      console.log('Aqui 2');
  
      // Solicitar permissão para a galeria de fotos (escrita e leitura)
      const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (mediaLibraryPermission.status !== 'granted') {
        Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para salvar fotos no álbum!');
        return;
      }
  
      console.log('Aqui 3');
  
      // Abrir a câmera
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        saveToPhotos: true,
      });
  
      console.log('Aqui 4');
  
      if (!result.canceled) {
        setImage(result.uri);
        console.log('Imagem capturada e salva:', result.uri);
      }
  
      console.log('Aqui 5');
  
    }
  
    return (
      <RegisterContainer>
        <Titulo>Editar Ponto de Risco</Titulo>
        <AreaInput>
          <Input placeholder="Identificação do PR" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Título do PR" />
        </AreaInput>
        <AreaInput>
          <DescriptionInput
            placeholder="Descrição do PR"
            multiline={true}
            numberOfLines={8} />
        </AreaInput>
  
        <BtnCamera onPress={pickImage}>
          <Feather name='camera' color='#fff' size={45} />
          <CameraText>
            Anexar
          </CameraText>
        </BtnCamera>
  
        <ImageView
          source={{uri: image}} />
  
        <ButtonSubmit>
          <BtnText>Cadastrar</BtnText>
        </ButtonSubmit>
      </RegisterContainer>
    )
  }
  
  export default EditRiskPoint;