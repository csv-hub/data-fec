import '@csvhub/core/decorator'

import { decimal } from './column'
import { pacTransport, pacCSV } from './transport'
import { 
   PAC_YEARS,
   COMMITTEE_TYPE,
   COMMITTEE_DESIGNATION,
   FILING_FREQUENCY
} from './constant'

@table('pac', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',
    // All years with candidate data
    transport: PAC_YEARS.map(pacTransport),
    csv: PAC_YEARS.map(pacCSV)
})
export class PAC {
    
    @column('FixedString', {
        name: 'Committee identification',
        length: 9
    })
    id: string
    
    @column('String', {
        name: 'Committee name'
    })
    name: string
    
    @column('Enum', {
        name: 'Committee type',
        values: COMMITTEE_TYPE,
        emptyStringNull: true
    })
    type: string

    @column('Enum', {
        name: 'Committee designation',
        values: COMMITTEE_DESIGNATION,
        emptyStringNull: true
    })
    designation: string

    @column('Enum', {
        name: 'Filing frequency',
        values: FILING_FREQUENCY,
        emptyStringNull: true
    })
    filing_frequency: string
    
    @decimal({
        name: 'Total receipts'
    })
    receipts: number
    
    @decimal({
        name: 'Transfers from affiliates'
    })
    affiliate_transfers: number
    
    @decimal({
        name: 'Contributions from individuals'
    })
    contributions: number

    @decimal({
        name: 'Contributions from other political committees'
    })
    committee_contributions: number

    @decimal({
        name: 'Contributions from candidate'
    })
    candidate_contributions: number

    @decimal({
        name: 'Candidate loans'
    })
    candidate_loans: number

    @decimal({
        name: 'Total loans received'
    })
    total_loans: number

    @decimal({
        name: 'Total disbursements'
    })
    disbursements: number
    
    @decimal({
        name: 'Transfers to affiliates'
    })
    transfer_to_affiliates: number

    @decimal({
        name: 'Refunds to individuals'
    })
    contribution_refunds: number

    @decimal({
        name: 'Refunds to other political committees'
    })
    committee_refunds: number

    @decimal({
        name: 'Candidate loan repayments'
    })
    candidate_loan_repayment: number

    @decimal({
        name: 'Loan repayments'
    })
    loan_repayment: number
    
    @decimal({ 
        name: 'Cash beginning of period'
    })
    cash_start: number
    
    @decimal({
        name: 'Cash close of period'
    })
    cash_end: number
    
    @decimal({
        name: 'Debts owed'
    })
    debt: number

    @decimal({
        name: 'Nonfederal transfers received'
    })
    nonfed_transfers: number
    
    @decimal({
        name: 'Contributions from other political committees'
    })
    transfer_to_committees: number
    
    @decimal({
        name: 'Independent expenditures'
    })
    expenditures: number

    @decimal({
        name: 'Party coordinated expenditures'
    })
    party_expenditures: number

    @decimal({
        name: 'Party coordinated expenditures'
    })
    nonfed_expenditures: number
    
    @column('Date', {
        optional: true,
        format: 'MM/DD/YYYY',
        defaultValueOnError: true,
        defaultValue: null
    })
    end_date?: Date
    
}