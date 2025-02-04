import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  label: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 26,
    fontWeight: '400',
    marginTop: 20,
  },
  input: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    fontWeight: 400
  },
  errorText: {
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    marginTop: 5,
  },
  imagePickerButton: {
    width: '60%',
    height: '100',
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerText: {
    color: "#939393",
    fontSize: 20,
    fontFamily: "AveriaLibre-Regular",
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#49B976',
    borderColor: '#37BD6D',
    borderRadius: 0,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 28,
  },
});
