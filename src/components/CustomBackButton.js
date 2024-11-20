import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomBackButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.botao}
    onPress={() => navigation.goBack()}
  >
    <MaterialIcons name="arrow-back" size={30} color="#573FBA" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    botao: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 10,
    }
});

export default CustomBackButton;
