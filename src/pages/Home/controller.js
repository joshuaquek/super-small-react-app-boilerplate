export function changeLocalMessage (_this) {
  return function (event) { // This is the event handler to return to the 'onChange' attribute
    _this._state.myMessage = event.target.value
  }
}

export function changeGlobalMessage (_this) {
  return function (event) { // This is the event handler to return to the 'onChange' attribute
    
  }
}