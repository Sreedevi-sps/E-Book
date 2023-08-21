import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  options: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    borderWidth:1,
    height:50
  },
  currentFormat: {
    textAlign: 'center',
  },
  form: {
    width: '100%',
    backgroundColor:'pink',
    height:40
    // borderWidth:3
  },
  input: {
    backgroundColor: '#c0c0c0',
    borderRadius: 15,
    width: '100%',
    height:30
  },
});
