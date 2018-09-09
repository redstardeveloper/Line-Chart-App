import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Line as LineChart } from 'react-chartjs-2'

import { Spinner } from '../UI'
import styles from './Item.scss'

class Item extends Component {
  onChartButtonClick = e => {
    console.log(e.target.name)
  }

  render() {
    const { dataSet, loading } = this.props
    const data = {
      labels: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'r',
        's',
        't',
        'q'
      ],
      datasets: [
        {
          label: 'First dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'transparent',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[0]
        },
        {
          label: 'Second dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(192,192,75,0.4)',
          borderColor: 'transparent',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,192,75,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,192,75,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[1]
        },
        {
          label: 'Third dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(192,75,192,0.4)',
          borderColor: 'transparent',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,75,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,75,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[2]
        }
      ]
    }

    const chartLegend = {
      position: 'bottom'
    }

    const chartOptions = {
      position: 'bottom',
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      }
    }

    return (
      <Grid container className={styles.Item}>
        <Grid item xs={6} className={styles.Chart}>
          {loading ? (
            <Spinner />
          ) : (
            <LineChart
              data={data}
              legend={chartLegend}
              options={chartOptions}
            />
          )}
        </Grid>
      </Grid>
    )
  }
}

Item.propTypes = {
  dataSet: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool
}

export default Item
