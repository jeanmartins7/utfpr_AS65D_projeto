import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { db } from '../config/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const Relatorio = () => {

  const screenWidth = Dimensions.get('window').width;

  const id = useSelector((state) => state.pesquisa.id);
  const [dados, setDados] = useState({
    excelente: 0,
    bom: 0,
    neutro: 0,
    ruim: 0,
    pessimo: 0,
  });

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, "pesquisas", id);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const dadosPesquisa = docSnap.data();
        setDados(dadosPesquisa.coleta || {});
      } else {
        console.log("Nenhum dado encontrado para esta pesquisa.");
      }
    });

    return () => unsubscribe();
  }, [id]);


  const data = [
    { legend: 'Excelente', value: dados.excelente, color: '#f7d17b' },
    { legend: 'Bom', value: dados.bom, color: '#6a81ff' },
    { legend: 'Neutro', value: dados.neutro, color: '#00d7a2' },
    { legend: 'Ruim', value: dados.ruim, color: '#ff5986' },
    { legend: 'Péssimo', value: dados.pessimo, color: '#00ded7' },
  ];

  return(
    <View style={estilos.fundo} >
      <View style={estilos.container}>
      <View style={estilos.containerGrafico}>
      <PieChart
        data = {data}
        width={screenWidth * 0.6}
        height={300}
        chartConfig={{
          backgroundColor: '#372775',
          backgroundGradientFrom: '#372775',
          backgroundGradientTo: '#372775',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'value'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        hasLegend={false}
        absolute
        />
      </View>
      <View style={estilos.containerLegenda}>
      {data.map((item, index) => (
        <View key={index} style={estilos.item}>
          <View style={[estilos.icon, { backgroundColor: item.color }]} />
            <Text style={estilos.legenda}>{item.legend}</Text>
          </View>
        ))}
      </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    paddingHorizontal: 20
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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