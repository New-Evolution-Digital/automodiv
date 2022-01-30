import { useState } from 'react'

export const useMenuState = (initialState: boolean) => {
  const [open, setOpen] = useState(() => initialState)
  const indexPages: LinkTypes[] = [{ name: 'Home', href: '/' }]
  const catPages = [
    {
      name: 'Dealership Tools',
      featured: [
        {
          name: 'Regional Pricing',
          imageSrc:
            'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'Analytic Page',
          href: '#'
        },
        {
          name: 'Reputation Management',
          imageSrc:
            'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'Woman smiling while using her computer',
          href: '#'
        },
        {
          name: 'VIN Verification',
          imageSrc:
            'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
          imageAlt: 'person using laptop',
          href: '#'
        }
      ]
    }
  ]

  const toggleMenu = () => {
    setOpen(!open)
  }

  return {
    get: { open, pages: { indexPages, catPages } },
    set: { open: setOpen },
    toggleMenu
  }
}
