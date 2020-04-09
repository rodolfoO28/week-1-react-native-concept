import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import api from './services/api'

import Repository from './components/Repository'

export default function App() {
  const [loading, SetLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  function getRepositories(loading) {
    if (loading)
      SetLoading(loading);

    api.get('repositories').then(response => {
      setRepositories(response.data);
      if (loading)
        SetLoading(!loading);
    });
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item }) => <Repository repository={item} />}
          refreshing={loading}
          onRefresh={() => getRepositories(true)}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
