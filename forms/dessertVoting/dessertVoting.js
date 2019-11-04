var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   //clear first
    for (i = 0; i <= dessertList.length - 1; i++) 
    drpDesserts.addItem(dessertList[i]) //addItem adds to the end of list
}


drpDesserts.onclick=function(s){
    
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        drpDesserts.value = s   // make dropdown show choice user made
        lblPrompt.value = `You picked ${s} - that is a great choice!`
    }
}

btnDescribeYou.onclick=function(){
  ChangeForm(describeYou)
}
