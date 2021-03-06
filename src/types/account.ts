import { CurrencyCode } from './common'

export const ACCOUNT_TYPES = ['BANK', 'CREDIT'] as const
/**
 * @typedef AccountType
 * Type of account
 */
export type AccountType = typeof ACCOUNT_TYPES[number]

export const ACCOUNT_SUBTYPES = ['SAVINGS_ACCOUNT', 'CHECKINGS_ACCOUNT', 'CREDIT_CARD'] as const
/**
 * @typedef AccountSubType
 * Type of account
 */
export type AccountSubType = typeof ACCOUNT_SUBTYPES[number]

export type Account = {
  /** Primary identifier of the account */
  id: string
  /** Primary identifier of the Item */
  itemId: string
  /** Type of the account */
  type: AccountType
  /** Sub type of the account */
  subtype: AccountSubType
  /** Account's financial institution number */
  number: string
  /** Current balance of the account */
  balance: number
  /** Account's name or description */
  name: string
  /** Account's name provided by the institution based on the level of client. */
  marketingName?: string
  /** Account's owner´s fullname */
  owner?: string
  /** Account's owner´s tax number */
  taxNumber?: string
  /** ISO Currency code of the account's amounts */
  currencyCode: CurrencyCode
  /** Account related bank data, when account is BANK type */
  bankData?: BankData
  /** Account related credit data, when account is CREDIT type */
  creditData?: CreditData
}

export type BankData = {
  /** primary identifier of the account to make bank transfers */
  transferNumber?: string
  /** available balance of the account */
  closingBalance?: number
}

export type CreditData = {
  /** Credit card end user's level */
  level?: string
  /** Credit card brand, ie. Mastercard, Visa */
  brand?: string
  /** Current balance close date */
  balanceCloseDate?: Date
  /** Current balance due date */
  balanceDueDate?: Date
  /** Available credit limit to use. */
  availableCreditLimit?: number
  /** Current balance in foreign currency */
  balanceForeignCurrency?: number
  /** Current balance minimum payment due */
  minimumPayment?: number
  /** Maximum credit card limit. */
  creditLimit?: number
}
