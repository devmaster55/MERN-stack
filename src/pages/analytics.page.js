import React, { useState, useEffect } from "react";
import ScatterChart from "../components/ScatterChart"
import BubbleChart from "../components/BubbleChart"

import AccountsDataService from '../services/AccountsService';

const AnalyticsPage = () => {
  const [scatterChartData, setScatterChartData] = useState([])
  /**
   * {
   *    state: {
   *      x: '', // sum of balance for the state
   *      y: '', // average credit for the state
   *      z: X, // number of accounts
   *    }
   * }
   */
  const [mapDataByState, setMapDataByState] = useState(new Map())
  const [arrayDataByState, setArrayDataByState] = useState([])

  useEffect(() => {
    retrieveAllAccounts();
  }, [])

  const retrieveAllAccounts = () => {
    AccountsDataService.getAll()
      .then(response => {
        convertToIndividualData(response.data)
        convertToStateData(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const convertToIndividualData = (accounts) => {
    const temp = accounts.map(item => {
      return {
        name: `${item.nameFirst} ${item.nameLast}`,
        x: item.balance,
        y: item.credit,
      }
    })
    setScatterChartData(temp)
  }

  const getStateFromAddress = (address) => {
    // Make sure the address is a string.
    if (typeof address !== "string") throw "Address is not a string.";

    // Trim the address.
    address = address.trim()
    const segments = address.split(',')
    const state = abbrState(segments[2].trim(), 'abbr')
    // const state = segments[2].trim()
    return state
  }

  const abbrState = (input, to) => {
    var states = [
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['American Samoa', 'AS'],
      ['Arizona', 'AZ'],
      ['Arkansas', 'AR'],
      ['Armed Forces Americas', 'AA'],
      ['Armed Forces Europe', 'AE'],
      ['Armed Forces Pacific', 'AP'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['District Of Columbia', 'DC'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Guam', 'GU'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Marshall Islands', 'MH'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Northern Mariana Islands', 'NP'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Puerto Rico', 'PR'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['Virgin Islands', 'VI'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
      ['Federated States Of Micronesia', 'FM'],
      ['Palau', 'PW'],
    ];

    // So happy that Canada and the US have distinct abbreviations
    var provinces = [
      ['Alberta', 'AB'],
      ['British Columbia', 'BC'],
      ['Manitoba', 'MB'],
      ['New Brunswick', 'NB'],
      ['Newfoundland', 'NF'],
      ['Northwest Territory', 'NT'],
      ['Nova Scotia', 'NS'],
      ['Nunavut', 'NU'],
      ['Ontario', 'ON'],
      ['Prince Edward Island', 'PE'],
      ['Quebec', 'QC'],
      ['Saskatchewan', 'SK'],
      ['Yukon', 'YT'],
    ];

    var regions = states.concat(provinces);

    var i; // Reusable loop variable
    if (to === 'abbr') {
      input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
      for (i = 0; i < regions.length; i++) {
        if (regions[i][0] === input) {
            return (regions[i][1]);
        }
      }
    } else if (to === 'name') {
      input = input.toUpperCase();
      for (i = 0; i < regions.length; i++) {
        if (regions[i][1] === input) {
            return (regions[i][0]);
        }
      }
    }
  }

  const convertToStateData = (accounts) => {
    accounts.forEach(element => {
      const {
        address,
        balance,
        credit,
      } = element
      
      const state = getStateFromAddress(address)

      let temp_data = {};

      if (mapDataByState.has(state)) {
        const {
          x,
          y,
          z,
        } = mapDataByState.get(state)

        temp_data = {
          state,
          x: x + balance,
          y: (y + credit) / (z + 1),
          z: z + 1,
        }
      } else {
        temp_data = {
          state,
          x: balance,
          y: credit,
          z: 1,
        }
      }

      mapDataByState.set(state, temp_data)
      setMapDataByState(mapDataByState)
    })

    // console.log('dataByState', mapDataByState)

    let temp_array_data = []
    mapDataByState.forEach((value, key) => {
      temp_array_data.push(value)
    })

    setArrayDataByState(temp_array_data)
  }

  return (
    <div>
      <ScatterChart data={scatterChartData}/>
      <BubbleChart data={arrayDataByState} />
    </div>
  );
};

export default AnalyticsPage;
