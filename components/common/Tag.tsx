import Image from 'next/image';
import React from 'react';

import { TagComponent, TagIconWrapper, TagTitle } from '../../styles/common/Tag';

interface Props {
  icon: string
  title: string
}

export const Tag = (props: Props) => {
  const { icon, title } = props;

  return (
    <TagComponent>
      <TagIconWrapper>
        <Image src={icon} width="20" height="20" alt="Market Tag Icon" />
      </TagIconWrapper>
      <TagTitle>{title}</TagTitle>
    </TagComponent>
  );
};

export default Tag;
