//Forma de utilizar un componente con estilo personalizado
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>; //combinar los estilos

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize:18
    }
});

export default TitleText;