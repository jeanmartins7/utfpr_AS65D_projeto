import { validateDate } from '../components/ValidationDate';
import { Alert } from 'react-native';

export const validateFields = (txtName, txtDate, setNameErro, setDateErro, image) => {
    let validation = true;
  
    if (txtName.trim() === '') {
      setNameErro('Preencha no nome da pesquisa');
      validation = false;
    } else {
      setNameErro('');
    }
  
    if (txtDate.trim() === '' || !validateDate(txtDate)) {
      setDateErro('Preencha a data');
      validation = false;
    } else {
      setDateErro('');
    }
  
    if (!image) {
      Alert.alert("Erro", "Adicione uma imagem antes de continuar.");
      validation = false;
    }
  
    return validation;
  };
  