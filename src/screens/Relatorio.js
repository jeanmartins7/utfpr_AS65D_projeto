import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, Image } from 'react-native';

const Relatorio = () => {

    const items = [
        { cor: '#f7d17b', legenda: 'Excelente' },
        { cor: '#6a81ff', legenda: 'Bom' }, 
        { cor: '#00d7a2', legenda: 'Neutro' },
        { cor: '#ff5986', legenda: 'Ruim' },
        { cor: '#00ded7', legenda: 'Péssimo' }
      ];

    return(
        <View style={estilos.fundo} >
            <View style={estilos.containerGrafico}>
                <Image source={require('../../assets/images/pie-chart.png')} style={{width: 270, height: 270}}/>
            </View>
            <View style={estilos.containerLegenda}>
            {items.map((item, index) => (
                <View key={index} style={estilos.item}>
                <View style={[estilos.icon, { backgroundColor: item.cor }]} />
                <Text style={estilos.legenda}>{item.legenda}</Text>
                </View>
                ))}
            </View>
        </View>
    );

}

const estilos = StyleSheet.create({
    fundo: {
      display: 'flex',
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#372775',
      paddingHorizontal: 20
    },
    containerGrafico: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLegenda: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
      },
      icon: {
        width: 24,
        height: 24,
        marginRight: 8
      },
      legenda: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular'
      },
  })

export default Relatorio