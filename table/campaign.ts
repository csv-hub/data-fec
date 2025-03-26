import '@csvhub/core/decorator'

import { campaignTransport, campaignCSV } from './transport'
import { CAMPAIGN_YEARS } from './constant'

@table('campaign', {
    dataset: 'fec',
    engine: 'MergeTree',
    primaryKey: 'id',
    // All years with candidate data
    transport: CAMPAIGN_YEARS.map(campaignTransport),
    csv: CAMPAIGN_YEARS.map(campaignCSV)
})
export class CandidateSummary {
    
	@column('FixedString', {
        name: 'Candidate identification',
        length: 9
    })
	id: string
    
	@column('String', {
        name: 'Candidate name'
    })
	name: string
    
	@column('Enum', {
        values: ['I', 'O', 'C', '']
    })
	incumbent: 'I' | 'O' | 'C' | ''
    
	@column('String', {
        optional: true
    })
	party_code: string
    
	@column('String', {})
	party: string
    
	@column('Decimal', {
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	receipts: number
    
	@column('Decimal', {
        name: 'Transfers from authorized committees',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	transfers_in: number
    
	@column('Decimal', {
        name: 'Total disbursements',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	disbursements: number
    
	@column('Decimal', {
        name: 'Transfers to authorized committees',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	transfers_out: number
    
	@column('Decimal', {
        name: 'Beginning cash',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	cash_start: number
    
	@column('Decimal', {
        name: 'Ending cash',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	cash_end: number
    
	@column('Decimal', {
        name: 'Contributions from candidate',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	candidate_contributions: number
    
	@column('Decimal', {
        name: 'Loans from candidate',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	candidate_loans: number
    
	@column('Decimal', {
        name: 'Other loans',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	other_loans: number
    
	@column('Decimal', {
        name: 'Candidate loan repayments',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	candidate_loan_repayment: number
    
	@column('Decimal', {
        name: 'Other loan repayments',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	other_loan_repayment: number
    
	@column('Decimal', {
        name: 'Debts owed',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	debt: number
    
	@column('Decimal', {
        name: 'Total individual contributions',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	contributions: number
    
	@column('String', {
        name: 'Candidate state',
        lowCardinality: true
    })
	state: string
    
	@column('String', {
        name: 'Candidate district'
        // lowCardinality: true,
        // length: 2,
        // padLeft: '0'
    })
	district: string
    
	@column('Enum', {
        name: 'Special election status',
        description: 'Election result data included in 1996-2006 files only.',
        values: ['W', 'L', 'R', ''],
        uppercase: true
    })
	special_election?: 'W' | 'L' | 'R' | ''
    
	@column('Enum', {
        name: 'Primary election status',
        description: 'Election result data included in 1996-2006 files only.',
        values: ['W', 'L', 'R', 'P', 'X', '0', ''],
        uppercase: true
    })
	primary_election?: 'W' | 'L' | 'R' | 'P' | 'X' | '0' | ''
    
	@column('Enum', {
        name: 'Runoff election status',
        description: 'Election result data included in 1996-2006 files only.',
        values: ['W', 'L', 'R', ''],
        uppercase: true
    })
	runoff_election?: 'W' | 'L' | 'R' | ''
    
	@column('Enum', {
        name: 'General election status',
        description: 'Election result data included in 1996-2006 files only.',
        values: ['W', 'L', 'R', ''],
        uppercase: true
    })
	general_election?: 'W' | 'L' | 'R' | ''
    
	@column('Decimal', {
        optional: true,
        name: 'General election percentage',
        precision: 7,
        scale: 4
    })
	general_election_percent?: number
    
	@column('Decimal', {
        name: 'Contributions from other political committees',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	other_transfers_in: number
    
	@column('Decimal', {
        name: 'Contributions from party committees',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	party_transfers_in: number
    
	@column('Date', {
        optional: true,
        format: 'MM/DD/YYYY',
        defaultValueOnError: true,
        defaultValue: null
    })
	end_date: Date
    
	@column('Decimal', {
        name: 'Refunds to individuals',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	contribution_refunds: number
    
	@column('Decimal', {
        name: 'Refunds to committees',
        precision: 14,
		scale: 2,
        defaultValueOnError: true,
        defaultValue: 0
    })
	committee_refunds: number
	
}