import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Reddit } from "./api/Reddit";
import { RedditItem } from "./components/RedditItem";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchReddit(tag) {
      const data = await Reddit.get(tag);
      setItems(data);
    }
    fetchReddit("javascript");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <RedditItem item={item} />}
        keyExtractor={(_item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
