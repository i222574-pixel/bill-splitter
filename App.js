import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import TipSelector from './components/TipSelector';
import PeoplePicker from './components/PeoplePicker';
import ResultPanel from './components/ResultPanel';
import { colors } from './components/theme';
import { parseAmount, splitBill } from './utils/calc';

export default function App() {
  const [billText, setBillText] = useState('');
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(2);

  const result = splitBill(parseAmount(billText), tip, people);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Split the bill</Text>
        <Text style={styles.subtitle}>Enter the bill, pick a tip, see what everyone owes.</Text>

        <View style={styles.card}>
          <Text style={styles.fieldLabel}>Bill amount (Rs)</Text>
          <TextInput
            value={billText}
            onChangeText={setBillText}
            placeholder="0.00"
            placeholderTextColor={colors.mist}
            keyboardType="decimal-pad"
            style={styles.input}
          />

          <Text style={styles.fieldLabel}>Tip</Text>
          <TipSelector value={tip} onChange={setTip} />

          <Text style={styles.fieldLabel}>Split between</Text>
          <PeoplePicker value={people} onChange={setPeople} />
        </View>

        <ResultPanel {...result} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.forest },
  content: { padding: 20, paddingTop: 72, gap: 18 },
  title: { fontSize: 34, fontWeight: '800', color: colors.paper },
  subtitle: { fontSize: 16, color: colors.mist, marginTop: -10 },
  card: { backgroundColor: colors.paper, borderRadius: 18, padding: 20 },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.ink,
    marginTop: 14,
    marginBottom: 8,
  },
  input: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.ink,
    borderBottomWidth: 2,
    borderBottomColor: colors.ink,
    paddingVertical: 6,
  },
});
