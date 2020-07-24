import React, { useState, useEffect } from "react";
import ScatterChart from "../components/ScatterChart"

import AccountsDataService from '../services/AccountsService';

const AnalyticsPage = () => {
  const [scatterChartData, setScatterChartData] = useState([])

  useEffect(() => {
    retrieveAllAccounts();
  });

  const retrieveAllAccounts = () => {
    AccountsDataService.getAll()
      .then(response => {
        convertToChartData(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const convertToChartData = (accounts) => {
    const temp = accounts.map(item => {
      return {
        name: `${item.nameFirst} ${item.nameLast}`,
        x: item.balance,
        y: item.credit,
      }
    })
    setScatterChartData(temp)
  }

  return (
    <div>
      <ScatterChart data={scatterChartData}/>
    </div>
  );
};

export default AnalyticsPage;
