import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { headerStyle } from 'styles/styles';
import { PressEvent } from 'typings/events';

type HeaderProps = {
  handleFilter: PressEvent;
};

export const Header = ({ handleFilter }: HeaderProps) => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.title}>OKRs</Text>
      <TouchableOpacity onPress={handleFilter}>
        <Image
          source={require('../../../../assests/filter.png')}
          style={headerStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
};
