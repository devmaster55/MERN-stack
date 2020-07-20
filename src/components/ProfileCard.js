import React from "react";

const ProfileCard = ({user}) => {
  return (    
    <div class="card col-4">
      <img src={`${user.picture}`} class="card-img-top rounded-circle" alt={'Avatar'}/>
      <div class="card-body">
        <h5 class="card-title">{`${user.name_first} ${user.name_last}`}</h5>
        <p class="card-text">{`${user.email}`}</p>
        <p class="card-text">{`${user.phone}`}</p>
        <p class="card-text">{`${user.address}`}</p>        
        {/* <p class="card-text">{`${user.comments}`}</p> */}
      </div>
    </div>
  );
};

export default ProfileCard;