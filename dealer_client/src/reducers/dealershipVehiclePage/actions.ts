import { createAction } from '@reduxjs/toolkit'

export const toggleModal = createAction<boolean | undefined>('TOGGLE_MODEL')
