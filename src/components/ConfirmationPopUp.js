import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ConfirmationPopUp = ({ visible, onConfirm, onCancel }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onCancel}
  >
    <View style={styles.popUp}>
      <View style={styles.view}>
        <Text style={styles.texto}>
          Tem certeza de apagar essa pesquisa?
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button
            style={[styles.botao, { backgroundColor: '#FF8383', marginRight: 10 }]}
            labelStyle={[styles.texto, { lineHeight: 28 }]}
            onPress={onConfirm}
          >
            SIM
          </Button>
          <Button
            style={[styles.botao, { backgroundColor: '#3F92C5' }]}
            labelStyle={[styles.texto, { lineHeight: 28 }]}
            onPress={onCancel}
          >
            CANCELAR
          </Button>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  popUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  view: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center'
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 0
  }
});

export default ConfirmationPopUp;
