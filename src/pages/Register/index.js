import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
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
  RegisterContainer,
  Titulo,
  AreaInput,
  Input,
  DescriptionInput,
  BtnCamera,
  BtnAndImageView,
  ImageView,
  BtnText,
  ButtonSubmit,
  CameraText 
} from './styles.js';


const Register = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({latitude: null, longitude: null });
  const [ref, setRef] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();


  //fazer upload de imagem
  const photoUpload = async (image) => {

    console.log('Entrou função upload', image)

    const dataImage = new FormData();
    dataImage.append('file', image);
    dataImage.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    dataImage.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    console.log('Console do data.append');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'post',
        body: dataImage,
      });

      const resultImage = await res.json();
      setImage(resultImage.url);
      console.log('Imagem com url: ', resultImage.url);

      return image;

    } catch (err) {
      console.log('Erro na requisição fetch ', err);

    }

    return image;
  }


  // Tirar foto
  const pickImage  = async() => {

    // Solicitar permissão para a câmera
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      HTMLFormControlsCollection.log('Permissão necessária', 'Desculpe, precisamos da permissão para acessar a câmera!');
      return;
    }

    console.log('Permissão OK.')

    // Abrir a câmera
    const photo = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log('Acho que salvou a foto', photo)

    let newFile = {
      uri: photo.assets[0].uri,
      type: photo.assets[0].mimeType,
      name: photo.assets[0].fileName,
    }

    console.log('Dados principais de photo:', newFile);

    photoUpload(newFile);
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

      setLocation(locationData);
      return locationData;

    } catch (err) {
      setError('Erro ao obter localização!');
      console.log('Erro ao obter localização!', err);
      return null;
    }
  }

  // Cadastrar ponto de risco -> Montar o Objeto Ponto de Risco
  const handleRegister = async() => {
    let riskPoint = {};

    console.log('Entrou no handleLocation')

    // Montar o objeto
    try{
      const locationData = await getLocation();

      console.log('locationData: ', locationData);


      if (locationData){
        const { latitude, longitude } = locationData;

      }

      console.log('locationData OK!')

      riskPoint = {
        ref: ref,
        title: title,
        location: {
          latitude: locationData.latitude,
          longitude: locationData.longitude
        },
        description: description,
        status: false,
        image: image,
      }

      console.log('console do objeto riskPoint', riskPoint)

    } catch(err) {
      console.log('Erro na requisição handleRegister', err)

    } 

    console.log('Chegando na requisição para API')

    // Fazer a chamada para enviar o Objeto para API
    try{
      const response = await axios.post('http://192.168.1.9:3333/create', riskPoint );

      if (response.data){
        Alert.alert('Ponto de Risco criado com sucesso!');
        console.log('Response da API:', response.data);
      }

      console.group('Zerando os estdos')

      // Zerar estados
      setImage(null);
      setLocation({ latitude: null, longitude: null });
      setRef('');
      setTitle('');
      setDescription('');

      console.group('indo para home')

      navigation.navigate('Home');      

    } catch(error){
      console.log('Erro na requisição para API', error);
    }   
  }

    
  return (
    <RegisterContainer>
      <Titulo>Cadastro de Ponto de Risco</Titulo>

      <AreaInput>
        <Input placeholder="Referência do PR"
          name={ref}
          value={ref}
          onChangeText={setRef} />
      </AreaInput>

      <AreaInput>
        <Input placeholder="Título do PR"
          name={title}
          value={title}
          onChangeText={setTitle} />
      </AreaInput>

      <AreaInput>
        <DescriptionInput
          placeholder="Descrição do PR"
          multiline={true}
          numberOfLines={8}
          name={description}
          value={description}
          onChangeText={setDescription} />
      </AreaInput>

      <BtnAndImageView>
        <BtnCamera onPress={pickImage}>
          <Feather name='camera' color='#fff' size={45} />
          <CameraText>
            Anexar
          </CameraText>
        </BtnCamera>

        {image && (
          <ImageView source={{ uri: image }} />
        )}
      </BtnAndImageView>

      <ButtonSubmit>
        <BtnText onPress={handleRegister}>Cadastrar</BtnText>
      </ButtonSubmit>
    </RegisterContainer>
  )
}

export default Register;