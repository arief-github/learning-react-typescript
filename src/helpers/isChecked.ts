import { IdValue } from '../types/props'

export function isChecked(checkedIds: IdValue[], idValue: IdValue) {
    return checkedIds.includes(idValue)
}