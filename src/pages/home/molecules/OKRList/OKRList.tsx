import React from 'react';
import {
  Image,
  SectionList,
  SectionListData,
  Text,
  TouchableOpacity,
} from 'react-native';
import { okrListStyle } from 'styles/styles';
import { PressEvent } from 'typings/events';
import { Objective, ObjectiveSection } from 'typings/objective.types';

type OKRListProps = {
  data: Array<ObjectiveSection>;
  handleVisible: PressEvent;
};

/**
 * `OKRList` is the section list use to render fetched okrs
 * @param data : which is used to show section list
 * @param handleVisible : event responsible for collapse headers
 */
export const OKRList = ({ data, handleVisible }: OKRListProps) => {
  const renderItem = ({ item, index, section }) => {
    return section.isVisible ? null : (
      <Text key={index} style={okrListStyle.subTitle}>
        ◉ ${item.title}`
      </Text>
    );
  };

  const renderSectionHeader = ({
    section: { title, objective, isVisible },
  }: SectionListData<Objective>) => {
    return (
      <TouchableOpacity
        style={okrListStyle.touchableStyle}
        onPress={() => handleVisible(objective)}>
        <Image
          source={
            isVisible
              ? require('../../../../assests/rightArrow.png')
              : require('../../../../assests/downArrow.png')
          }
          style={okrListStyle.imageStyle}
        />
        <Text style={okrListStyle.titleStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SectionList
      contentContainerStyle={okrListStyle.listStyle}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={data}
      keyExtractor={(item, index) => item.id + index}
    />
  );
};
