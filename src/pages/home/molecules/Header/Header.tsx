import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PressEvent } from 'typings/events';

type HeaderProps = {
  handleFilter: PressEvent;
};

export const Header = ({ handleFilter }: HeaderProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
          flex: 1,
        }}>
        OKRs
      </Text>
      <TouchableOpacity onPress={handleFilter}>
        <Image
          source={require('../../../../assests/filter.png')}
          style={{ marginRight: 16 }}
        />
      </TouchableOpacity>
    </View>
  );
};
