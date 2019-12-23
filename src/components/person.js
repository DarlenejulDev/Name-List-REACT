import React from "react";

class Person extends React.Component{

  render(){
    const{name, favoriteColor} = this.props;
    return (
    <div>
     <p>{name}</p>
     <p>{favoriteColor}</p>
    </div>
  );
  }
}

// export compenent

export default Person
