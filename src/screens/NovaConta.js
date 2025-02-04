import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth_mod } from '../config/firebase';

// COMPONENTS
import InputField from '../components/InputField';
import InputPassword from '../components/InputPassword';

import { validateFields } from '../services/validationNovaConta';
import { styles } from '../styles/pesquisaStyles';

const NovaConta = (props) => {
  const [txtEmail, setEmail] = useState('');
  const [txtSenha, setSenha] = useState('');
  const [txtRepetirSenha, setRepetirSenha] = useState('');

  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');
  const [repetirSenhaErro, setRepetirSenhaErro] = useState('');

  

  const goToLogin= () => {
    if (validateFields(txtEmail, txtSenha, txtRepetirSenha, setEmailErro, setSenhaErro, setRepetirSenhaErro)) {
      createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
        .then((userCredential) => {
            console.log("Usuario Criado Com Sucesso:" + JSON.stringify(userCredential));
            props.navigation.replace("Login");
        })
        .catch((error) => {
            console.log("Erro na criação do usuario:" + JSON.stringify(error))
            alert("Erro na criação do usuario:" + JSON.stringify(error));
            })
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

          <InputPassword
            label="Senha"
            value={txtSenha}
            onChangeText={setSenha}
            error={senhaErro}
            type="password"
            icon={null}
          />
          
          <InputPassword
            label="Repetir senha"
            value={txtRepetirSenha}
            onChangeText={setRepetirSenha}
            error={repetirSenhaErro}
            type="password"
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
