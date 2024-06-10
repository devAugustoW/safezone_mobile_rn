import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn';
import TabRoutes from './tabRoutes';
import Register from '../pages/Register';
import RiskPointList from '../pages/RiskPointList';
import EditRiskPoint from '../pages/EditRiskPoint';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen 
          name="HomeTab"
          component={TabRoutes}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{
            headerShown: true,
            headerTitle: 'Cadastro',
          }} />

        <Stack.Screen 
          name="RiskPointList" 
          component={RiskPointList} options={{
            headerShown: true,
            headerTitle: 'Lista de Pontos de Risco',
          }} />

          <Stack.Screen 
            name="EditRiskPoint" 
            component={EditRiskPoint} 
            options={{
              headerShown: false,
            }} />

      </Stack.Navigator>
      
  );
}

export default Routes;