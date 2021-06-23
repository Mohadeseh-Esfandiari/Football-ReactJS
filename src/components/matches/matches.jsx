import React from 'react';
import {matche, CardContent , Typography , Grid} from '@material-ui/core';
import cx from 'classnames';
import styles from './matches.module.css';

const matches = ({ data: {lastUpdate,group,limit,status}}) => {
    if (!group) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={matche} xs={12} md={3} className={cx(styles.matche)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>برنامه بازي ها</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{new Team(group).toTeamString()}</Typography>
                        <Typography variant="body2">{new Result(limit).toResultString()}</Typography>
                        <Typography variant="body2">{new Condition(status).toConditionString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default matches;