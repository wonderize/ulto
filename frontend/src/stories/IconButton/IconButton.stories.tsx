import IconButton from '../../components/IconButton/IconButton';
import type { Meta, StoryObj } from '@storybook/react';
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons"

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};
  const onClicks = () => {
    
  }

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: faBars,
     onClick: onClicks
},
};
