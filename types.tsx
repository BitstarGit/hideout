/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type OnboardingStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

export type AuthenticatedStackParamList = {
  Root: undefined;
  EditProfileScreen: undefined;
  PushNotificationsSettingsScreen: undefined;
  ChangePasswordScreen: undefined;
  CustomizeTopicsScreen: undefined;
  SuggestionScreen: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  SettingsScreen: undefined;
  EditProfileScreen: undefined;
  NotificationsScreen: undefined;
  ChangePasswordScreen: undefined;
  Onboarding: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  SettingsScreen: undefined;
  NotificationsScreen: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
