import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const DeleteButton = ({ onPress }) => (
  <TouchableOpacity style={styles.botao} onPress={onPress}>
    <View style={styles.view}>
      <TextInput.Icon icon="delete" size={40} color="#FFF" onPress={onPress} />
      <Text style={styles.texto} onPress={onPress}>Apagar</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 60,
    marginBottom: 40
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  texto: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontWeight: '400',
    fontSize: 24,
    marginTop: 30
  }
});

export default DeleteButton;
