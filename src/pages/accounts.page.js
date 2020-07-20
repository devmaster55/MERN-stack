import React, { useState, useEffect } from "react";

import ProfileCard from '../components/ProfileCard';
import AccountsDataService from '../services/AccountsService';

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

  return (
    <div class="container" >
      <div class="row">
        <div class="col-sm-9 row justify-content-around">
          {accounts.map(item => <ProfileCard user={item}/>)}          
        </div>
        <div class="col-sm-3 border-left align-middle">
          {`Click the card to see the details.`}
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
