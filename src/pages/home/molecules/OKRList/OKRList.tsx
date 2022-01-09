import React from 'react';
import {
  Image,
  SectionList,
  SectionListData,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from 'styles/styles';
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
      <Text key={index} style={{ paddingLeft: 30, paddingVertical: 10 }}>
        ◉ ${item.title}`
      </Text>
    );
  };

  const renderSectionHeader = ({
    section: { title, objective, isVisible },
  }: SectionListData<Objective>) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: 'white',
        }}
        onPress={() => handleVisible(objective)}>
        <Image
          source={
            isVisible
              ? require('../../../../assests/rightArrow.png')
              : require('../../../../assests/downArrow.png')
          }
          style={{ marginHorizontal: 10 }}
        />
        <Text style={{ fontWeight: 'bold', flexShrink: 1 }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SectionList
      contentContainerStyle={styles.listStyle}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={data}
      keyExtractor={(item, index) => item.id + index}
    />
  );
};
