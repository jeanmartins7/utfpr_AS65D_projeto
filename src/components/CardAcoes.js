import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardAcoes = (props) => {
  const { texto, icone, corIcone} = props;

  return (
    <View style={estilos.containerCard}>
      <View style={estilos.card}>
        <Icon name={icone} size={60} color={corIcone}/>
        <Text style={estilos.textoNome}>{texto}</Text>
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
      backgroundColor: '#312464',
      borderRadius: 10,

  },
  textoNome: {
      color: '#FFFFFF',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 26,
      textAlign: 'center',
  }
})

export default CardAcoes;