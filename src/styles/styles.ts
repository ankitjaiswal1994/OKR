import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
    backgroundColor: 'white',
  },
});

export const okrListStyle = StyleSheet.create({
  listStyle: { paddingBottom: 80 },
  titleStyle: { fontWeight: 'bold', flexShrink: 1 },
  touchableStyle: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  imageStyle: { marginHorizontal: 10 },
  subTitle: { paddingLeft: 30, paddingVertical: 10 },
});

export const headerStyle = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
  },
  image: { marginRight: 16 },
});

export const filterStyle = StyleSheet.create({
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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flexShrink: 1,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
});

export const errorStyle = StyleSheet.create({
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
});
