import { DateTimePretty } from '../DateTimePretty/DateTimePretty'

export const DateTime = DateTimePretty((props) => {
    return (
        <p className='date'>{props.date}</p>
    )
})