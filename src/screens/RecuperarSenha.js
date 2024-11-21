import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

// COMPONENTS
import InputField from '../components/InputField';

import { validateFields } from '../services/validationRecuperarSenha';
import { styles } from '../styles/pesquisaStyles';

const RecuperarSenha = (props) => {
  const [txtEmail, setEmail] = useState('jurandir.pereira@hotmail.com');
  const [emailErro, setEmailErro] = useState('');

  const goToLogin= () => {
    if (validateFields(txtEmail, setEmailErro)) {
      props.navigation.replace("Login");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <InputField
            label="E-mail"
            value={txtEmail}
            onChangeText={setEmail}
            error={emailErro}
            icon={null}
          />

          <Button style={styles.button} labelStyle={styles.buttonText} onPress={goToLogin}>
            RECUPERAR
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RecuperarSenha;
