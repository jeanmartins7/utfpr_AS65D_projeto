import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = (props) => {
  const { texto, data, icone, corIcone} = props;

  return (
    <View style={estilos.containerCard}>
      <View style={estilos.card}>
        <Icon name={icone} size={60} color={corIcone}/>
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
  },
  textoNome: {
      color: '#3F92C5',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 26,
      lineHeight: 42.96,
      textAlign: 'center',
  },
  textoData: {
      color: '#8B8B8B',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 14,
      textAlign: 'center'
  }
})

export default Card;