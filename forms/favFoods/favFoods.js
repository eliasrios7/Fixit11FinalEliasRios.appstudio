let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  for (i = 0; i < goodFoods.length; i++)
    lstGroup.addItem(goodFoods[i])
}


lstGroup.onclick=function(choice){
  if(typeof(choice) == "object") return;
  NSB.MsgBox("You picked " + goodFoods[choice] + " - that is a great chooice")
}


btnDessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}
