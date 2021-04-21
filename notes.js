const fs    = require( 'fs' );
const chalk = require( 'chalk' );

const addNote  = ( title , body ) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( ( note ) => note.title === title );

    debugger

    if( !duplicateNote ) {
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
        const filterNotes = notes.filter( ( note ) => note.title !== title );
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

/*List Notes*/
const listNotes = () => {
    const notes = loadNotes();
    if( notes.length > 0 ) {
        notes.forEach(element => {
            console.log( chalk.green.inverse('-------------------'));
            console.log( `Title : ${ element.title }` );
            console.log( `Body : ${ element.body }` );
        });
    } else {
        console.log( chalk.red.inverse( 'No notes add' ) );
    }
};

/*Delete note*/
const readNote = ( title ) => {
    const notes    = loadNotes();
    const findNote = notes.find( (note) => note.title === title );
    if( findNote ){
        console.log( findNote );
    } else {
        console.log( chalk.red.inverse('Note not found') );
    }
};

module.exports = {
    addNote    : addNote,
    removeNote : removeNote,
    listNotes  : listNotes,
    readNote   : readNote
};