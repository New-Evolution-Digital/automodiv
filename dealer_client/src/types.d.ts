declare global {
  type LinkTypes = {
    name: string
    href: string
  }

  type LinkCategory = {
    name: string
    featured: {
      name: string
      imageSrc: string
      imageAlt: string
      href: string
    }
  }
}

export {}
