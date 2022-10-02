import React from 'react';
import Link from 'next/link';

import Tag from '../common/Tag';
import { MarketTags } from '../../styles/MarketTag';
import { CryptoTag } from '../../interfaces/tags';

interface Props {
  tags: CryptoTag[]
}

const MarketTagComponent = ({ tags }: Props) => {
  return (
    <MarketTags>
      {
        tags.map((value) => {
          const slug = () => {
            switch (value.title.toLowerCase()) {
              case 'nft/gaming': return 'gaming';
              case 'terbaru': return 'new';
              case 'ekosistem stablecoin': return 'stablecoin';
              default: return value.title.toLowerCase();
            }
          }

          return <Link
            key={value.id}
            href={`/market/tags/${slug()}`}
          >
            <a>
              <Tag
                title={value.title}
                icon={value.icon.url}
              />
            </a>
          </Link>
        })
      }
    </MarketTags>
  )
}

export default MarketTagComponent;
