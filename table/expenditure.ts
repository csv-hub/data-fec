import '@csvhub/core/decorator'

import { YEARS_FROM_2004 } from './constant'
import { expenditureCSV, expenditureTransport } from './transport'

// Shared column specifications
import { 
    committeeId,
    amendmentIndicator,
    reportType,
    imageId,
    transactionDate,
    decimal,
    pgiIndicator,
    memoCode,
    entityType
} from './column'

@table('expenditure', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',

    transport: YEARS_FROM_2004.map(expenditureTransport),
    csv: YEARS_FROM_2004.map(expenditureCSV)
})
export class Expenditure {

    @column('UInt128', {
        name: 'FEC record number'
    })
    id: BigInt

    @committeeId()
    committee: string

    @amendmentIndicator()
    amendment: string

    @column('UInt16', {
        name: 'Report year'
    })
    year: number

    @reportType()
    report_type: string

    @imageId()
    image: BigInt

    @column('UInt8', { optional: true })
    line_number?: number

    @column('String')
    form_type: string

    @column('String')
    schedule_type: string

    @column('String')
    name: string

    @column('String')
    city: string

    @column('String')
    state: string

    @column('String')
    zip: string

    @transactionDate()
    date: Date

    @decimal({
        name: 'Transaction amount'
    })
    amount: number

    @pgiIndicator()
    pgi: string

    @column('String')
    purpose: string

    // https://www.fec.gov/campaign-finance-data/disbursement-category-code-descriptions/
    @column('Enum', {
        name: 'Disbursement category code',
        values: [
            '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012',
            '101', '102', '103', '104', '105', '106', '107'
        ]
    })
    category: string

    @column('String')
    description: string

    @memoCode()
    memo_code: boolean

    @column('String', {
        name: 'Memo text'
    })
    memo: string

    @entityType()
    entity_type: string
    
    @column('UInt32', {
        name: 'Report ID'
    })
    report_id: string

    @column('String')
    transaction_id: string

    @column('String', {
        optional: true
    })
    reference_id: string
}