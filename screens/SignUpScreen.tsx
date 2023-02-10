import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../supabase";
import { ScreenBox } from "../components/ScreenBox";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  const signupUser = async () => {
    //deconstruct the users details we will need these later
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (user) {
        let res = await supabase
          .from("users")
          .insert([{ uuid: user.id, email }]);

        console.log("res", res);

        return;
      }
    } catch (error) {
      console.log("Something went wrong with sign up: ", error);
    }
  };

  return (
    <ScreenBox scrollable={false}>
      <Heading size="lg" color="coolGray.100" fontWeight="600">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.200" fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={setEmail} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChangeText={setPassword} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" onChangeText={setConfirmPassword} />
        </FormControl>
        <Button
          mt="2"
          colorScheme="primary"
          _text={{ color: "white" }}
          onPress={signupUser}
        >
          Sign up
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="md" fontWeight={400}>
            Already have an account?{" "}
          </Text>
          <Text
            onPress={() => navigation.navigate("SignInScreen")}
            color="primary.500"
            fontWeight={400}
            fontSize="md"
          >
            Log In
          </Text>
        </HStack>
      </VStack>
    </ScreenBox>
  );
}
