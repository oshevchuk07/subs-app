import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SettingsDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Subscription detail</Text>
      <Link href={"/"}>Go back</Link>
    </View>
  );
}
