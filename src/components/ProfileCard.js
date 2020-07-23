import React from "react";

const ProfileCard = ({user}) => {
  return (    
    <div className="card col-lg-4">
      <img src={`${user.picture}`} className="card-img-top rounded-circle" alt={'Avatar'}/>
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