const chalk = require( 'chalk' );
const yargs = require( 'yargs' );

//-- customize yargs version
yargs.version( '1.1.0' );

//--Create add command
yargs.command({
    command :   'add',
    describe:   'Add a new note',
    handler:    () => console.log( 'Adding a new note!' )
});

//-- Create remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    handler : () => console.log( 'Removing thr note' )
});

/*
Challenge: Add two new commands
    1.- Setup command to support 'list' command ( print placeholder message for new)
    2.- Setup command to support 'read' command ( print placeholder message for new)
    3.- Test your work by running both commands and ensure correct output
*/

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
console.log( yargs.argv );