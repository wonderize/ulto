import LoginForm from '../../components/LoginForm/LoginForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};
  const onClicks = () => {
    
  }

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
    placeholder: "Войти"
},
};