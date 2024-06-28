import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CustomModal} from './modal';

export const NumberInput = (props: any) => {
  const {
    countryData,
    countryCodeNumber,
    mobileNumberValue,
    onChangeMobileNumber,
    openModal,
    handleModalOpen,
    handleModalClose,
    handleSelectCountryCode,
    editable = false,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={editable ? styles.inputContainers : styles.disableStyle}>
        <View style={styles.imageContainer}>
          <Image
            source={
              countryData?.find((item: any) => item?.code === countryCodeNumber)
                ?.image
            }
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.selectCode} onPress={handleModalOpen}>
          <Text style={styles.countryCode}>{countryCodeNumber}</Text>
          <View style={styles.imageStyle}>
            <Image
              source={require('./../assets/downArrow.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TextInput
          style={[styles.textInput, styles.textInputValue]}
          onChangeText={onChangeMobileNumber}
          value={mobileNumberValue}
          placeholder={mobileNumberValue !== '' ? '' : 'Mobile number'}
          keyboardType="phone-pad"
          editable={editable}
        />
        {mobileNumberValue !== '' && (
          <Text style={[mobileNumberValue && styles.placeholderTexts]}>
            Mobile Number
          </Text>
        )}
      </View>
      <CustomModal
        handleSelectCountryCode={handleSelectCountryCode}
        openModal={openModal}
        countryData={countryData}
        handleModalClose={handleModalClose}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  inputContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9DBDD',
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  disableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#E6EAEB',
  },

  imageContainer: {
    width: 23,
    height: 23,
  },

  imageStyle: {
    width: 15,
    marginLeft: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  selectCode: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
  },

  textInput: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },

  textInputValue: {
    fontSize: 16,
    color: '#02111A',
    fontWeight: '500',
    marginTop: 5,
  },

  countryCode: {
    width: 30,
    fontSize: 16,
    fontWeight: '500',
    color: '#02111A',
  },

  placeholderTexts: {
    position: 'absolute',
    left: 123,
    top: 5,
    fontSize: 14,
    color: '#4E585E',
  },
});
