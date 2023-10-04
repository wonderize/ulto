import ClassCard from '../../components/ClassCard/ClassCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ClassCard> = {
  component: ClassCard,
};

export default meta;
type Story = StoryObj<typeof ClassCard>;

export const Primary: Story = {
  args: {
    emphasis: ["value.title", "formattedTime"],
  details: [
    { title: "Локация", value: "value.location" },
    { title: "Аудитория", value: "value.classroom" },
    { title: "Преподаватель", value: "value.teacher" },
  ]
},
}
