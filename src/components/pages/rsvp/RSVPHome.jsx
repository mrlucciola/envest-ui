import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    container: {
        padding: '10px 24px 12px'
    }
})
const RSVPHome = () => {
    const styles = useStyles();

    return(
        <div className={styles.container}>
            <h4>Home</h4>
        </div>
    )
}

export default RSVPHome;