import casual from 'casual';
import races from './races';
import classes from './classes';
import genders from './genders';

casual.define('gender', ()=> casual.random_element(genders.map((gender) => gender.name)));
casual.define('class', function() {
    return {
        name: casual.random_element(classes.map((c) => c.name )),
        level: casual.integer(1, 20)
    };
});
casual.define('race', function() {
    let all = [];
    races.forEach((race) => {
        if (race.variants !== undefined) {
            race.variants.forEach((variant) => all.push(Object.create(variant)));
        }
        all.push(race);
    });
    return casual.random_element(all
        .filter( (race) => race.playable )
        .map( (race) => race.name )
    );
});

export default [
    {
        id: casual.building_number,
        name: casual.full_name,
        player: casual.full_name,
        race: casual.race,
        physicals: {
            gender: casual.gender,
            age: 24,
            sizeCategory: 'M',
            size: '1m92',
            weight: '90kg',
            complexion: 'caucasian',
            hair: 'blondie',
            eye: 'blue',
            handedness: 'right-handed'
        },
        alliegances: [
            'Cimeria',
            'Zingaria'
        ],
        allies: [
        ],
        enemies: [
        ],
        experience: {
            points: 1200,
            malus: 0
        },
        classes: [
            casual.class,
            casual.class
        ]
    },
    {
        id: casual.building_number,
        name: casual.full_name,
        player: casual.full_name,
        race: casual.race,
        physicals: {
            gender: casual.gender,
            age: 17,
            sizeCategory: 'M',
            size: '1m72',
            weight: '80kg',
            complexion: 'caucasian',
            hair: 'blondie',
            eye: 'green',
            handedness: 'right-handed'
        },
        alliegances: [
            'Cimeria'
        ],
        allies: [
        ],
        enemies: [
        ],
        experience: {
            points: 1500,
            malus: 0
        },
        classes: [
            casual.class
        ]
    },
    {
        id: casual.building_number,
        name: casual.full_name,
        player: casual.full_name,
        race: casual.race,
        physicals: {
            gender: casual.gender,
            age: 20,
            sizeCategory: 'M',
            size: '1m68',
            weight: '50kg',
            complexion: 'caucasian',
            hair: 'brunette',
            eye: 'brown',
            handedness: 'right-handed'
        },
        alliegances: [
        ],
        allies: [
        ],
        enemies: [
        ],
        experience: {
            points: 1200,
            malus: 20
        },
        classes: [
            casual.class
        ]
    }
];
