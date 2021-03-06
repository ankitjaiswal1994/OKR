import React, { useEffect, useState } from 'react';
import { Spinner } from 'components/Spinner';
import useObjective from 'context/Objective';
import { View } from 'react-native';
import { Objective } from 'typings/objective.types';
import { OKRList } from './molecules/OKRList';
import { Header } from './molecules/Header';
import { FilterModal } from './molecules/FilterModal';
import { homeStyle } from 'styles/styles';
import { ErrorView } from 'components/ErrorView';

/**
 * Home is the initial page of this application. It will show the list of Okrs
 */
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    state: { objectives, loading, error },
    actions: {
      getObjectives,
      collapseSection,
      resetObjective,
      filterObjective,
    },
  } = useObjective();

  useEffect(() => {
    getObjectives();
  }, []);

  const handleFilter = () => {
    setModalVisible(true);
  };

  const handleVisible = (objective: Objective) => {
    collapseSection(objective);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleResetModal = () => {
    resetObjective();
    setModalVisible(false);
  };

  const filterCategory = (category: string) => {
    filterObjective(category);
    setModalVisible(false);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorView onRetry={getObjectives} message={error.message} />;
  }

  return (
    <View style={homeStyle.container}>
      <Header handleFilter={handleFilter} />
      <OKRList data={objectives} handleVisible={handleVisible} />
      <FilterModal
        visible={modalVisible}
        handleCloseModal={handleCloseModal}
        handleResetModal={handleResetModal}
        filterCategory={filterCategory}
      />
    </View>
  );
}
