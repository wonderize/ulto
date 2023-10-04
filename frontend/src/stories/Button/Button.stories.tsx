import Button from '../../components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import styles from "../../components/Button/Button.module.css"

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    placeholder: "Войти",
     style: styles
},
};

