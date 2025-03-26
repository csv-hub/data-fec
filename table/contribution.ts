import '@csvhub/core/decorator'

import { 
    decimal,
    pgiIndicator,
    reportType,
    imageId,
    transactionType,
    entityType
} from './column'
import { CONTRIBUTION_YEARS } from './constant'
import { 
    contributionCSV,
    contributionTransport
} from './transport'

/**
 * An individual contribution
 */
@table('contribution', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',

    csv: CONTRIBUTION_YEARS.map(contributionCSV),
    transport: CONTRIBUTION_YEARS.map(contributionTransport)
})
export class Contribution {

    @column('UInt128', {
        name: 'Unique ID'
    })
    id: BigInt

    @column('FixedString', {
        name: 'Filer identification number',
        length: 9
    })
    committee: string

    @column('Enum', {
        values: ['N', 'A', 'T']
    })
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
    entity_type?: string
    
    @column('String')
    name: string
    
    @column('String')
    city: string

    @column('String')
    state: string

    @column('String')
    zip: string

    @column('String')
    employer: string

    @column('String')
    occupation: string

    @column('Date', {
        optional: true,
        format: 'MMDDYYYY',
        defaultValueOnError: true
    })
    date: Date

    @decimal({
        name: 'Transaction amount'
    })
    amount: number

    @column('FixedString', {
        optional: true,
        length: 9,
        padLeft: '0'
    })
    fec_id: string

    @column('String')
    transaction_id: string
    
    @column('UInt128', {
        removeSign: true
    })
    report_id: BigInt

    @column('Bool', {
        trueValue: 'X',
        falseValue: ''
    })
    memo_code: boolean

    @column('String')
    memo: string
}