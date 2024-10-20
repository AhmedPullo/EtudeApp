import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { List, Avatar, Divider } from 'react-native-paper';

const notifications = [
    {
        id: '1',
        title: 'Absence',
        description: 'Votre enfant a été absent le 01/08/2024.',
        icon: 'alert-circle-outline',
        time: 'Il y a 2 heures'
    },
    {
        id: '2',
        title: 'Note ajoutée',
        description: 'Une nouvelle note a été ajoutée pour le cours de mathématiques.',
        icon: 'clipboard-outline',
        time: 'Il y a 5 heures'
    },
    {
        id: '3',
        title: 'Rappel de paiement',
        description: 'Votre paiement est dû le 10/08/2024.',
        icon: 'credit-card-outline',
        time: 'Hier'
    },
];

const NotifScreen = () => {
    const renderItem = ({ item }) => (
        <View>
            <List.Item
                title={item.title}
                description={item.description}
                left={props => <Avatar.Icon {...props} icon={item.icon} />}
                right={props => <Text {...props} style={styles.timeText}>{item.time}</Text>}
            />
            <Divider style={styles.divider} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    timeText: {
        alignSelf: 'center',
        color: '#888',
        marginRight: 10,
    },
    divider: {
        marginVertical: 8, // Space between items
    },
});

export default NotifScreen;
