

function person(){
		this.name="Ram";
		this.school="DAV";
}

//if p of person is made capital,it is treated as class
//if small,it is treated as function

var x=new person();

//4 statements are executed

//1. new Object()-a new object is created
//2. linkage-to parent superclasses(prototypes)
//3. this=Object-this is object
//4. return this-object is returned

console.log(x);