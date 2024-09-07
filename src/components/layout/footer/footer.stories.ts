import type { Meta, StoryObj } from "@storybook/react";

import { Footer, FooterProps } from "./footer";
import { carouselItems } from "../../carousel/carousel.fixture";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;
const linkUrl = [
  "https://www.facebook.com/proloco.montepiano/?locale=it_IT",
  "https://www.instagram.com/prolocomontepiano/",
  "https://www.google.com/?hl=it",
];

const standardArgs: Partial<FooterProps> = {
  facebookUrl: linkUrl[0],
  instagramUrl: linkUrl[1],
  whatsappUrl: linkUrl[3],
};

export const Default: Story = {
  args: {
    ...standardArgs,
    color: "pakistan-green",
  },
};

export const FieldDrab: Story = {
  args: {
    ...standardArgs,
    color: "field-drab",
  },
};

export const Chestnut: Story = {
  args: {
    ...standardArgs,
    color: "chestnut",
  },
};

export const BrunswickGreen: Story = {
  args: {
    ...standardArgs,
    color: "brunswick-green",
  },
};
