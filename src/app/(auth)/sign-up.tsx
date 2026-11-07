import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>SignIN</Text>
      <Link href="/(auth)/sign-in">SignIn</Link>
    </View>
  );
}
