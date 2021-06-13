import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    container: {
        padding: '10px 24px 12px'
    }
})
const RSVPAttendees = () => {
    const styles = useStyles();

    return(
        <div className={styles.container}>
            <h4>Attendees</h4>
        </div>
    )
}

export default RSVPAttendees;