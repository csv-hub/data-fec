import '@csvhub/core/decorator'
import { candidateCSV, candidateTransport } from './transport'
import { YEARS_FROM_1980 } from './constant'

@table('candidate', {
    dataset: 'fec',
    primaryKey: ['id', 'year', 'status'],

    // All years with candidate data
    transport: YEARS_FROM_1980.map(candidateTransport),
    csv: YEARS_FROM_1980.map(candidateCSV)
})
export class Candidate {

    @column('FixedString', {
        length: 9
    })
    id: string

    @column('String')
    name: string

    @column('String', {
        lowCardinality: true
    })
    party: string
    
    @column('UInt16', {
        defaultValueOnError: true,
        defaultValue: 0
    })
    year?: number

    @column('String', {
        lowCardinality: true
    })
    state: string
        
    @column('Enum', {
        values: ['H', 'P', 'S', '']
    })
    office: 'H' | 'P' | 'S' | ''

    @column('FixedString', {
        optional: true,
        length: 2,
        padLeft: '0',
        defaultValue: null
    })
    district?: string

    @column('Enum', {
        values: ['C', 'I', 'O', '']
    })
    incumbent: 'C' | 'I' | 'O' | ''

    @column('Enum', {
        values: ['C', 'F', 'N', 'P', 'Q', 'I', '']
    })
    status: 'C' | 'F' | 'N' | 'P' | 'Q' | 'I' | ''
    
    @column('FixedString', {
        optional: true,
        length: 9,
        defaultValue: null
    })
    committee?: string

    @column('String')
    mail_street1: string
    
    @column('String')
    mail_street2: string

    @column('String')
    mail_city: string

    @column('String')
    mail_state: string

    @column('String')
    mail_zip: string

}