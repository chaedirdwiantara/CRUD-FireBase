import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CardKontak = ({id, kontakItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailKontak', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
        <Text style={styles.noHP}>No. HP : {kontakItem.nomorHP}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} />
        <FontAwesomeIcon
          icon={faTimes}
          color={'red'}
          size={25}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noHP: {
    color: 'grey',
    fontSize: 12,
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
