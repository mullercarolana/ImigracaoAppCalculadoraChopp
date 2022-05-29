import React from 'react';
import { StyleSheet, Vibration, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

const CalculatorScreen = () => {
    const [number1, onChangeText1] = React.useState(null);
    const [number2, onChangeText2] = React.useState(null);
    const [count, setCount] = React.useState(0);

    const onPress = () => Vibration.vibrate(setCount(1.5 * number1 * number2));

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    CALCULE SUA FESTA COM CHOPP IMIGRAÇÃO
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={number1}
                    placeholder="Quantas pessoas"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={number2}
                    placeholder="Quantas horas de festa"
                    keyboardType="numeric"
                />
                <Button
                    title="CALCULAR"
                    color="#DBBC1A"
                    onPress={onPress}
                />
                <Text style={styles.result}>{count}L</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: "#A5260A",
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 8,
        paddingBottom: 10
    },
    result: {
        textAlign: 'center',
        color: "#A5260A",
        fontWeight: 'bold',
        fontSize: 60,
        marginVertical: 8,
        paddingTop: 20
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default CalculatorScreen;