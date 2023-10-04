import Settings from '../../components/Settings/Settings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Settings> = {
  component: Settings,
  title: "Components/Settings",
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  args: {
    selectStates: [
      ["dark", (newValue) => console.log(newValue)],
      ["admin", (newValue) => console.log(newValue)],
    ]
  }
};