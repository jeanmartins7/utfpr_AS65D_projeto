import React from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from '../styles/pesquisaStyles';

const InputField = ({ label, value, onChangeText, error, icon }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        textColor='#3F92C5'
        onChangeText={onChangeText}
        style={styles.input}
        mode="outlined"
        error={!!error}
        right={icon && <TextInput.Icon icon={icon} size={40} color="#999998" />}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

export default InputField;
