// I would agree that you are a 'trusting' person too!

rdoPersonType.onclick=function(s){
  if (rdoPersonType.value == 0){  // picked the first choice
      NSB.MsgBox("I would agree that you are an 'optimistic' person too!",0,"Person Type")
  }else if(rdoPersonType.value == 1){ 
      NSB.MsgBox("I would agree that you are a 'pessimistic' person too!",0,"Person Type")
  }else if(rdoPersonType.value == 2){
  NSB.MsgBox("I would agree that you are a 'trusting' person too!.",0,"Person Type")
  }else{
  NSB.MsgBox("I would agree that you are an 'envious' person too!.",0,"Person Type")
}
  
}
