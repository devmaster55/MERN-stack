import React from "react";

const ProfileCard = ({user}) => {
  return (    
    <div class="card col-4">
      <img src={`${user.picture}`} class="card-img-top rounded-circle" alt={'Avatar'}/>
      <div class="card-body">
        <h5 class="card-title">{`${user.nameFirst} ${user.nameLast}`}</h5>
        <p class="card-text">{`${user.email}`}</p>
        <p class="card-text">{`${user.phone}`}</p>
        <p class="card-text">{`${user.address}`}</p>        
        {/* <p class="card-text">{`${user.comments}`}</p> */}
      </div>
    </div>
  );
};

export default ProfileCard;