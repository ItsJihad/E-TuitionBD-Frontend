import React, { use } from 'react'
import { Authcontext } from '../firebase/contexts/Authcontext'

function UseAuth() {
     
  return use(Authcontext)
}

export default UseAuth
