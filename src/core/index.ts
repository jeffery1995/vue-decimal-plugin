
import { Numeric, Decimal } from 'decimal.js-light'
import { formatNumber } from 'x-utils'

import type { FormatNumberOptions } from 'x-utils'
import type { DecimalOptions } from './type'

export class XDecimal {
  protected locale?: string
  protected placeholder?: string
  protected precision?: number
  protected decimal: Decimal
  protected value: Numeric
  constructor (value: Numeric, options: DecimalOptions) {
    this.value = value
    this.locale = options.locale
    this.placeholder = options.placeholder
    this.precision = options.precision
    this.decimal = new Decimal(value)
  }

  protected isNilOrZero (value: any) {
    return value === 0 || value === '0' || value === '' || value === null || value === undefined || Number.isNaN(value)
  }

  getDecimalInstance () {
    return this.decimal
  }

  setValue (value: Numeric) {
    this.decimal = new Decimal(value)

    return this
  }

  plus (value: Numeric) {
    this.decimal = this.decimal.plus(value)

    return this
  }

  times (value: Numeric) {
    this.decimal = this.decimal.times(value)

    return this
  }

  minus (value: Numeric) {
    this.decimal = this.decimal.minus(value)

    return this
  }

  divide (value: Numeric) {
    this.decimal = this.decimal.div(value)

    return this
  }

  toString () {
    return this.decimal.toString()
  }
}

export class Money extends XDecimal {
  private currency?: string
  constructor (value: Numeric, options: DecimalOptions) {
    super(value, options)
    this.currency = options.currency
  }

  format (options?: FormatNumberOptions) {
    const value = this.decimal.toNumber()

    if (this.isNilOrZero(value)) return this.placeholder

    return formatNumber(this.decimal.toNumber(), {
      locale: this.locale,
      precision: this.precision,
      currency: this.currency,
      ...options,
    })
  }
}

export class Percentage extends XDecimal {
  constructor (value: number, options: DecimalOptions) {
    super(value, options)
  }

  format (options?: FormatNumberOptions) {
    const percent = this.decimal.mul(100).toNumber()

    if (this.isNilOrZero(percent)) return this.placeholder

    return formatNumber(percent, {
      precision: this.precision,
      ...options,
    }) + '%'
  }
}
