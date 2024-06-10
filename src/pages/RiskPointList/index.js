import React from 'react'
import {
  ListContainer,
  ScrollView,
  Titulo
} from './styles.js';

import PointRiskTag from '../../assets/component/PointRiskTag/index.js';

const RiskPointList = () => {
  return (
    <ListContainer>
      <Titulo>Lista de Pontos de Risco</Titulo>

      <ScrollView>
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
        <PointRiskTag />
      </ScrollView>
    </ListContainer>
  )
}

export default RiskPointList;