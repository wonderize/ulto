import PlaceholderInput from '../../components/PlaceholderInput/PlaceholderInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PlaceholderInput> = {
  component: PlaceholderInput,
};

export default meta;
type Story = StoryObj<typeof PlaceholderInput>;

export const Primary: Story = {
  args: {
    placeholder: "string",
  },
  argTypes: {
    type: {
      options: ['email', 'number', 'password', 'search', 'tel', 'text']
    },
  },
};