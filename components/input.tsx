import React, {useEffect, useRef, useState} from 'react';

import {View, Animated, TextInput, StyleSheet} from 'react-native';

export const CustomInput = (props: any) => {
  const {
    value = '',
    onChangeText,
    multiline,
    editable,
    style,
    containerStyle,
    numberOfLines,
    placeholder = '',
    label = '',
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || value ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value, animatedValue]);

  const labelStyle = {
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [45, 25],
    }),
  };
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <TextInput
        style={[styles.inputStyle, style]}
        value={value}
        multiline={multiline}
        editable={editable}
        numberOfLines={numberOfLines}
        placeholder={isFocused ? placeholder : ''}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  label: {
    position: 'absolute',
    left: 20,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  inputStyle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: '#D9DBDD',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#02111A',
    fontWeight: '500',
    marginTop: 20,
  },
});

