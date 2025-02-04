import React from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const pickImage = async (setImage) => {
  const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!galleryPermission.granted) {
    Alert.alert("Permissão negada", "Permita o acesso à galeria para selecionar uma imagem.");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0]);
  }
};

export const takePhoto = async (setImage) => {
  const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
  if (!cameraPermission.granted) {
    Alert.alert("Permissão negada", "Permita o acesso à câmera para capturar uma imagem.");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0]);
  }
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
