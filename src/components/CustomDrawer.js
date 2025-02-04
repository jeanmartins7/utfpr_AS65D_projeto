import React,{useEffect, useState} from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { auth_mod } from '../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const CustomDrawer = (props) => {

    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        // Observa mudanças na autenticação
        const unsubscribe = onAuthStateChanged(auth_mod, (user) => {
          if (user) {
            setUserEmail(user.email); 
          } else {
            setUserEmail(""); 
          }
        });

        return () => unsubscribe(); 
  }, [auth_mod])

  const handleLogout = async () => {
    await signOut(auth_mod);
  };

    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle = {{ display: 'flex', flex: 1, justifyContent: 'space-between'}}
            style = {{ backgroundColor: '#2B1F5C'}}
        >
            <View style={estilos.containerInfo}>

                <View style={estilos.containerEmail}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', fontSize: 26}}>{userEmail}</Text>
                </View>

                <View style={estilos.containerDivisoria}>
                    <Divider style={{ borderColor: '#FFFFFF', width:  '80%', borderWidth: 0.8}}/>
                </View>

                <DrawerItemList {...props} />

            </View>

            <DrawerItem
                contentContainerStyle = {{ justifyContent: 'flex-end' }}
                label="Sair"
                labelStyle = {{ display: 'flex', color: 'white', fontFamily: 'AveriaLibre-Regular', fontSize: 26 }}
                icon={() => <Ionicons name="log-out-outline" size={43} color="white" />}
                onPress={() => {
                    handleLogout,
                    props.navigation.getParent().reset({
                        index: 0, 
                        routes: [{ name: 'Login' }],
                      });
                } }
            />

        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    containerInfo: {
        display: 'flex',
        paddingVertical: 20
    },
    containerEmail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20
    },
    containerDivisoria: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20
    }
})

export default CustomDrawer;