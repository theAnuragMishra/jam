import { describe, it, expect } from 'vitest'
import { isFeatureEnabled } from './features'

const makeServiceInfo = (version: { major: number; minor: number; patch: number }) => ({
  server: {
    version,
  },
})

describe('isFeatureEnabled - txFeeOnSend version boundary', () => {
  it('is disabled for version 0.9.10', () => {
    const serviceInfo = makeServiceInfo({ major: 0, minor: 9, patch: 10 })

    expect(isFeatureEnabled('txFeeOnSend', serviceInfo as any)).toBe(false)
  })

  it('is enabled for version 0.9.11', () => {
    const serviceInfo = makeServiceInfo({ major: 0, minor: 9, patch: 11 })

    expect(isFeatureEnabled('txFeeOnSend', serviceInfo as any)).toBe(true)
  })
})
