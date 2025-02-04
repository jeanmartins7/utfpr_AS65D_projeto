import { StatusBar } from 'expo-status-bar';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { getFirestore,updateDoc, doc, deleteDoc } from 'firebase/firestore'
import app from '../config/firebase'

// COMPONENTS
import ImagePicker from '../components/ImagePicker';
import InputField from '../components/InputField';
import { showOptions } from '../components/ImagePickerOptions';
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import DeleteButton from '../components/DeleteButton';

import { validateFields } from '../services/validations';
import { styles } from '../styles/pesquisaStyles';

const ModificarPesquisa = (props) => {
  const id = useSelector((state) => state.pesquisa.id)
  const name = useSelector((state) => state.pesquisa.txtName)
  const date = useSelector((state) => state.pesquisa.txtDate)
  const imageUri = useSelector((state) => state.pesquisa.image)

  const [modalVisible, setModalVisible] = useState(false);
  const [txtName, setName] = useState(name || '');
  const [txtDate, setDate] = useState(date || '');
  const [image, setImage] = useState(imageUri || '');

  const [nameErro, setNameErro] = useState('')
  const [dateErro, setDateErro] = useState('')

  const db = getFirestore(app)

  const goToHome = () => {
    if (validateFields(txtName, txtDate, setNameErro, setDateErro, image)) {
      const pesquisaRef = doc(db, "pesquisas", id)

      updateDoc(pesquisaRef, {
        txtName: txtName,
        txtDate: txtDate,
        image: image
      }).then(() => {
        props.navigation.replace("Drawer");
      }).catch(error => {
        console.error("Erro ao atualizar a pesquisa:", error);
      });
    }
  };

  const Delete = () => {
    const pesquisaRef = doc(db, "pesquisas", id)
    deleteDoc(pesquisaRef).then(() => {
      props.navigation.replace("Drawer");
    }).catch(error => {
      console.error("Erro ao deletar a pesquisa:", error);
    });
  }

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
            SALVAR
          </Button>

          <ConfirmationPopUp
            visible={modalVisible}
            onConfirm={Delete}
            onCancel={() => setModalVisible(false)}
          />

          <DeleteButton onPress={() => setModalVisible(true)} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ModificarPesquisa