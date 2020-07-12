import { BaseApi } from './baseApi'
import { TransactionFilters, AccountType, InvestmentType, Category, Investment, Transaction, Account, Connector, ConnectorFilters } from './types'

/**
 * Creates a new client instance for interacting with Pluggy API
 * @constructor
 * @param API_KEY for authenticating to the API
 * @returns {PluggyClient} a client for making requests
 */
export class PluggyClient extends BaseApi{

  /**
   * Fetch all available connectors
   * @returns {Connector[]} an array of connectors
   */
  async fetchConnectors(options: ConnectorFilters = {}): Promise<Connector[]> {
    return this.createGetRequest(`connectors${this.mapToQueryString({ ...options })}`)
  }
 
  /**
   * Fetch a single Connector
   * @param id The Connector ID
   * @returns {Connector} a connector object
   */
  async fetchConnector(id: number): Promise<Connector> {
    return this.createGetRequest(`connectors/${id}`)
  }

  /**
   * Fetch all items from the client
   * @returns {Item[]} list of connected items
   */
  async fetchItems(id: string) {
    return this.createGetRequest(`items`)
  }

  /**
   * Fetch a single item
   * @param id The Item ID
   * @returns {Item} a item object
   */
  async fetchItem(id: string) {
    return this.createGetRequest(`items/${id}`)
  }

  /**
   * Fetch accounts from an Item
   * @param itemId The Item id
   * @returns {Account[]} an array of accounts
   */
  async fetchAccounts(itemId: string, type: AccountType): Promise<Account[]> {
    return this.createGetRequest(`accounts${this.mapToQueryString({ itemId, type })}`)
  }


  /**
   * Fetch a single account
   * @returns {Account} an account object
   */
  async fetchAccount(id: string): Promise<Account>  {
    return this.createGetRequest(`accounts/${id}`)
  }

  /**
   * Fetch transactions from an account
   * @param accountId The account id
   * @param {TransactionFilters} options Transaction options to filter
   * @returns {Transaction[]} an array of transactions
   */
  async fetchTransactions(accountId: string, options: TransactionFilters = {}): Promise<Transaction[]>  {
    return this.createGetRequest(`transactions${this.mapToQueryString({ ...options, accountId })}`)
  }

  /**
   * Fetch a single transaction
   * @returns {Transaction} an transaction object
   */
  async fetchTransaction(id: string): Promise<Transaction> {
    return this.createGetRequest(`transactions/${id}`)
  }

  /**
   * Fetch investments from an Item
   * @param itemId The Item id
   * @returns {Investment[]} an array of investments
   */
  async fetchInvestments(itemId: string, type: InvestmentType): Promise<Investment[]> {
    return this.createGetRequest(`investments${this.mapToQueryString({ itemId, type })}`)
  }


  /**
   * Fetch a single investment
   * @returns {Investment} an investment object
   */
  async fetchInvestment(id: string): Promise<Investment> {
    return this.createGetRequest(`investments/${id}`)
  }

  /**
   * Fetch all available categories
   * @returns {Categories[]} an array of categories
   */
  async fetchCategories(): Promise<Category[]> {
    return this.createGetRequest('categories')
  }


  /**
   * Fetch a single category
   * @returns {Category} a category object
   */
  async fetchCategory(id: string): Promise<Category> {
    return this.createGetRequest(`categories/${id}`)
  }
}