import moment from 'moment'

export const DateTimePretty = (Component) => {
    return (props) => {
        const {date} = props;
        const dateDelta = moment(date).fromNow();

        return <Component {...props} date={dateDelta} />;
    };
};