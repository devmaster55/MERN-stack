import React, { useState, useEffect } from "react";

const MAXIMUM_BALANCE_VALUE = 20000
const MAXIMUM_CREDIT_VALUE = 1000

const ProfileCard = ({user}) => {
  const [indicatorValue, setIndicatorValue] = useState(0)

  /**
   * weight for balance: 0.7
   * weight for credit: 0.3
   * maximum balance: 20000
   * maximum credit: 1000
   * formula: 
   * indicatorValue = balanceValue / 20000 * 0.7 + creditValue / 1000 * 0.3
   * for ex:
   * if balanceValue = 10000 and creditValue = 500,
   * indicatorValue = 0.5; it means 50%.
   */
  const calculateIndicator = () => {
    const balanceValue = user.balance ? parseFloat(user.balance) : 0
    const creditValue = user.credit ? parseFloat(user.credit) : 0
    
    const val = parseInt((balanceValue / MAXIMUM_BALANCE_VALUE * 0.7 + creditValue / MAXIMUM_CREDIT_VALUE * 0.3).toFixed(2) * 100)
    setIndicatorValue(val)
  }

  useEffect(() => {
    calculateIndicator()
  })

  return (    
    <div className="card col-lg-4">
      <img src={`${user.picture}`} className="card-img-top rounded-circle" alt={'Avatar'}/>
      <div className="progress mx-3 my-2">
        <div className="progress-bar" role="progressbar" style={{width: `${indicatorValue}%`}} aria-valuenow={indicatorValue} aria-valuemin="0" aria-valuemax="100">{`${indicatorValue}%`}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${user.nameFirst} ${user.nameLast}`}</h5>
        <p className="card-text">{`${user.email}`}</p>
        <p className="card-text">{`${user.phone}`}</p>
        <p className="card-text">{`${user.address}`}</p>
        {/* <p className="card-text">{`${user.comments}`}</p> */}
      </div>
    </div>
  );
};

export default ProfileCard;