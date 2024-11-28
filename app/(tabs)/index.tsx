import React from "react";
import {View, ScrollView} from 'react-native';
import ClassComponent from "./soal-no-2/ClassComponent";
import FunctionalComponent from "./soal-no-2/FunctionalComponent";
import no3 from "./soal-no-3";
import Navigation from "./soal-no-5";
import Button from "./soal-no-3";

const App = () => {
  return (
    <View>
      <ScrollView>
        <ClassComponent />
        <FunctionalComponent />
        {/* <Button /> */}
        {/* <Navigation /> */}
      </ScrollView>
    </View>
  );
};

export default App;