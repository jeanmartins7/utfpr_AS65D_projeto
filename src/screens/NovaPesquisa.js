import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

// COMPONENTS
import ImagePicker from '../components/ImagePicker';
import InputField from '../components/InputField';
import { showOptions } from '../components/ImagePickerOptions';

import { validateFields } from '../services/validations';
import { styles } from '../styles/pesquisaStyles';

const NovaPesquisa = (props) => {
  const [txtName, setName] = useState('');
  const [txtDate, setDate] = useState('');
  const [image, setImage] = useState('');

  const [nameErro, setNameErro] = useState('');
  const [dateErro, setDateErro] = useState('');

  const goToHome = () => {
    if (validateFields(txtName, txtDate, setNameErro, setDateErro, image)) {
      props.navigation.replace("Home");
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
            label="Nome"
            value={txtName}
            onChangeText={setName}
            error={nameErro}
            icon={null}
          />

          <InputField
            label="Data"
            value={txtDate}
            onChangeText={setDate}
            error={dateErro}
            icon="calendar-month"
          />

          <Text style={styles.label}>Imagem</Text>
          <ImagePicker
            image={image}
            onPress={() => showOptions(setImage)}
          />

          <Button style={styles.button} labelStyle={styles.buttonText} onPress={goToHome}>
            CADASTRAR
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NovaPesquisa;
