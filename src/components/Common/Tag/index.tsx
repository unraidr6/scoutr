import { TagIcon } from '@heroicons/react/24/outline';
import React, { type JSX } from 'react';

type TagProps = {
  children: React.ReactNode;
  iconSvg?: JSX.Element;
};

const Tag = ({ children, iconSvg }: TagProps) => {
  return (
    <div className="inline-flex cursor-pointer items-center rounded-full border border-white/10 bg-white/10 px-2 py-1 text-sm leading-snug text-gray-200 backdrop-blur-md transition hover:bg-white/15">
      {iconSvg ? (
        React.cloneElement(iconSvg, {
          className: 'mr-1 h-4 w-4',
        })
      ) : (
        <TagIcon className="mr-1 h-4 w-4" />
      )}
      <span>{children}</span>
    </div>
  );
};

export default Tag;
