import '@csvhub/core/decorator'

import { YEARS_FROM_1980 } from './constant'
import { committeeContributionCSV, committeeContributionTransport } from './transport'

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

@table('committee_contribution', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',

    transport: YEARS_FROM_1980.map(committeeContributionTransport),
    csv: YEARS_FROM_1980.map(committeeContributionCSV)
})
// https://www.fec.gov/campaign-finance-data/contributions-committees-candidates-file-description/
export class CommitteeContribution {

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

    @candidateId({ optional: true })
    candidate?: string

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