import React from "react";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native";
import CardAcoes from "../components/CardAcoes";



const AcoesPesquisa = (props) => {

    const goToModificarPesquisa = () => {
      props.navigation.navigate('ModificarPesquisa')
    }

    const goToNovaColeta = () => {
        props.navigation.navigate('Coleta')
      }

    const gotoRelatorio = () => {
      props.navigation.navigate('Relatorio')
    }

    return(
        <View style={estilos.fundo} >
            <TouchableOpacity style={estilos.containerCards} onPress={goToModificarPesquisa}>
            <CardAcoes 
            texto="Modificar"
            icone="create-outline"
            corIcone="#F9F9F9"
            />
            </TouchableOpacity>

            <TouchableOpacity style={estilos.containerCards} onPress={goToNovaColeta}> 
            <CardAcoes 
            texto="Coletar Dados"
            icone="list-outline"
            corIcone="#F9F9F9"
            />
            </TouchableOpacity>

            <TouchableOpacity style={estilos.containerCards} onPress={gotoRelatorio}>
            <CardAcoes 
            texto="Relatório"
            icone="pie-chart-outline"
            corIcone="#F9F9F9"
            />
            </TouchableOpacity>
            
        </View>
    );

}

const estilos = StyleSheet.create({
    fundo: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#372775',
      paddingVertical: 8
    },
    containerPesquisas: {
      display: 'flex',
      flex: 1,
      width: '90%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    containerCards: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8
    }
  })

export default AcoesPesquisa