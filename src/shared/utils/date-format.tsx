import moment from 'moment'

const DateFormat = 'YYYY-MM-DD';

export function formatDate(value: string | null) {
    return value ? moment(value).format(DateFormat) : '';
}