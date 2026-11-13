import { fn } from "storybook/test";
import LoginPage from "./LoginPage";

export default {
  title: "Components/LoginPage",
  component: LoginPage,
  args: { setIsLoggedIn: fn() },
};

export const Default = {};