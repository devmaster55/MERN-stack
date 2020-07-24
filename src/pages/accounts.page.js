import React, { useState, useEffect } from "react";

import ProfileCard from '../components/ProfileCard';
import AccountsDataService from '../services/AccountsService';

const { users } = require('../dummyData.json');

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)

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

  const handleClickCard = (item) => {
    console.log('item', item)
    setSelectedItem(item)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 row justify-content-around">
          {accounts.length > 0 ?
            accounts.map(item => <ProfileCard user={item} key={item.id} onPress={handleClickCard}/>)
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
            {selectedItem == null ?
            <p>{`Click the card to see the details.`}</p>
            :
            <div>
              <img src={`${selectedItem.picture}`} className="card-img-top rounded-circle" alt={'Avatar'}/>
              <div className="progress mx-3 my-2">
                <div className="progress-bar" role="progressbar" style={{width: `${selectedItem.indicatorValue}%`}} aria-valuenow={selectedItem.indicatorValue} aria-valuemin="0" aria-valuemax="100">{`${selectedItem.indicatorValue}%`}</div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{`${selectedItem.nameFirst} ${selectedItem.nameLast}`}</h5>
                <p className="card-text">{`${selectedItem.email}`}</p>
                <p className="card-text">{`${selectedItem.phone}`}</p>
                <p className="card-text">{`${selectedItem.address}`}</p>
                <p className="card-text">{`${selectedItem.comments}`}</p>
              </div>
            </div>
            }
          </div>          
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
