import React from 'react';
import { ActivityIndicator, View } from 'react-native';

type SpinnerProps = {
  size?: number | 'small' | 'large' | undefined;
};

/** 
`Spinner` component can be used to show activity indicator.
   `size`: is the prop we can use to define the size of the spinner and available types are
   number | 'small' | 'large' | undefined
*/

export const Spinner = ({ size = 'large' }: SpinnerProps) => {
  return (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <ActivityIndicator size={size} />
    </View>
  );
};
