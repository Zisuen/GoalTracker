import {StyleSheet} from 'react-native';

export const stylesLogin = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f1ffff',
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      alignSelf: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    formContainer: {
      marginHorizontal: 30,
      backgroundColor: '#ffffff',
      paddingHorizontal: 30,
      paddingVertical: 30,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputContainerTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#424242',
      marginBottom: 10,
    },
    inputField: {
      borderRadius: 4,
      backgroundColor: '#cbddff',
      fontSize: 14,
      paddingVertical: 10,
      paddingLeft: 10,
    },
    btnTitle: {
      fontSize: 15,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    btn: {
      borderRadius: 4,
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#3c8dff',
      marginBottom: 5,
    },
  });
  return styles;
};
