import React from 'react';

function Chef() {
  return (
    <div className="chef-container" id ="Chef" >
      <div className="restau">
        <img
          src="/images/chef.jpg"
          alt="Chef"
          className="chef-image"
          width="700"
          height="900"
        />
        <img
          src="/images/presentchef.jpg"
          alt="Présentation du chef"
          className="chef-image"
          width="700"
          height="900"
        />
      </div>
    </div>
  );
}

export default Chef;