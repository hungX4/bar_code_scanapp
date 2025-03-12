import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const insights = [
  { id: '1', title: 'Scan new', icon: 'scan', count: 'Scanned 483', color: '#D6E4FF' },
  { id: '2', title: 'Counterfeits', icon: 'alert-circle', count: 'Counterfeited 32', color: '#FFE4E1' },
  { id: '3', title: 'Success', icon: 'checkmark-circle', count: 'Checkouts 8', color: '#E6FFFA' },
  { id: '4', title: 'Directory', icon: 'book', count: 'History 26', color: '#E0F7FA' }
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}> 
            <Ionicons name={item.icon} size={30} color="#333" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCount}>{item.count}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Explore More */}
      <Text style={styles.sectionTitle}>Explore More</Text>
      {/* Add more content here */}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="dodgerblue" />
        <Ionicons name="notifications" size={28} color="gray" />
        <Ionicons name="scan" size={28} color="gray" />
        <Ionicons name="cart" size={28} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold' },
  username: { fontSize: 18, color: 'gray' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  card: { flex: 1, margin: 5, padding: 15, borderRadius: 15, alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  cardCount: { fontSize: 14, color: 'gray' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, borderTopWidth: 1, borderColor: '#eee' }
}); 