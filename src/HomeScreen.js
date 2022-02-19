import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Image } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://www.cervejaimigracao.com.br/wp-content/uploads/2021/01/logo_imigracao_mobile.png'
                }}
            />
            <View>
                <Text style={styles.title}>
                    VOCÊ É MAIOR DE 18 ANOS?
                </Text>
                <Button
                    title="Sim"
                    color="#DBBC1A"
                    onPress={() => navigation.navigate('Calculator')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: "#A5260A",
        fontWeight: 'bold',
        paddingTop: 70,
        paddingBottom: 10
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        paddingTop: 60,
        paddingEnd: 50,
        width: 300,
        height: 30
    }
});

export default HomeScreen;