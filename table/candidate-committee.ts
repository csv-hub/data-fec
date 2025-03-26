import '@csvhub/core/decorator'
import { YEARS_FROM_2000 } from './constant'
import { 
    candidateCommitteeCSV, 
    candidateCommitteeTransport
} from './transport'

@table('candidate_committee', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',
    transport: YEARS_FROM_2000.map(candidateCommitteeTransport),
    csv: YEARS_FROM_2000.map(candidateCommitteeCSV)
})
export class CandidateCommittee {
    @column('UInt32', {
        name: 'Unique Linkage ID'
    })
    id: number
    
    @column('FixedString', {
        name: 'Candidate identifier',
        length: 9
    })
    candidate: string

    @column('UInt16', {
        name: 'Candidate election year',
        description: 'Candidate election year'
    })
    year: number

    @column('UInt16', {
        name: 'FEC election year',
        description: 'Active 2-year period'
    })
    fec_year: number

    @column('FixedString', {
        length: 9,

    })
    committee: string

    // https://www.fec.gov/campaign-finance-data/committee-type-code-descriptions/
    @column('Enum', {
        values: ['C', 'D', 'E', 'H', 'I', 'N', 'O', 'P', 'Q', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z']
    })
    committee_type: string

    @column('Enum', {
        values: ['A', 'B', 'D', 'J', 'P', 'U', '']
    })
    committee_designation: string
}