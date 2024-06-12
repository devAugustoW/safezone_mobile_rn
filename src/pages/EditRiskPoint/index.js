import React, { useState } from 'react';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Cloudinary } from "@cloudinary/url-gen";
import { 
  CLOUDINARY_CLOUD_NAME, 
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_URL } from '@env';
import Feather from 'react-native-vector-icons/Feather';
import { Alert, Image } from 'react-native';
import * as Location from 'expo-location';
import { 
  EditRiskPointContainer,
  Titulo,
  AreaInput,
  BtnAndImageView,
  Input,
  DescriptionInput,
  BtnCamera,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraText 
} from './styles.js';

const EditRiskPoint = () => {
  console.log('Entrei em Editar Ponto de Risco');
  const navigation = useNavigation();
  const route = useRoute();
  const { id, refValue, title, description, image, location } = route.params;

  const [newRefValue, setNewRefValue] = useState(refValue);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const [newLocation, setNewLocation] = useState(location);
  
  //fazer upload de imagem
  const photoUpload = async (newImage) => {

    console.log('Entrou NOVA função upload', newImage)

    const dataImage = new FormData();
    dataImage.append('file', newImage);
    dataImage.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    dataImage.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    console.log('Console do data.append');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'post',
        body: dataImage,
      });

      const resultImage = await res.json();
      setNewImage(resultImage.url);
      console.log('Cadastro no cloudinary: ', resultImage.url);

      return resultImage.url;

    } catch (err) {
      console.log('Erro na requisição fetch ', err);

    }
    return resultImage.url;
  }

  const pickImage  = async() => {
    console.log('PickImage do editar');

    // Solicitar permissão para a câmera
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para acessar a câmera!');
      return;
    }

    console.log('Autorizado');

    // Solicitar permissão para a galeria de fotos (escrita e leitura)
    const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (mediaLibraryPermission.status !== 'granted') {
      Alert.alert('Permissão necessária', 'Desculpe, precisamos da permissão para salvar fotos no álbum!');
      return;
    }

    console.log('Aqui 3');

    // Abrir a câmera
    const photo = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (photo) {
      setNewImage(photo.uri);
      console.log('Imagem capturada e salva:', photo);
  
      // Criar um novo arquivo para upload
      let newFile = {
        uri: photo.assets[0].uri,
        type: photo.assets[0].mimeType,
        name: photo.assets[0].fileName,
      };
  
      console.log('Dados principais da nova foto:', newFile);
  
      // Enviar a nova foto para upload
      photoUpload(newFile);
    } else{
      console.log('Foto deu Ruim.')

    }
  }

  // Pegar a Geolocalização
  const getLocation = async() => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permissão de Geolocalização negada!');
        console.log('Permissão de Geolocalização negada!');
        return null;
      }

      let locationPoint = await Location.getCurrentPositionAsync({});
      const locationData = {
        latitude: locationPoint.coords.latitude,
        longitude: locationPoint.coords.longitude,
      };

      console.log('Vamos ver se sair location: ', locationData);
      setNewLocation(locationData);
      return locationData;

    } catch (err) {
      setError('Erro ao obter localização!');
      console.log('Erro ao obter localização!', err);
      return null;
    }
  }

  const handleEditRiskPoint = async() => {
    let riskPoint = {};

    console.log('Entreino HandleEditRiskPoint');
    console.log('Chamar location');

    // Montar o objeto
    try{
      const locationData = await getLocation();

      console.log('locationData: ', locationData);


      if (locationData){
        const { latitude, longitude } = locationData;

      }

      console.log('locationData OK!')

      riskPoint = {
        id: id,
        ref: newRefValue,
        title: newTitle,
        location: {
          latitude: locationData.latitude,
          longitude: locationData.longitude
        },
        description: newDescription,
        status: false,
        image: image,
      }

      console.log('console do objeto riskPoint', riskPoint)

    } catch(err) {
      console.log('Erro na requisição handleRegister', err)

    } 

    console.log('Chegando na requisição para atualizar Ponto de Risco', riskPoint);

    try{
      const response = await axios.put('http://192.168.1.2:3333/update', riskPoint, {
        method: 'PUT', 
      });

      if (response.data){
        Alert.alert('Ponto de Risco atualizado com sucesso!');
        console.log('Response da API:', response.data);
      }

      console.group('Zerando os estdos')

      // Zerar estados
      setNewImage(null);
      setNewLocation({ latitude: null, longitude: null });
      setNewRefValue('');
      setNewTitle('');
      setNewDescription('');

      console.group('indo para home')

      navigation.navigate('Home');      

    } catch(error){
      console.log('Erro na requisição para API', error);

    }   


  }

  return (
    <EditRiskPointContainer>
      <Titulo>Editar Ponto de Risco</Titulo>
      <AreaInput>
        <Input 
          value={newRefValue}
          onChangeText={setNewRefValue} />
      </AreaInput>
      <AreaInput>
        <Input v
          value={newTitle}
          onChangeText={setNewTitle} />
      </AreaInput>
      <AreaInput>
        <DescriptionInput
          placeholder="Descrição do PR"
          multiline={true}
          numberOfLines={6}
          value={newDescription}
          onChangeText={setNewDescription} />
      </AreaInput>

      <BtnAndImageView>
        <BtnCamera onPress={pickImage}>
          <Feather name='camera' color='#fff' size={45} />
          <CameraText>
            Anexar
          </CameraText>
        </BtnCamera>

        {newImage && (
          <ImageView source={{ uri: newImage  }} />
        )}
      </BtnAndImageView>
  
      <ButtonSubmit>
        <BtnText onPress={handleEditRiskPoint}>Cadastrar</BtnText>
      </ButtonSubmit>
    </EditRiskPointContainer>
  )
}
  
export default EditRiskPoint;