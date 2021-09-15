import React from 'react'
//refc
function Alert(props) {

    return (
      props.alert &&  <div className="container text-center">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.msg}</strong> 
            </div>
        </div>
    )
}

export default Alert
