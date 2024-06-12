import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  ListContainer,
  ScrollView,
  Titulo
} from './styles.js';

import PointRiskTag from '../../assets/component/PointRiskTag/index.js';

const RiskPointList = () => {
  const [riskPoints, setRiskPoints] = useState([]);

  console.log('Vai buscar pontos de Risco')

  const fetchRiskPoints = async () => {
    try {
      const response = await axios.get('http://192.168.1.2:3333/getriskpoints'); 
      setRiskPoints(response.data);

    } catch (error) {
      console.error('Erro ao buscar pontos de risco:', error);

    }
  };

  useEffect(() => {
    fetchRiskPoints();
  }, []);


  return (
    <ListContainer>
      <Titulo>Lista de Pontos de Risco</Titulo>

      <ScrollView>
        {riskPoints.map((point) => (
          <PointRiskTag 
            key={point._id} 
            refValue={point.ref} 
            title={point.title} 
            description={point.description} 
          />
        ))}
      </ScrollView>
    </ListContainer>
  )
}

export default RiskPointList;