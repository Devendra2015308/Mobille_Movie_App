import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray">
      <Text className="text-5xl font-bold text-accent">Hello Devendra</Text>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
