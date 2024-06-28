import React, {useState} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {CustomInput} from './components/input';
import {NumberInput} from './components/numberInput';

interface RegisterProps {
  name: string;
  email: string;
  address: string;
  code: string;
  number: string;
  modalOpen: boolean;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#CCEBE1',
  };

  const initialData = {
    name: '',
    email: '',
    address: '',
    code: '+96',
    number: '',
    modalOpen: false,
  };

  const [registerData, setRegisterData] = useState<RegisterProps>(initialData);

  const handleChange = (key: string, value: any) => {
    setRegisterData({
      ...registerData,
      [key]: value,
    });
  };

  const handleModalClose = () => {
    handleChange('modalOpen', false);
  };
  const handleModalOpen = () => {
    handleChange('modalOpen', true);
  };

  const handleChangeCountryData = (val: any) => {
    handleChange('code', val?.code);
    handleChange('modalOpen', false);
  };

  const countryCodes = [
    {code: '+91', image: require('./assets/india.png')},
    {code: '+1', image: require('./assets/america.png')},
    {code: '+44', image: require('./assets/canada.png')},
    {code: '+96', image: require('./assets/saudi.webp')},
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Image source={require('./assets/group.png')} />
          <Text style={styles.titleText}>Earn loyalty for every purchase</Text>
          <View style={styles.drawerStyle}>
            <Text style={styles.drawerTitle}>Profile details</Text>
            <Text style={styles.descriptionText}>
              Please provide your basic details to proceed further
            </Text>
            <ScrollView keyboardDismissMode="interactive">
              <CustomInput
                containerStyle={styles.boxStyle}
                onChangeText={(value: any) => handleChange('name', value)}
                value={registerData?.name}
                label="Name"
                placeholder="Enter your name"
              />
              <NumberInput
                countryData={countryCodes}
                countryCodeNumber={registerData?.code}
                mobileNumberValue={registerData?.number}
                openModal={registerData?.modalOpen}
                onChangeMobileNumber={(value: any) =>
                  handleChange('number', value)
                }
                handleModalOpen={handleModalOpen}
                handleModalClose={handleModalClose}
                handleSelectCountryCode={handleChangeCountryData}
                editable={false}
              />
              <CustomInput
                containerStyle={styles.boxStyle}
                onChangeText={(value: any) => handleChange('email', value)}
                value={registerData?.email}
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                containerStyle={styles.addressStyle}
                onChangeText={(value: any) => handleChange('address', value)}
                value={registerData?.address}
                numberOfLines={4}
                multiline={true}
                label="Address"
                placeholder="Type you address"
              />
            </ScrollView>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Alert.alert('Hi Suriya')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#02111A',
    width: '50%',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 26,
  },
  drawerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
    textAlign: 'center',
    marginTop: 12,
  },
  descriptionText: {
    color: '#4E585E',
    textAlign: 'center',
    fontSize: 14,
    paddingLeft: 72,
    paddingRight: 72,
    marginTop: 12,
  },
  drawerStyle: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 530,
    padding: 16,
    position: 'relative',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#30AF89',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },

  boxStyle: {
    marginBottom: 10,
  },
  addressStyle: {
    marginBottom: 70,
    marginTop: 0,
  },
});

export default App;
