import yargs = require('yargs');
import { calcWallStuds } from './gerald';

yargs.command(

    'calc-wall-studs',

    'Calculate the number of studs required to stick frame a house for Gerald',

    function( yargs ){

        return yargs.options({

            w: {
                type: 'number',
                alias: 'width',
                description: 'The width of the house'
            },

            l: {
                type: 'number',
                alias: 'length',
                description: 'The length of the house'
            }

        });

    },

    function( args ){

        let geraldsWoodPurchase = calcWallStuds( Number( args.width ), Number( args.length ));
        console.log( geraldsWoodPurchase );

    }

);

yargs.help().parse();