import '@csvhub/core/decorator'

import { YEARS_FROM_1980 } from './constant'
import { transactionCSV, transactionTransport } from './transport'

// Shared column specifications
import { 
    committeeId,
    amendmentIndicator,
    reportType,
    pgiIndicator,
    imageId,
    transactionDate,
    transactionType,
    entityType,
    decimal,
    candidateId
} from './column'

/**
 * Table specification for ClickHouse. 
 */
@table('transaction', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',
    orderBy: 'date',

    transport: YEARS_FROM_1980.map(transactionTransport),
    csv: YEARS_FROM_1980.map(transactionCSV)
})
/** 
 * A contribution or independent expenditure that one committee gives to another during the two-year election cycle, including PACs, 
 * party committees, candidate committees, or any other federal committee. Each transaction contains information about the committee 
 * expending the money as well as the committee receiving the money, the amount given, and the date it was given, and other information. 
 * 
 * URL: https://www.fec.gov/campaign-finance-data/contributions-committees-candidates-file-description/
 */
export class Transaction {
    
    @column('UInt64', {
        name: 'FEC record number',
        description: 'Unique row ID'
    })
    id: BigInt

    @committeeId()
    committee: string

    @amendmentIndicator()
    amendment: string

    @reportType()
    report_type: string

    @pgiIndicator()
    pgi: string

    @imageId()
    image: BigInt

    @transactionType()
    transaction_type: string

    @entityType()
    entity_type: string

    @column('String', {
        name: 'Contributor/lender/transfer name'
    })
    name: string

    @column('String', {
        name: 'City'
    })
    city: string

    @column('String', {
        name: 'State'
    })
    state: string

    @column('String', {
        name: 'ZIP code'
    })
    zip: string

    @column('String', {
        name: 'Employer'
    })
    employer: string

    @column('String', {
        name: 'Occupation'
    })
    occupation: string

    @transactionDate()
    date: Date

    @decimal({
        name: 'Transaction amount'
    })
    amount: number

    @column('FixedString', {
        name: 'FEC ID',
        length: 9,
        padLeft: '0'
    })
    fec_id?: string

    @column('String')
    transaction_id: string

    @column('UInt128')
    report_id: BigInt

    @column('Bool', {
        trueValue: 'X',
        falseValue: ''
    })
    memo_code?: boolean

    @column('String', {
        name: 'Memo text'
    })
    memo: string

}