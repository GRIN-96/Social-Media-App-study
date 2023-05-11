import React from 'react'
import "./TrendCard.css"

import { TrendData } from '../../Data/TrendData'

const TrandCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((trend) => {
            return (
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares} shares</span>
                </div>
            )
        })}

    </div>
  )
}

export default TrandCard
