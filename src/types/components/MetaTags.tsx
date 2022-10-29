import type { ReactNode } from 'react';

export default interface TypeMetaTagsProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  children?: ReactNode;
}
