import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './ReportTargets/ConsoleReport'
import { WinsAnalysis } from './Analyzers/WinsAnalysis'
import { Summary } from './Summary'
import { HtmlReport } from './ReportTargets/HtmlReport'

// Create an object that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport())

summary.buildAndPrintReport(matchReader.matches)
