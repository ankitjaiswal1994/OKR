import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from 'styles/styles';
import { PressEvent } from 'typings/events';

type ErrorViewTypes = {
  onRetry: PressEvent;
  message: string;
};

export const ErrorView = ({ onRetry, message }: ErrorViewTypes) => {
  return (
    <View style={styles.errorView}>
      <View style={styles.errorChildView}>
        <Text style={styles.errorText}>{message}</Text>
        {onRetry ? <Button onPress={onRetry} title="Try Again" /> : null}
      </View>
    </View>
  );
};
