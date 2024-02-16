
import React, { useState } from 'react'

const useAlert = () => {
    const [alert,setAlert] = useState({show : false,text :'', type :'danger'});
    const showAlert = ({text,type = 'daner'})=>{
        setAlert({
            show: true,
            text,
            type
        })
    }
    const hideAlert = ({text,type})=>{
        setAlert({
            show: false,
            text:'',
            type: 'danger'
        })
    }
  return {alert,showAlert,hideAlert};
}

export default useAlert