import { isValidAddress, isValidAmount, isValidNumCollaborators, MAX_NUM_COLLABORATORS } from './helpers'
import { describe, it, expect } from 'vitest'

describe('isValidAddress', () => {
  it('returns true for valid non-empty string', () => {
    expect(isValidAddress('0xabc123')).toBe(true)
  })

  it('returns false for empty string', () => {
    expect(isValidAddress('')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isValidAddress(null)).toBe(false)
  })

  it('returns true for string with spaces (still a string)', () => {
    expect(isValidAddress('   ')).toBe(true)
  })
})

describe('isValidAmount', () => {
  it('returns true for positive number when not sweep', () => {
    expect(isValidAmount(10, false)).toBe(true)
  })

  it('returns false for zero when not sweep', () => {
    expect(isValidAmount(0, false)).toBe(false)
  })

  it('returns false for negative numbers', () => {
    expect(isValidAmount(-5, false)).toBe(false)
  })

  it('returns true for zero when sweep mode is enabled', () => {
    expect(isValidAmount(0, true)).toBe(true)
  })

  it('returns false for non-zero when sweep mode is enabled', () => {
    expect(isValidAmount(5, true)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isValidAmount(null, false)).toBe(false)
  })

  it('returns false for NaN', () => {
    expect(isValidAmount(NaN, false)).toBe(false)
  })
})

describe('isValidNumCollaborators', () => {
  const min = 2

  it('returns true when within valid range', () => {
    expect(isValidNumCollaborators(5, min)).toBe(true)
  })

  it('returns true at minimum boundary', () => {
    expect(isValidNumCollaborators(min, min)).toBe(true)
  })

  it('returns true at maximum boundary', () => {
    expect(isValidNumCollaborators(MAX_NUM_COLLABORATORS, min)).toBe(true)
  })

  it('returns false below minimum', () => {
    expect(isValidNumCollaborators(min - 1, min)).toBe(false)
  })

  it('returns false above maximum', () => {
    expect(isValidNumCollaborators(MAX_NUM_COLLABORATORS + 1, min)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isValidNumCollaborators(null, min)).toBe(false)
  })

  it('returns false for NaN', () => {
    expect(isValidNumCollaborators(NaN, min)).toBe(false)
  })
})
