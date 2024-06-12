import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

import {
  ListContainer,
  ScrollView,
  Titulo
} from './styles.js';

import PointRiskTag from '../../assets/component/PointRiskTag/index.js';

const RiskPointList = () => {
  const [riskPoints, setRiskPoints] = useState([]);

  console.log('Entrei em RiskPointList')

  const fetchRiskPoints = async () => {
    try {
      const response = await axios.get('http://192.168.1.2:3333/getriskpoints'); 
      setRiskPoints(response.data);

      console.log('Página RiskPointList - Pontos de Risco', response.data);

    } catch (error) {
      console.error('Erro ao buscar pontos de risco:', error);

    }
  };

  useEffect(() => {
    fetchRiskPoints();
  }, []);


  return (
    <ListContainer>
      <StatusBar backgroundColor='#f0f0f1' />
      <Titulo>Lista de Pontos de Risco</Titulo>

      <ScrollView>
        {riskPoints.map((point) => (
          <PointRiskTag 
            key={point._id} 
            id={point._id}
            refValue={point.ref} 
            title={point.title} 
            description={point.description} 
            image={point.image}
            location={point.location}
          />
        ))}
      </ScrollView>
    </ListContainer>
  )
}

export default RiskPointList;