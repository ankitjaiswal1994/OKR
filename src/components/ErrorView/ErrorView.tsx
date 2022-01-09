import React from 'react';
import { Button, Text, View } from 'react-native';
import { errorStyle } from 'styles/styles';
import { PressEvent } from 'typings/events';

type ErrorViewTypes = {
  onRetry: PressEvent;
  message: string;
};

export const ErrorView = ({ onRetry, message }: ErrorViewTypes) => {
  return (
    <View style={errorStyle.errorView}>
      <View style={errorStyle.errorChildView}>
        <Text style={errorStyle.errorText}>{message}</Text>
        {onRetry ? <Button onPress={onRetry} title="Try Again" /> : null}
      </View>
    </View>
  );
};
