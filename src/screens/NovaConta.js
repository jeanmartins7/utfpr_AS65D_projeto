import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

// COMPONENTS
import InputField from '../components/InputField';

import { validateFields } from '../services/validationNovaConta';
import { styles } from '../styles/pesquisaStyles';

const NovaConta = (props) => {
  const [txtEmail, setEmail] = useState('jurandir.pereira@hotmail.com');
  const [txtSenha, setSenha] = useState('*********');
  const [txtRepetirSenha, setRepetirSenha] = useState('');

  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');
  const [repetirSenhaErro, setRepetirSenhaErro] = useState('');

  const goToLogin= () => {
    if (validateFields(txtEmail, txtSenha, txtRepetirSenha, setEmailErro, setSenhaErro, setRepetirSenhaErro)) {
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

          <InputField
            label="Senha"
            value={txtSenha}
            onChangeText={setSenha}
            error={senhaErro}
            icon={null}
          />
          
          <InputField
            label="Repetir senha"
            value={txtRepetirSenha}
            onChangeText={setRepetirSenha}
            error={repetirSenhaErro}
            icon={null}
          />

          <Button style={styles.button} labelStyle={styles.buttonText} onPress={goToLogin}>
            CADASTRAR
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NovaConta;
