import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';

export const CustomModal = (props: any) => {
  const {countryData, openModal, handleModalClose, handleSelectCountryCode} =
    props;

  return (
    <Modal
      transparent={true}
      visible={openModal}
      onRequestClose={handleModalClose}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={handleModalClose}>
        <View style={styles.modalView}>
          <ScrollView>
            {countryData?.map((code: any, i: number) => (
              <TouchableOpacity
                key={i}
                style={styles.modalCode}
                onPress={() => handleSelectCountryCode(code)}>
                <Text>{code?.code}</Text>
                <Image
                  source={code?.image}
                  style={styles.imageModal}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },

  imageModal: {
    width: 30,
    height: 30,
    paddingLeft: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalView: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },

  modalCode: {
    padding: 10,
    flexDirection: 'row',
    rowGap: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
