import { View, Text, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// COMPONENTS
import InputField from '../components/InputField';

import { validateFields } from '../services/validationLogin';
import { styles } from '../styles/pesquisaStyles';

const Login = (props) => {
  const [txtEmail, setEmail] = useState('jurandir.pereira@hotmail.com');
  const [txtSenha, setSenha] = useState('*********');

  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');
  const [erro, setErro] = useState('');

  const goToHome = () => {
    if (validateFields(txtEmail, txtSenha, setEmailErro, setSenhaErro, setErro)) {
      props.navigation.replace("Drawer");
    }
  }

  const goToNovaConta= () => {
    props.navigation.navigate('NovaConta');
  }

  const goToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={estilos.titulo}>
            <Text style={estilos.texto}>Satisfying.you</Text>
            <Icon name="sentiment-satisfied-alt" size={62.5} color="white"/>
          </View>
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

        {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

          <Button style={styles.button} labelStyle={styles.buttonText} onPress={goToHome}>
            Entrar
          </Button>

          <Button style={estilos.botaoCadastro} labelStyle={styles.buttonText} onPress={goToNovaConta}>
            Criar minha conta
          </Button>

          <Button style={estilos.botaoSenha} labelStyle={styles.buttonText} onPress={goToRecuperarSenha}>
            Esqueci minha senha
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const estilos = StyleSheet.create({
    titulo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    texto: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 64,
      color: '#FFFFFF'
    },
    botaoCadastro: {
        width: '100%',
        height: 50,
        backgroundColor: '#419ED7',
        borderColor: '#419ED7',
        borderRadius: 0,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    botaoSenha: {
        width: '100%',
        height: 50,
        backgroundColor: '#B5C7D1',
        borderColor: '#B5C7D1',
        borderRadius: 0,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
});

export default Login
