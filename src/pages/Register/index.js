import React, { useState } from 'react';
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
  ImageView,
  Photo,
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


  //fazer upload de imagem
  const photoUpload = async (image) => {

    console.log('Entrou função upload')

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    data.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    console.log('Console do data: ', data)

    fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'post',
      body: data,
    })
    .then((res) => res.json())
    .then((data) => {
      setImage(data.url);

      console.log('data.url: ', data.url)

    })
    .catch((err) => {
      console.log('Erro na requisição fetch ', err)

    })


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
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log('Photo assets:', photo.assets);
    console.log('Photo assets.uri:', photo.assets[0].uri);
    console.log('Photo assets.mimeType:', photo.assets[0].mimeType);
    console.log('Photo assets.fileName:', photo.assets[0].fileName); 

    let newFile = {
      uri: photo.assets[0].uri,
      type: photo.assets[0].mimeType,
      name: photo.assets[0].fileName,
    }

    console.log('NewFile indo para Upload', newFile)

    photoUpload(newFile);
  }
  
  // Pegar a Geolocalização
  const getLocation = async() => {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permissão de Geolocalização negada!');
      return;

    }

    let locationPoint = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: locationPoint.coords.latitude,
      longitude: locationPoint.coords.longitude,
    });

    return location
  }

  // Cadastrar ponto de risco
  const handleRegister = () => {
    console.log(ref);
    console.log(title);

    /* console.log(Latitude e Longitude) */
    getLocation()
    console.log(location)
    console.log(description);

    /* console.log(photo) */
    pickImage();
    console.log(newFile);

    /* console.log('uploado OK') */
  }


  return (
    <RegisterContainer>
      <Titulo>Cadastro de Ponto de Risco</Titulo>

      <AreaInput>
        <Input placeholder="Referência do PR"
          name={ref}
          onChangeText={setRef} />
      </AreaInput>

      <AreaInput>
        <Input placeholder="Título do PR"
          name={title}
          onChangeText={setTitle} />
      </AreaInput>

      <AreaInput>
        <DescriptionInput
          placeholder="Descrição do PR"
          multiline={true}
          numberOfLines={8}
          name={description}
          onChangeText={setDescription} />
      </AreaInput>

      <BtnCamera onPress={pickImage}>
        <Feather name='camera' color='#fff' size={45} />
        <CameraText>
          Anexar
        </CameraText>
      </BtnCamera>

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
  
      <ButtonSubmit>
        <BtnText onPress={handleRegister}>Cadastrar</BtnText>
      </ButtonSubmit>
    </RegisterContainer>
  )
}

export default Register;