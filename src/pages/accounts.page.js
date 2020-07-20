import React, { useState } from "react";

import ProfileCard from '../components/ProfileCard';

const { users } = require('../dummy_data.json');

const AccountsPage = () => {
  return (
    <div class="container" >
      <div class="row">
        <div class="col-sm-9 row justify-content-around">
          {users.map(item => <ProfileCard user={item}/>)}          
        </div>
        <div class="col-sm-3 border-left align-middle">
          {`Click the card to see the details.`}
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
