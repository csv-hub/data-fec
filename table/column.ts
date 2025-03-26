import '@csvhub/core/decorator'
import { DefinitionOf } from '@csvhub/core'

import { 
    FILING_FREQUENCY,
    INTEREST_GROUP_TYPE
} from './constant'

export const decimal = (def: DefinitionOf<'Decimal'>) => column('Decimal', {
    precision: 14,
    scale: 2,
    defaultValueOnError: true,
    defaultValue: 0,
    ...def
})

export const committeeId = (def: DefinitionOf<'FixedString'> = {}) => column('FixedString', {
    name: 'Committee identifier',
    length: 9,
    padLeft: '0',
    ...def
})

export const candidateId = (def: DefinitionOf<'FixedString'> = {}) => column('FixedString', {
    name: 'Candidate identifier',
    length: 9,
    padLeft: '0',
    ...def
})

export const filingFrequency = (def: DefinitionOf<'Enum'> = {}) => column('Enum', {
    name: 'Filing frequency',
    values: FILING_FREQUENCY,
    emptyStringNull: true,
    ...def
})

export const interestGroupType = (def: DefinitionOf<'Enum'> = {}) => column('Enum', {
    name: 'Interest group type',
    values: INTEREST_GROUP_TYPE,
    emptyStringNull: true,
    ...def
})

export const amendmentIndicator = (def: DefinitionOf<'Enum'> = {}) => column('Enum', {
    name: 'Amendment indicator',
    description: 'Indicates if the report being filed is new (N), an amendment (A) to a previous report, or a termination (T) report.',
    values: ['N', 'A', 'T'],
    ...def
})

export const pgiIndicator = () => column('Enum', {
    values: ['P', 'G', 'O', 'C', 'R', 'S', 'E'],
    replace: /\d+/g,
    replaceWith: '',
    substring: [0, 1],
    emptyStringNull: true,
    defaultValueOnError: true,
    defaultValue: ''
})

export const reportType = () => column('Enum', {
    name: 'Report Type',
    description: 'Indicates the type of report filed',
    values: [
        '12C', '12G', '12P', '12R', '12S',
        '30D', '30G', '30P', '30R', '30S',
        '60D', 'ADJ', 'CA',  'M10', 'M11',
        'M12', 'M2',  'M3',  'M4',  'M5',
        'M6',  'M7',  'M8',  'M9',  'MY',
        'Q1',  'Q2',  'Q3',  'TER', 'YE',
        '90S', '90D', '48H', '24H', '24'
    ],
    emptyStringNull: true
})

export const entityType = () => column('Enum', {
    name: 'Entity type',
    values: [ 'CAN', 'CCM', 'COM', 'IND', 'ORG', 'PAC', 'PTY' ],
    emptyStringNull: true
})

export const transactionType = () => column('Enum', {
    name: 'Transaction type',
    values: [
        '10', '10J', '11', '11J', '12', '13', 
        '15', '15C', '15E', '15F', '15I', '15J', '15K', '15T', '15Z', 
        '16C', '16F', '16G', '16H', '16J', '16K', '16L', '16R', '16U', 
        '17R', '17U', '17Y', '17Z', 
        '18G', '18H', '18J', '18K', '18L', '18U', 
        '19', '19J', 
        '20', '20A', '20B', '20C', '20D', '20F', '20G', '20R', '20V', '20Y', '21Y', 
        '22G', '22H', '22J', '22K', '22L', '22R', '22U', '22X', '22Y', '22Z', 
        '23Y', '24A', '24C', '24E', '24F', '24G', '24H', '24I', '24K', '24N', '24P', '24R', '24T', '24U', '24Z', 
        '28L', '29', '30', '30E', '30F', '30G', '30J', '30K', '30T', '31', '31E', '31F', '31G', '31J', '31K', '31T', 
        '32', '32E', '32F', '32G', '32J', '32K', '32T', '40', '40Y', '40T', '40Z', '41', '41Y', '41T', '41Z', '42', 
        '42Y', '42T', '42Z'],
    emptyStringNull: true
})

export const imageId = () => column('UInt128', {
    name: 'Image number',
    description: `11-digit image number format
YYOORRRFFFF
YY - scanning year
OO - office (01 - House, 02 - Senate, 03 - FEC Paper, 90-99 - FEC Electronic)
RRR - reel number
FFFF- frame number

18-digit image number normat (June 29, 2015)
YYYYMMDDSSPPPPPPPP
YYYY - scanning year
MM - scanning month
DD - scanning day
SS - source (02 - Senate, 03 - FEC Paper, 90-99 - FEC Electronic)
PPPPPPPP - page (reset to zero every year on January 1)`
})

export const transactionDate = (def: DefinitionOf<'Date'> = {}) => column('Date', {
    name: 'Transaction Date',
    format: 'MMDDYYYY',
    ...def
})

export const memoCode = () => column('Bool', {
    trueValue: 'X',
    falseValue: ''
})