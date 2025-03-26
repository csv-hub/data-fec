import '@csvhub/core/decorator'

import { COMMITTEE_YEARS } from './constant'
import { committeeTransport, committeeCSV } from './transport'

// Shared column specifications
import { 
    committeeId,
    candidateId,
    filingFrequency,
    interestGroupType
} from './column'

@table('committee', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',

    transport: COMMITTEE_YEARS.map(committeeTransport),
    csv: COMMITTEE_YEARS.map(committeeCSV)
})
export class Committee {
    @committeeId()
	id: string

    
    @column('String', {
        name: 'Committee name'
    })
    name: string

    @column('String', {
        name: 'Committee treasurer'
    })
    treasurer: string

    @column('String', {
        name: 'Mailing street'
    })
    mail_street1: string

    @column('String', {
        name: 'Mailing street 2'
    })
    mail_street2: string

    @column('String', {
        name: 'Mailing city'
    })
    mail_city: string

    @column('String', {
        name: 'Mailing state'
    })
    mail_state: string

    @column('String', {
        name: 'Mailing zip'
    })
    mail_zip: string

    @column('Enum', {
        name: 'Committee designation',
        values: ['A', 'B', 'D', 'J', 'P', 'U', 'LA', 'H'],
        emptyStringNull: true,
        uppercase: true
    })
    designation: string

    // https://www.fec.gov/campaign-finance-data/committee-type-code-descriptions/
    @column('Enum', {
        name: 'Committee type',
        values: ['C', 'D', 'E', 'H', 'I', 'N', 'O', 'P', 'Q', 'S', 'U', 'V', 'W', 'X', 'Y','Z', 'UCP'],
        emptyStringNull: true,
        uppercase: true
    })
    type: string

    @column('String', {
        name: 'Party affiliation'
    })
    party: string

    @filingFrequency()
    filing_frequency: string

    @interestGroupType()
    interest_group: string

    @column('String')
    organization: string

    @candidateId({ optional: true })
    candidate?: string
}