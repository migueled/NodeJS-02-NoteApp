const fs = require( 'fs' );
const chalk = require( 'chalk' );


const getNotes = () => 'Your notes..';

const addNote  = ( title , body ) => {
    notes = loadNotes();
    const duplicateNotes = notes.filter( (note ) => note.title === title );

    if( duplicateNotes.length === 0 ) {
        notes.push({
            title : title,
            body  : body
        });
        saveNotes( notes );
        console.log( chalk.black.bold.bgGreen( 'New note add' ) );
    } else {
        console.log( chalk.black.bold.bgRed( 'Note title taken!' ) );
    }
};

const saveNotes = ( notes ) =>{
    const dataJSON = JSON.stringify( notes );
    fs.writeFileSync( 'notes.json' , dataJSON );
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync( 'notes.json' );
        const dataJSON   = dataBuffer.toString();
        return JSON.parse( dataJSON );
    } catch (error) {
        return [];
    }
};

module.exports = {
    getNotes : getNotes,
    addNote  : addNote
};