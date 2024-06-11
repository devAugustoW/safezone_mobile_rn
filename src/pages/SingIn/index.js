import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
   Background, 
   Container, 
   Logo, 
   AreaInput, 
   Input,
   SubmitButton,
   SubmitText,
   Link,
   LinkText
} from './styles';

export default function SignIn(){
   const navigation = useNavigation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async() => {
      

      const user = {
         email,
         password
      }

      console.log(user)
      
      try{
         const response = await axios.post('http://192.168.1.9:3333/login', user)


         if (response.data){
            console.log('Login realizado com sucesso');
            Alert.alert('Login realizado com sucesso');

            navigation.navigate('Home');
         } else {
            console.log('Login falhou.', response.data.message);
            Alert.alert('Login falhou.', response.data.message);
         }
      } catch(error){
         console.log('Error', 'Requisição falhou!', error.message, error.response);
         Alert.alert('Error', 'Requisição falhou!');
      }

   }

   return(
      <Background>
         <StatusBar backgroundColor='#f48604' />

         <Container
           behavior={Platform.OS === 'ios' ? 'padding' : ''}
           enabled >

            <Logo source={require('../../assets/logo.png')} />

            <AreaInput>
               <Input placeholder="Seu email"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize='none'
                  keyboardType='email-address' />
            </AreaInput>

            <AreaInput>
               <Input placeholder="Sua senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry />
            </AreaInput>

            <SubmitButton 
               activeOpacity={0.7}
               onPress={handleLogin}   
            >
               <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link>
               <LinkText>Esqueceu a senha?</LinkText>
            </Link>
         </Container>
      </Background>
   )
}