document.write("10.Remove number 10 in the given array and add 0,1,2 in front of the array"+"<br>")
document.write("--------------------------------------------------------------------------"+"<br>")

var a = [3,4,5,6,7,8,9,10] ; 
document.write(a+"<br>")

var b=a.pop()
document.write(a+"<br>")

var c=a.unshift(0,1,2)
document.write(a+"<br>")
