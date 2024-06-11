import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
   Background, 
   StyledMapView, 
   BorderTab, 
   Btn, 
   ButtonIcon, 
   BorderLogo, 
   BtnText 
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';


export default function Home(){

   const navigation = useNavigation();

   return (
      <Background>
         <StatusBar backgroundColor='#CCCCCC' />
         <StyledMapView
            initialRegion={{
               latitude:-8.3768666,
               longitude:-35.0109399,
               latitudeDelta:0.02,
               longitudeDelta:0.02,
            }}/>

         <BorderTab>
            <Btn
             activeOpacity={0.7}
             onPress={() => navigation.navigate('RiskPointList')}>
               <ButtonIcon>
                  <Feather name="list" color='#FFFFFF' size={44} />
               </ButtonIcon>
               <BtnText>Listar PR</BtnText>
            </Btn>
            
            <BorderLogo source={require('../../assets/logo.png')}/>

            <Btn
             activeOpacity={0.7}
             onPress={() => navigation.navigate('Register')}>
               <ButtonIcon>
                  <Feather name="folder-plus" color='#FFFFFF' size={44} />
               </ButtonIcon>
               <BtnText>Cadastrar PR</BtnText>
            </Btn>
         </BorderTab>
         
      </Background>
   )
}