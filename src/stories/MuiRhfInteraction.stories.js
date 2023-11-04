import SelectorForm from "./MuiRhfForm";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: 'MuiRhfInteraction',
  component: SelectorForm,
  tags: ['autodocs'],
};

export const TextInput = {};

TextInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = await userEvent.setup();
  const textToType = "this is a test";

  const textBox = await canvas.findByLabelText(/text input/i);

  await expect(textBox).toBeInTheDocument();

  await user.type(textBox, textToType);

  await user.click(await canvas.findByRole("button", /submit/i));

  await expect(await canvas.findByText(new RegExp(textToType))).toBeInTheDocument();
};
