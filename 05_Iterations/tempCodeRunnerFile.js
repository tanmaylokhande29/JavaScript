const myObject ={    //doesnt work for objects

    Game1: 'NFS',
    Game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key,':-',value);

}