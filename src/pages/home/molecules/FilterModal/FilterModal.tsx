import React from 'react';
import { useObjective } from 'context/Objective';
import { View, Modal, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PressEvent } from 'typings/events';
import { filterStyle, styles } from 'styles/styles';

type FilterModalProps = {
  visible: boolean;
  handleCloseModal: PressEvent;
  handleResetModal: PressEvent;
  filterCategory: PressEvent;
};

export const FilterModal = ({
  visible,
  handleCloseModal,
  handleResetModal,
  filterCategory,
}: FilterModalProps) => {
  const {
    state: { categories },
  } = useObjective();

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={filterStyle.centeredView}>
        <View style={filterStyle.modalView}>
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => filterCategory(item)}
                key={index}>
                <Text
                  style={filterStyle.title}
                  onPress={() => filterCategory(item)}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}

          <View style={filterStyle.buttonContainer}>
            <Button title="Close" onPress={handleCloseModal} />
            <Button title="Reset" onPress={handleResetModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
