import { View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

// COMPONENTS
import ImagePicker from '../components/ImagePicker';
import InputField from '../components/InputField';
import { showOptions } from '../components/ImagePickerOptions';
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import DeleteButton from '../components/DeleteButton';

import { validateFields } from '../services/validations';
import { styles } from '../styles/pesquisaStyles';

const ModificarPesquisa = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [txtName, setName] = useState('Carnaval 2024')
  const [txtDate, setDate] = useState('16/02/2024')
  const [image, setImage] = useState({ uri: Image.resolveAssetSource(require('../../assets/images/Vector.png')).uri })

  const [nameErro, setNameErro] = useState('')
  const [dateErro, setDateErro] = useState('')

  const goToHome = () => {
    if (validateFields(txtName, txtDate, setNameErro, setDateErro, image)) {
      props.navigation.replace("Drawer");
    }
  };

  const Delete = () => {
    props.navigation.replace("Drawer")
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ModificarPesquisa