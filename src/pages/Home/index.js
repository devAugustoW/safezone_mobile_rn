import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
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

import Feather from 'react-native-vector-icons/Feather';


export default function Home(){
   const navigation = useNavigation();
   const [riskPointLocations, setRiskPointLocations] = useState([])

   const fetchRiskPoints = async () => {
      console.log('Entrou no fetch para buscar locations')

      try {
         const response = await axios.get('http://192.168.1.2:3333/getlocations'); 


         //setRiskPointLocations(response);

         console.log('Locationde de response.data: ', response.data)
         
         setRiskPointLocations(response.data)

      } catch (error) {
         console.error('Erro ao buscar pontos de risco:', error);

      }

   };
   /*
   useEffect(() => {
      fetchRiskPoints();
      console.log('Estado do riskPointLocations presente:', riskPointLocations);
   }, []);
   */
   return (
      <Background>
         <StatusBar backgroundColor='#CCCCCC' />
         <StyledMapView
            initialRegion={{
               latitude:-8.1238872,
               longitude:-34.9075868,
               latitudeDelta:0.02,
               longitudeDelta:0.02,
            }} >
            {riskPointLocations.map((loc) => (
               <Marker
                  key={loc._id}
                  coordinate={{
                     latitude: loc.location.latitude,
                     longitude: loc.location.longitude,
                  }}
               />
            ))}

         </StyledMapView>

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