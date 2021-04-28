import moment from 'moment'
import { SSF } from 'xlsx'

const parseDate = (encDate) => {
    const now = SSF.parse_date_code(encDate)
    const parsed = moment({ year: now.y, month: now.m - 1, day: now.d })
    const formated = parsed.format('DD/MM/YYYY')
    return formated !== 'Invalid date' ? formated : ''
}

export default { parseDate }