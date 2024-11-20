import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/Home';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{ 
            headerStyle: { backgroundColor: '#372775'},
            headerTitle: '',
            headerTintColor: '#FFFFFF',
            drawerLabelStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 24 }
            }}

            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <DrawerNavigator.Screen 
                name="Pesquisas" 
                component={Home} 
                options={{
                    drawerIcon: () => <Icon name="description" size={43} color= 'white'/>,
                    drawerActiveBackgroundColor: '#2B1F5C',
                    drawerActiveTintColor: '#FFFFFF'
                }}
            />
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;