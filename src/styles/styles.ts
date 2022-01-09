import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height: '80%',
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorChildView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: 'red',
  },
  listStyle: { paddingBottom: 80 },
});
