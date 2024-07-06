import type { Meta, StoryObj } from '@storybook/react';
import { Ui as Component } from './ui';

type Component = typeof Component;
type Story = StoryObj<Component>;

const meta: Meta<Component> = {
  component: Component,
};

export const Primary: Story = {};

export default meta;
