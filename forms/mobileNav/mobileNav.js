
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
  return
  switch(s) {
  case "Login":
    ChangeForm(loginCU);
    break;
  case "Favorite Foods":
    ChangeForm(favFoods);
    break;
  case "Dessert Voting":
    ChangeForm(dessertVoting);
    break;
  case "Describe You":
    ChangeForm(describeYou);
    break;
  case "Favorite Excercises":
    ChangeForm(favExercises);
    break;
}
}
