import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const ButtonNovaPesquisa = (props) => {
    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        display: 'flex',
        backgroundColor: '#37BD6D',
        paddingVertical: 8,
        width: '100%',
        height: 50
    },
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
        fontWeight: 400,
        lineHeight: 33.41,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

export default ButtonNovaPesquisa