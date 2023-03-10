import { StatusBar } from 'expo-status-bar';
import { useKeepAwake } from 'expo-keep-awake';
import { Flex } from '@react-native-material/core'
import Constants from "expo-constants";

import 'expo-dev-client'
import MainScreen from './main/MainScreen';


export default function App() {
  useKeepAwake();
  return (
    <Flex fill>
      <MainScreen /> 
      <StatusBar style="auto" />
    </Flex>
  );
}

