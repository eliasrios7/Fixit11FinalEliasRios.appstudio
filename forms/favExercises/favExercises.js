var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
selExercises.clear()   //clear first
    for (i = 0; i <= exercises.length - 1; i++) 
    selExercises.addItem(exercises[i], "exercises") //addItem adds to the end of list
    for (i = 0; i <= coreExercises.length - 1; i++) 
    selExercises.addItem(coreExercises[i],"core") //addItem adds to the end of list
    
}

selExercises.onfocusout=function(){

let message = "Your exercises selected are:" 
  for (i = 0; i <= selExercises.text.length - 1; i++)
     message = message + "<br />" + selExercises.text[i]
  NSB.MsgBox(message)

}


