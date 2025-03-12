import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const insights = [
  { id: '1', title: 'Scan new', icon: 'scan', count: 'Scanned 483', color: '#D6E4FF' },
  { id: '2', title: 'Counterfeits', icon: 'alert-circle', count: 'Counterfeited 32', color: '#FFE4E1' },
  { id: '3', title: 'Success', icon: 'checkmark-circle', count: 'Checkouts 8', color: '#E6FFFA' },
  { id: '4', title: 'Directory', icon: 'book', count: 'History 26', color: '#E0F7FA' }
];

export default function HomeScreen({ navigation }) {
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
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: item.color }]} 
            onPress={() => item.id === '1' && navigation.navigate('ScanScreen')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')}>
          <Ionicons name="scan" size={28} color="gray" />
        </TouchableOpacity>
        <Ionicons name="cart" size={28} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
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

export function ScanScreen() {
  return (
    <View style={styles.scanContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" style={styles.backButton} />
      </TouchableOpacity>
      <View style={styles.scanBox}>
        <Image source={{ uri: 'https://via.placeholder.com/300x500' }} style={styles.scanImage} />
      </View>
      <View style={styles.productInfo}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.productImage} />
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const scanStyles = StyleSheet.create({
  scanContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F8F8' },
  backButton: { position: 'absolute', top: 50, left: 20 },
  scanBox: { width: '80%', height: '50%', backgroundColor: '#FFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  scanImage: { width: '100%', height: '100%', borderRadius: 15 },
  productInfo: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginTop: 20 },
  productImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', flex: 1 },
  addButton: { backgroundColor: 'dodgerblue', borderRadius: 20, padding: 10 }
});
