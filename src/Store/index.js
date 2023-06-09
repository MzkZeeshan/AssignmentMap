import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/productsSlice'

export const store = configureStore({
    reducer: {
        products:productSlice,
    },
  })