import { View, Text } from "react-native";
import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";

const AgradecPesquisa = (props) =>{

    useEffect(() => { const timer = setTimeout(() => { 
        props.navigation.navigate('Coleta'); 
    }, 3000); 
    return () => clearTimeout(timer); 
}, [props]);

return(
    <View style={estilos.fundo}>
        <Text style={estilos.textoNome}>Obrigado por participar da pesquisa!</Text>
        <Text style={estilos.textoNome}>Aguardamos você no próximo ano!</Text>

    </View>

)


}
const estilos = StyleSheet.create({
    fundo: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#372775',
      paddingVertical: 8
    },
    textoNome: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        textAlign: 'center',
        padding:20
    },
  })

export default AgradecPesquisa;