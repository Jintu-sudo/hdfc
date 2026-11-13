import { fn } from "storybook/test";
import LoginPage from "./LoginPage";

export default {
  title: "Components/LoginPage",
  component: LoginPage,
  args: { setIsLoggedIn: fn() },
  argTypes: {
    buttonColor: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning", "info"],
    },
    buttonSize: { control: "radio", options: ["small", "medium", "large"] },
    buttonVariant: { control: "radio", options: ["contained", "outlined", "text"] },
    fieldSize: { control: "radio", options: ["small", "medium"] },
    fieldVariant: { control: "radio", options: ["outlined", "filled", "standard"] },
  },
};

export const Default = {};