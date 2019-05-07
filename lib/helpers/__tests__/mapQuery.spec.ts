import React from 'react'
import { mapQuery } from '../mapQuery'

describe('mapQuery works', () => {
  test('should return an empty object if query is undefined', () => {
    expect(mapQuery(undefined)).toEqual({})
  })
  test('should return an', () => {
    expect(mapQuery({ query: 'filter=хирургия' })).toEqual({
      query: 'filter=хирургия',
    })
  })
})
