const myobject ={
  js: 'javascript',
  cpp: 'C++',
  rb : 'ruby',
  swift: 'swift by apple'
}

for (const key in myobject) {
  // console.log(myobject[key]);
  // console.log(`${key} shortcut is for ${myobject[key]}`)
}


const programming =["js","rb","py","java","cpp"]

for(const key in programming){
  // console.log(key);
  // console.log(programming[key]);

}

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

for (const key in map) {
  console.log(key);
 
}