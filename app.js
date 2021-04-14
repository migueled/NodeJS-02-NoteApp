const fs = require( 'fs' );

/*

fs.writeFileSync( 'notes.txt' , 'This file was created by Node JS, My name is Miguel' );

Challenge:  Append a message to notes.txt
    1.- Use appendFileSync to append to the file.
    2.- Run the script.
    3.- Check you work by opening the file and viewing the appended text

    fs.appendFileSync( 'notes.txt' , 'i am 25 years old' , { encoding : 'utf8' , flag : 'w' } );
    
*/

fs.appendFileSync( 'notes.txt' , '. I am 25 years old' );
   