import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const Card = (props) => {
  const { texto, data, imagem} = props;

  return (
    <View style={estilos.containerCard}>
      <View style={estilos.card}>
        <Image source={imagem} style={{width: 60, height: 60}}/>
        <Text style={estilos.textoNome}>{texto}</Text>
        <Text style={estilos.textoData}>{data}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  containerCard: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 150,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#00000040',
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 4
  },
  textoNome: {
      color: '#3F92C5',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 26,
      fontWeight: 400,
      lineHeight: 42.96,
      textAlign: 'center',
  },
  textoData: {
      color: '#8B8B8B',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 19.09,
      textAlign: 'center'
  }
})

export default Card;