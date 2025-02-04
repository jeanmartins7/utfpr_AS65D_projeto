import { StatusBar } from 'expo-status-bar';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import app from '../config/firebase'
import * as Network from 'expo-network'

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

  const db = getFirestore(app)
  const pesquisaCollection = collection(db, "pesquisas")

  const goToHome = async () => {
    if (validateFields(txtName, txtDate, setNameErro, setDateErro, image)) {
      const networkStatus = await Network.getNetworkStateAsync();

      if (!networkStatus.isConnected) {
        console.log("Sem conexão com a internet.");
        return;
      }

      const dbPesquisa = {
        txtName: txtName,
        txtDate: txtDate,
        image: image
      }

      addDoc(pesquisaCollection, dbPesquisa).then((docRef) => {
        console.log("Novo documento inserido com sucesso: " + docRef.id)
        props.navigation.replace("Home");
      }).catch((err) => {
        console.log("Erro: " + err)
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
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NovaPesquisa;
