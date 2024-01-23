import SelectorForm from "./NativeRhfForm";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/test";

export default {
  title: 'TanstackFormInteraction',
  component: SelectorForm,
  tags: ['autodocs'],
};

export const TextInput = {};

TextInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = await userEvent.setup();
  const textToType = "this is a test";

  const textBox = await canvas.findByLabelText(/text input/i);

  expect(textBox).toBeInTheDocument();

  await user.type(textBox, textToType);

  await user.click(await canvas.findByRole("button", /submit/i));

  expect(await canvas.findByText(new RegExp(textToType), undefined, { timeout: 10000 })).toBeInTheDocument();
};

export const PlaywrightTestForTextInput = {};
