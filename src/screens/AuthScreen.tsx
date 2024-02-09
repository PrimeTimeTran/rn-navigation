import {Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export function AuthScreen({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{maxWidth: '50%'}}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() =>
            navigation.navigate('Home', {foo: 'bar', spam: 'ham'})
          }>
          Go To Home Screen
        </Button>
      </View>
    </ScrollView>
  );
}
