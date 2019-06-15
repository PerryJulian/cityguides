import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Alert, TouchableHighlight, Modal } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';

export class ParkInfoKey extends React.Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modal}>
                        <View>
                            <Text>Hello World!</Text>
                        </View>
                        <View>
                            <Touchable
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </Touchable>
                        </View>
                    </View>
                </Modal>

                <Touchable
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <MaterialCommunityIcons
                        name='help-circle-outline'
                        style={styles.infoButton}
                        size={25}
                        color='blue'/>
                </Touchable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modal: {
        backgroundColor: '#fff',
        marginTop: 50,
        justifyContent: 'center'
    },
    infoButton: {
        marginRight: 10
    }
});
