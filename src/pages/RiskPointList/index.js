import React, { useState, useEffect, useCallback  } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { IP_CALL, PORT} from '@env';
import {
  ListContainer,
  ScrollView,
  Titulo
} from './styles.js';

import PointRiskTag from '../../assets/component/PointRiskTag/index.js';

const RiskPointList = () => {
  const [riskPoints, setRiskPoints] = useState([]);

  console.log('ENTROU NA PÁGINA LISTAR PR')

  const fetchRiskPoints = async () => {
    try {
      const response = await axios.get(`http://${IP_CALL}:${PORT}/getriskpoints`); 
      setRiskPoints(response.data);
      console.log('GET em pontos de risco ', response.data);
    } catch (error) {
      console.error('Erro ao buscar pontos de risco:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRiskPoints();
    }, [])
  );
  const handleDeleteRiskPoint = (id) => {
    setRiskPoints(prevRiskPoints => prevRiskPoints.filter(point => point._id !== id));
  };

  return (
    <ListContainer>
      <StatusBar backgroundColor='rgba(244, 134, 4, 0.1)' />
      <Titulo>Lista de Pontos de Risco</Titulo>

      <ScrollView>
        {riskPoints.map((point) => (
          <PointRiskTag 
            key={point._id} 
            id={point._id}
            refValue={point.ref} 
            title={point.title} 
            description={point.description} 
            status={point.status}  
            statusDescription={point.statusDescription}
            image={point.image}
            location={point.location}
            onDelete={handleDeleteRiskPoint}
          />
        ))}
      </ScrollView>
    </ListContainer>
  )
}

export default RiskPointList;