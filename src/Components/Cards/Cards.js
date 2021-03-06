import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames';
function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {
if(!confirmed)
{
 return(<h1>Loading!........</h1>)
}
    
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center" >

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
<CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of active cases of Covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
<CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp>
</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Recovered cases from  Covid-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                       <Typography variant="h5">
<CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of death cases by  Covid-19</Typography>

                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}
export default Cards