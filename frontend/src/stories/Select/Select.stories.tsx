import Select from '../../components/Select/Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;


export const Primary: Story = {
  args: {
    values: [
      {
        id: 0,
        title: "Option 1"
      }
    ],
    optionState: ["0", (newValue) => {
      // Здесь вы можете добавить обработчик для обновления значения "option"
      // newValue содержит новое значение
      console.log(newValue);
    }]
  }
};