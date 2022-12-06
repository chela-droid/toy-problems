names  = prompt ('marks');
grades = prompt('grades');


function promptmarks (){
    marks = prompt ("enter the marks");

if ((marks >=79) && (marks<= 100)){
    console.log ('Grade is A');
}
else if ((marks>=60)&&(marks<=79)){
    console.log ('Grade is B')
}
else if ((marks>=49) && (marks<=59)){
    console.log ('Grade is C')

}
else if ((marks>=40) && (marks<=49)){
    console.log ('Grade is D')
}
else if ((marks>=0) && (marks<=39)){
    console.log ('Grade is E')
}
else{
    console.log ('Grade not assigned')
}

}