import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Techs from './Techs';
import Likes from './Likes';

export default function Repository({ repository }) {
  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{repository.title}</Text>

      <Techs data={repository.techs} />

      <Likes id={repository.id} data={repository.likes} />
    </View>
  );
};

const styles = StyleSheet.create({
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
