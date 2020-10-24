import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    searchBackgroundColor: string;
    black: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "rgb(127, 90, 240)",
	secondaryColor: "#666",
  searchBackgroundColor: "#fafafa",
  black: "#090909"
};

export const darkTheme: DefaultTheme = {
	primaryColor: "rgb(127, 90, 240)",
	secondaryColor: "#cacaca",
	searchBackgroundColor: "#707070",
  black: "#090909"
};
