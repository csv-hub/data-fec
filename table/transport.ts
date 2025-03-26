import { TransportDefinition } from '@csvhub/core'

const SUMMARY_HEADERS: string[] = [
    'id',
    'name',
    'incumbent',
    'party_code',
    'party',
    'receipts',
    'transfers_in',
    'disbursements',
    'transfers_out',
    'cash_start',
    'cash_end',
    'candidate_contributions',
    'candidate_loans',
    'other_loans',
    'candidate_loan_repayment',
    'other_loan_repayment',
    'debt',
    'contributions', // individual contributions
    'state',
    'district',
    'special_election',
    'primary_election',
    'runoff_election',
    'general_election',
    'general_election_percent',
    'other_transfers_in',
    'party_transfers_in',
    'end_date',
    'contribution_refunds',
    'committee_refunds'
]

/**
 * The all candidate summary file contains one record including summary financial information for all candidates who raised 
 * or spent money during the period no matter when they are up for election.
 */
export const candidateSummaryCSV = (year: number) => getDataCSV('weball', year)
export function candidateSummaryTransport(year: number) {
    return createDataTransport({
        id: 'weball', 
        header: SUMMARY_HEADERS, 
        year, 
        useYearId: true, 
        description: `Candidates in ${ year - 2 } to ${ year } election cycle`
    })
}

export const candidateCSV = (year: number) => getDataCSV('cn', year)

export function candidateTransport(year: number) {
    return createDataTransport({
        id: 'cn', 
        header: [
            'id',
            'name',
            'party',
            'year',
            'state',
            'office',
            'district',
            'incumbent',
            'status',
            'committee',
            'mail_street1',
            'mail_street2',
            'mail_city',
            'mail_state',
            'mail_zip'
        ], 
        year, 
        useYearId: false,
        description: `Candidates in ${ year - 2 } to ${ year } cycle`
    })
}

export const candidateCommitteeCSV = (year: number) => getDataCSV('ccl', year)
export function candidateCommitteeTransport(year: number) {
    return createDataTransport({
        id: 'ccl', 
        header: [
            'candidate',
            'year',
            'fec_year',
            'committee',
            'committee_type',
            'committee_designation',
            'id'
        ], 
        year, 
        useYearId: false,
        description: `Candidate committee link ${ year }`
    })
}

export const campaignCSV = (year: number) => getDataCSV('webl', year)
export function campaignTransport(year: number) {
    return createDataTransport({
        id: 'webl', 
        header: SUMMARY_HEADERS, 
        year,
        useYearId: true,
        description: `Campaigns for ${ year }`
    })
}

export const committeeCSV = (year: number) => getDataCSV('cm', year)
export function committeeTransport(year: number) {
    return createDataTransport({
        id: 'cm', 
        header: [
            'id',
            'name',
            'treasurer',
            'mail_street1',
            'mail_street2',
            'mail_city',
            'mail_state',
            'mail_zip',
            'designation',
            'type',
            'party',
            'filing_frequency',
            'interest_group',
            'organization',
            'candidate'
        ], 
        year, 
        useYearId: false, 
        description: `Committees for ${ year - 2 } - ${ year } cycle`
    })
}

export const pacCSV = (year: number) => getDataCSV('webk', year)
export function pacTransport(year: number) { 
    return createDataTransport({
        id: 'webk', 
        header: [
            'id',
            'name',
            'type',
            'designation',
            'filing_frequency',
            'receipts',
            'affiliate_transfers',
            'contributions',
            'committee_contributions',
            'candidate_contributions',
            'candidate_loans',
            'total_loans',
            'disbursements',
            'transfer_to_affiliates',
            'contribution_refunds',
            'committee_refunds',
            'candidate_loan_repayment',
            'loan_repayment',
            'cash_start',
            'cash_end',
            'debt',
            'nonfed_transfers',
            'transfer_to_committees',
            'expenditures',
            'party_expenditures',
            'nonfed_expenditures',
            'end_date'
        ], 
        year,
        useYearId: true,
        description: ``
    })
}

export const contributionCSV = (year: number) => getDataCSV('indiv', year)
export function contributionTransport(year: number) {
    return createDataTransport({
        id: 'indiv',
        header: [
            'committee',
            'amendment',
            'report_type',
            'pgi',
            'image',
            'transaction_type',
            'entity_type',
            'name',
            'city',
            'state',
            'zip',
            'employer',
            'occupation',
            'date',
            'amount',
            'fec_id',
            'transaction_id',
            'report_id',
            'memo_code',
            'memo',
            'id'
        ],
        description: '',
        useYearId: false,
        year,
        fileId: 'itcont'
    })
}

// 1980 - present
export const committeeContributionCSV = (year: number) => getDataCSV('pas2', year)
export function committeeContributionTransport(year: number) {
    return createDataTransport({
        id: 'pas2',
        header: [
            'committee',
            'amendment',
            'report_type',
            'pgi',
            'image',
            'transaction_type',
            'entity_type',
            'name',
            'city',
            'state',
            'zip',
            'employer',
            'occupation',
            'date',
            'amount',
            'fec_id',
            'candidate',
            'transaction_id',
            'report_id',
            'memo_code',
            'memo',
            'id'
        ],
        description: `Committee contributions`,
        useYearId: false,
        year,
        fileId: 'itpas2'
    })
}

// 1980 - present
export const transactionCSV = (year: number) => getDataCSV('pas2', year)
export function transactionTransport(year: number) {
    return createDataTransport({
        id: 'oth',
        header: [
            'committee',
            'amendment',
            'report_type',
            'pgi',
            'image',
            'transaction_type',
            'entity_type',
            'name',
            'city',
            'state',
            'zip',
            'employer',
            'occupation',
            'date',
            'amount',
            'fec_id',
            'transaction_id',
            'report_id',
            'memo_code',
            'memo',
            'id'
        ],
        description: `Other contributions`,
        useYearId: false,
        year,
        fileId: 'itoth'
    })
}

export const expenditureCSV = (year: number) => getDataCSV('oppexp', year)
export function expenditureTransport(year: number) {
    return createDataTransport({
        id: 'oppexp',
        header: [
            'committee',
            'amendment',
            'year',
            'report_type',
            'image',
            'line_number',
            'form_type',
            'schedule_type',
            'name',
            'city',
            'state',
            'zip',
            'date',
            'amount',
            'pgi',
            'purpose',
            'category',
            'description',
            'memo_code',
            'memo',
            'entity_type',
            'id',
            'report_id',
            'transaction_id',
            'reference_id'
        ],
        description: `Operating expenditures`,
        useYearId: false,
        year,
        fileId: 'oppexp'
    })
}


// 2004 -
// oppexp[year]
// becomes oppexp.txt

function getDataCSV(id: string, year: number) {
    return `${ id }/${ year }.csv`
}

interface FECTransport {
    id: string
    fileId?: string

    header: string[]
    year: number
    useYearId: boolean
    description: string
}

function createDataTransport({ id, fileId, header, year, useYearId, description }: FECTransport): TransportDefinition<'web'> {
    const yearId = year.toString().substring(2)
    const url = `https://www.fec.gov/files/bulk-downloads/${ year }/${ id }${ yearId }.zip`

    return {
        type: 'web',
        description,
        source: {
            url,
            unzip: true
        },
        destination: {
            source: `${ id }${ yearId }/${ fileId || id }${ useYearId ? yearId : '' }.txt`,
            file: `${ id }/${ year }.csv`,
            addHeader: header,
            mapSeparator: '|',
            trimValues: true,
            escape: '\\'
        }
    }
}