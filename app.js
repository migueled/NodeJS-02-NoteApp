const chalk = require( 'chalk' );
const yargs = require( 'yargs' );
/*------------Files------------*/
const notes = require( './notes' );

//-- customize yargs version
yargs.version( '1.1.0' );

//--Create add command
yargs.command({
    command :   'add',
    describe:   'Add a new note',
    builder :   {
        title : { 
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler :    ( argv ) => notes.addNote( argv.title , argv.body )
});

//-- Create remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder : {
        title : {
            describe : 'Delete a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : ( argv ) => notes.removeNote( argv.title )
});

//Create list command
yargs.command({
    command : 'list',
    describe: 'List you notes',
    handler : () => console.log( 'Listing out all note' )
});

//Create read command
yargs.command({
    command : 'read',
    describe: 'Read a note',
    handler : () => console.log( 'Reading a note' )
});

//--Add , Remove , Read , List
yargs.parse();