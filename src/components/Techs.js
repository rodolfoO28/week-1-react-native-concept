import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Techs({ data }) {
  return (
    <View style={styles.techsContainer}>
        {data.map((tech, index) => (
          <Text key={index} style={styles.tech}>
            {tech}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
});
