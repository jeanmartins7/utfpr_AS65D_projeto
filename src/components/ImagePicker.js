import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../styles/pesquisaStyles';

const ImagePicker = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={styles.imagePickerButton} onPress={onPress}>
      {image && typeof image === 'object' && image.uri ? (
        <Image source={{ uri: image.uri }} style={{ width: '80%', height: '80%', alignSelf: 'center', resizeMode: 'contain' }} />
      ) : (
        <Text style={styles.imagePickerText}>Câmera/Galeria de imagens</Text>
      )}
    </TouchableOpacity>
  );
};

export default ImagePicker;
