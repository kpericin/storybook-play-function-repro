import ToastContainer from '../src/ToastContainer';

const ToastDecorator = (story) => {
  // toast container needs to be within react router component so router links can work in toasts
  return (
    <>
      {story()}
      <ToastContainer />
    </>
  );
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  ToastDecorator,
];
