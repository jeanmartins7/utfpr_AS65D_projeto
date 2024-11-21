import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import Drawer from './Drawer';
import NovaPesquisa from '../screens/NovaPesquisa';
import ModificarPesquisa from '../screens/ModificarPesquisa';
import AcoesPesquisa from '../screens/AcoesPesquisa';
import Coleta from '../screens/Coleta';
import AgradecPesquisa from '../screens/AgradecPesquisa';
import CustomBackButton from '../components/CustomBackButton';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [txtName, setName] = useState('Carnaval')

  return (
    <Stack.Navigator
      //initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#2B1D62' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 30,
          fontWeight: '400',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name="Drawer" 
        component={Drawer} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NovaPesquisa"
        component={NovaPesquisa}
        options={({ navigation }) => ({
          title: 'Nova pesquisa',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AcoesPesquisa"
        component={AcoesPesquisa}
        options={({ navigation }) => ({
          title: txtName,
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ModificarPesquisa"
        component={ModificarPesquisa}
        options={({ navigation }) => ({
          title: 'Modificar pesquisa',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Coleta"
        component={Coleta}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgradecPesquisa"
        component={AgradecPesquisa}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
