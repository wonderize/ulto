import Header from '../../components/Header/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const setSettingsVisibility = () => {
}

export const Primary: Story = {
  args: {
    settingsState: [true, setSettingsVisibility],
},
};
