const logger = param => store => next => action => { // next = reference to next middleware fn
    console.log("Logging", param);
    next(action);
  }
  
  export default logger

  // if this is the only middleware fn, "next" is going to be the reducer function