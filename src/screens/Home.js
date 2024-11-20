import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const Home = (props) => {

    const goToNovaPesquisa = () => {
        props.navigation.navigate("NovaPesquisa")
    }

    const goToModificarPesquisa = () => {
        props.navigation.navigate("ModificarPesquisa")
    }

    return (
        <View>
            <Text>Home</Text>
            <Button style={styles.botao} labelStyle={styles.rotulo} onPress={goToNovaPesquisa}>Nova Pesquisa</Button>
            <Button style={styles.botao} labelStyle={styles.rotulo} onPress={goToModificarPesquisa}>Modificar Pesquisa</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#37BD6D'
    },
    rotulo: {
        color: '#FFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
        fontWeight: '400',
        textAlign: 'center'
    }
});

export default Home