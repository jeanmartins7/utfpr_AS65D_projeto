import React from 'react';
import { Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const options = {
  mediaType: 'photo',
  quality: 1,
};

export const pickImage = (setImage) => {
  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('Seleção de imagem cancelada');
    } else if (response.errorCode) {
      console.error('Erro na galeria:', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setImage(response.assets[0]);
    }
  });
};

export const takePhoto = (setImage) => {
  launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('Captura de foto cancelada');
    } else if (response.errorCode) {
      console.error('Erro na câmera:', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setImage(response.assets[0]);
    }
  });
};

export const showOptions = (setImage) => {
  Alert.alert(
    "Selecionar Imagem",
    "Escolha a origem da imagem",
    [
      { text: "Galeria", onPress: () => pickImage(setImage) },
      { text: "Câmera", onPress: () => takePhoto(setImage) },
      { text: "Cancelar", style: "cancel" },
    ]
  );
};
