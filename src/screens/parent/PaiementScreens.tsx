import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';

const PaimentScreen = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePayment = () => {
        console.log('Paiement effectué');
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Paiement</Title>
                    <Paragraph>Veuillez entrer les détails de votre paiement</Paragraph>
                    <TextInput
                        label="Votre Numéro téléphone"
                        value={cardNumber}
                        onChangeText={text => setCardNumber(text)}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TextInput
                        label="Numéro expéditeur"
                        value={expiryDate}
                        onChangeText={text => setExpiryDate(text)}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TextInput
                        label="Montant"
                        style={styles.input}
                        secureTextEntry
                        keyboardType="numeric"
                    />
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={handlePayment}>
                        Payer
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5'
    },
    card: {
        margin: 16,
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#fff'
    },
});

export default PaimentScreen;
