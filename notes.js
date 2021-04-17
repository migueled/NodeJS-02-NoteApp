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
        console.log( chalk.green.inverse( 'New note add' ) );
    } else {
        console.log( chalk.red.inverse( 'Note title taken!' ) );
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
/*Remove*/
const removeNote = ( title ) => {
    const notes = loadNotes();
    if( notes.length > 0 ){
        const filterNotes = notes.filter( (note ) => note.title !== title );
        if( notes.length !== filterNotes.length ){
            saveNotes( filterNotes );
            console.log( chalk.green.inverse( 'Note removed' ) );
        } else {
            console.log( chalk.red.inverse( 'No note found' ) );
        }
    } else {
        console.log( chalk.red.inverse( 'No notes add' ) );
    }
    
};

module.exports = {
    getNotes : getNotes,
    addNote  : addNote,
    removeNote : removeNote
};