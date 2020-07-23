import React, { useState, useEffect } from "react";

import ProfileCard from '../components/ProfileCard';
import AccountsDataService from '../services/AccountsService';

const { users } = require('../dummyData.json');

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    retrieveAllAccounts();
  }, []);

  const retrieveAllAccounts = () => {
    AccountsDataService.getAll()
      .then(response => {
        setAccounts(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const saveDummyDataToDB = () => {
    users.map(item => {
      return AccountsDataService.create(item)
      .then(response => {
        retrieveAllAccounts();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 row justify-content-around">
          {accounts.length > 0 ?
            accounts.map(item => <ProfileCard user={item} key={item.id}/>)
            :
            <p>
              {`No accounts`}
            </p>
          }          
        </div>
        <div className="col-sm-3 card-in-details">
          {accounts.length === 0 &&
          <button 
            className="btn btn-primary"
            onClick={() => saveDummyDataToDB()}
            disabled={accounts.length > 0}>
            {'Insert dummy data'}
          </button>}
          <div className="pl-3 border-left">
            <p>{`Click the card to see the details.`}</p>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
