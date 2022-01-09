/* eslint-disable no-console */
import { useCallback, useReducer } from 'react';
import {
  Objective,
  ObjectiveData,
  ObjectiveSection,
} from 'typings/objective.types';
import { api } from 'utils/api/api';
import {
  createContainer,
  createReducer,
  createAsyncActions,
  createAction,
} from 'utils/context';
import { showErrorMessage } from 'utils/toast';

export type ObjectiveState = {
  objectives: Array<ObjectiveSection>;
  cloneObjectives: Array<ObjectiveSection>;
  loading: boolean;
  categories: Array<string>;
  error?: Error;
};

const initialState: ObjectiveState = {
  objectives: [],
  cloneObjectives: [],
  loading: false,
  categories: [],
};

const actions = {
  getObjective: createAsyncActions('GET_OBJECTIVE'),
  filterObjective: createAction('FILTER_OBJECTIVE'),
  resetObjective: createAction('RESET_OBJECTIVE'),
  collapseSection: createAction('COLLAPSE_SECTION'),
};

const authReducer = createReducer<ObjectiveState>({
  [`${actions.getObjective.loading}`]: state => ({
    ...state,
    loading: true,
    error: undefined,
  }),
  [`${actions.getObjective.success}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    objectives: payload.objectiveData,
    categories: payload.categories,
    cloneObjectives: payload.objectiveData,
    error: undefined,
  }),
  [`${actions.getObjective.failure}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
  }),
  [`${actions.collapseSection}`]: (state, { payload }) => ({
    ...state,
    objectives: payload.objectiveData,
  }),
  [`${actions.filterObjective}`]: (state, { payload }) => ({
    ...state,
    objectives: payload.objectiveData,
  }),
  [`${actions.resetObjective}`]: state => ({
    ...state,
    objectives: state.cloneObjectives,
  }),
});

export const {
  useContext: useObjective,
  Context: ObjectiveContext,
  Provider: ObjectiveProvider,
  TestProvider: TestObjectiveProvider,
} = createContainer(() => {
  const [{ ...state }, dispatch] = useReducer(authReducer, initialState);

  /**
   * `getObjectives` function will be used to get all the list of okrs from the backend
   * and stores in the variable exposed as `objectives`.
   */
  const getObjectives = useCallback(async () => {
    dispatch(actions.getObjective.loading());

    try {
      const { data } = await api.get<ObjectiveData>(`sample-okrs/db.json`);

      // this will store the categories so that it will be used on filter

      let categories: Array<string> = [];
      const result: Array<ObjectiveSection> = data.data.reduce(
        (accum: ObjectiveSection[], current: Objective) => {
          categories.push(current.category);
          let dateGroup: ObjectiveSection | undefined = accum.find(
            (item: ObjectiveSection) =>
              item.objective.id === current.parent_objective_id,
          );
          if (!dateGroup) {
            dateGroup = { title: current.title, objective: current, data: [] };
            accum.push(dateGroup);
          } else {
            dateGroup.data.push(current);
          }
          return accum;
        },
        [] as ObjectiveSection[],
      );

      dispatch(
        actions.getObjective.success({
          objectiveData: result,
          categories: [...new Set(categories)],
        }),
      );
    } catch (e) {
      showErrorMessage(e.message);
      dispatch(
        actions.getObjective.failure({
          error: e,
        }),
      );
    }
  }, []);

  const resetObjective = useCallback(() => {
    dispatch(actions.resetObjective());
  }, []);

  const filterObjective = useCallback(
    (category: string) => {
      const data = state.cloneObjectives.filter(element => {
        if (element.objective.category === category) {
          return element.data.filter(item => {
            return item.category === category;
          });
        }
      });

      dispatch(
        actions.filterObjective({
          objectiveData: data,
        }),
      );
    },
    [state],
  );

  const collapseSection = useCallback(
    (selectedObjective: Objective) => {
      const data = state.objectives.map(element => {
        if (element.objective.id === selectedObjective.id) {
          element.isVisible = !element.isVisible;
        }
        return element;
      });
      dispatch(
        actions.collapseSection({
          objectiveData: data,
        }),
      );
    },
    [state],
  );

  return {
    state: {
      ...state,
    },
    actions: {
      getObjectives,
      collapseSection,
      resetObjective,
      filterObjective,
    },
  };
});

export default useObjective;
