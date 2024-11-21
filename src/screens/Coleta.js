import React from "react";
import { View , Text} from "react-native";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";

const Coleta = (props) =>{

    const goAgradecPesq = () => {
        props.navigation.navigate('AgradecPesquisa')
      }

    return(
        <View style={estilos.fundo}>
            <Text style={estilos.textoNome}>O que você achou do Carnaval 2024?</Text>
        <View style={estilos.containerColetas}>
            <TouchableOpacity style={estilos.containerCards} onPress={goAgradecPesq} >
                <Icon name="sentiment-very-dissatisfied" size={100} color="#D71616" />
                <Text style={estilos.textoColeta}>Péssimo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.containerCards} onPress={goAgradecPesq}>
                <Icon name="sentiment-dissatisfied" size={100} color="#FF360A" />
                <Text style={estilos.textoColeta}>Ruim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.containerCards} onPress={goAgradecPesq}>
                <Icon name="sentiment-neutral" size={100} color="#FFC632" />
                <Text style={estilos.textoColeta}>Neutro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.containerCards} onPress={goAgradecPesq}>
                <Icon name="sentiment-satisfied" size={100} color="#37BD6D" />
                <Text style={estilos.textoColeta}>Bom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.containerCards} onPress={goAgradecPesq}>
                <Icon name="sentiment-very-satisfied" size={100} color="#25BC22" />
                <Text style={estilos.textoColeta}>Excelente</Text>
            </TouchableOpacity>

        </View>

        </View>
    )


}
const estilos = StyleSheet.create({
    fundo: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent:'space-around',
      flexDirection: 'column',
      backgroundColor: '#372775',
      paddingVertical: 50
    },
    textoNome: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 26,
        textAlign: 'center',
    },
    containerColetas: {
      display: 'flex',
      flex: 1,
      width: '90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection:'row'
    },
    containerCards: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 8
    },
    textoColeta: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        textAlign: 'center',
    },
  })


export default Coleta;