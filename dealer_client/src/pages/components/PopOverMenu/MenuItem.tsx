/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react'

import Link from 'next/link'

interface MenuItemProps {
  image?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  href: string
  linkText: string
}

const MenuItem: FC<MenuItemProps> = ({ image, href, linkText }) => {
  return (
    <div className="group relative">
      {!!image && (
        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
          <img
            {...image}
            className={
              image.className ? image.className : 'object-center object-cover'
            }
          />
        </div>
      )}
      <Link href={href} passHref>
        <a className="mt-4 block font-medium text-gray-900">
          <span className="absolute z-10 inset-0" aria-hidden="true" />
          {linkText}
        </a>
      </Link>
    </div>
  )
}

export default MenuItem
