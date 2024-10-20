import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Text, Button, Card } from 'react-native-paper';

const ProfilScreen = () => {
    const handleEditProfile = () => {
        // Logique pour éditer le profil
        console.log('Editer le profil');
    };

    const handleLogout = () => {
        // Logique pour se déconnecter
        console.log('Se déconnecter');
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <Avatar.Image 
                        source={require('../assets/profile.jpg')} // Correction ici
                        size={80}
                    />
                    <Title style={styles.title}> Aliou Diallo</Title>
                    <Caption style={styles.caption}>dialloaliouamadou10@gmail.com</Caption>
                </Card.Content>
            </Card>

            <View style={styles.infoSection}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nom :</Text>
                    <Text style={styles.value}> Aliou Diallo</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Email :</Text>
                    <Text style={styles.value}>dialloaliouamadou10@gmail.com</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Téléphone :</Text>
                    <Text style={styles.value}>+222 37795728</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleEditProfile} style={styles.button}>
                    Editer le profil
                </Button>
                <Button mode="outlined" onPress={handleLogout} style={styles.button}>
                    Se déconnecter
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    card: {
        marginBottom: 20,
    },
    cardContent: {
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        color: '#888',
    },
    infoSection: {
        marginVertical: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
    },
    label: {
        fontWeight: '600',
        color: '#333',
    },
    value: {
        color: '#777',
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        marginVertical: 10,
    },
});

export default ProfilScreen;
