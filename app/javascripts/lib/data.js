// +---------+--------------------+--------------+------------------------------------+---------+---------+---------+
// |    #    |   Compass point    | Abbreviation |       Traditional wind point       | Minimum | Middle  | Maximum |
// +---------+--------------------+--------------+------------------------------------+---------+---------+---------+
// | 1       | North              | N            | Tramontana                         | 354.38° | 0.00°   | 5.62°   |
// | 2       | North by east      | NbE          | Quarto di Tramontana verso Greco   | 5.63°   | 11.25°  | 16.87°  |
// | 3       | North-northeast    | NNE          | Greco-Tramontana                   | 16.88°  | 22.50°  | 28.12°  |
// | 4       | Northeast by north | NEbN         | Quarto di Greco verso Tramontana   | 28.13°  | 33.75°  | 39.37°  |
// | 5       | Northeast          | NE           | Greco                              | 39.38°  | 45.00°  | 50.62°  |
// | 6       | Northeast by east  | NEbE         | Quarto di Greco verso Levante      | 50.63°  | 56.25°  | 61.87°  |
// | 7       | East-northeast     | ENE          | Greco-Levante                      | 61.88°  | 67.50°  | 73.12°  |
// | 8       | East by north      | EbN          | Quarto di Levante verso Greco      | 73.13°  | 78.75°  | 84.37°  |
// | 9       | East               | E            | Levante                            | 84.38°  | 90.00°  | 95.62°  |
// | 10      | East by south      | EbS          | Quarto di Levante verso Scirocco   | 95.63°  | 101.25° | 106.87° |
// | 11      | East-southeast     | ESE          | Levante-Scirocco                   | 106.88° | 112.50° | 118.12° |
// | 12      | Southeast by east  | SEbE         | Quarto di Scirocco verso Levante   | 118.13° | 123.75° | 129.37° |
// | 13      | Southeast          | SE           | Scirocco                           | 129.38° | 135.00° | 140.62° |
// | 14      | Southeast by south | SEbS         | Quarto di Scirocco verso Ostro     | 140.63° | 146.25° | 151.87° |
// | 15      | South-southeast    | SSE          | Ostro-Scirocco                     | 151.88° | 157.50° | 163.12° |
// | 16      | South by east      | SbE          | Quarto di Ostro verso Scirocco     | 163.13° | 168.75° | 174.37° |
// | 17      | South              | S            | Ostro                              | 174.38° | 180.00° | 185.62° |
// | 18      | South by west      | SbW          | Quarto di Ostro verso Libeccio     | 185.63° | 191.25° | 196.87° |
// | 19      | South-southwest    | SSW          | Ostro-Libeccio                     | 196.88° | 202.50° | 208.12° |
// | 20      | Southwest by south | SWbS         | Quarto di Libeccio verso Ostro     | 208.13° | 213.75° | 219.37° |
// | 21      | Southwest          | SW           | Libeccio                           | 219.38° | 225.00° | 230.62° |
// | 22      | Southwest by west  | SWbW         | Quarto di Libeccio verso Ponente   | 230.63° | 236.25° | 241.87° |
// | 23      | West-southwest     | WSW          | Ponente-Libeccio                   | 241.88° | 247.50° | 253.12° |
// | 24      | West by south      | WbS          | Quarto di Ponente verso Libeccio   | 253.13° | 258.75° | 264.37° |
// | 25      | West               | W            | Ponente                            | 264.38° | 270.00° | 275.62° |
// | 26      | West by north      | WbN          | Quarto di Ponente verso Maestro    | 275.63° | 281.25° | 286.87° |
// | 27      | West-northwest     | WNW          | Maestro-Ponente                    | 286.88° | 292.50° | 298.12° |
// | 28      | Northwest by west  | NWbW         | Quarto di Maestro verso Ponente    | 298.13° | 303.75° | 309.37° |
// | 29      | Northwest          | NW           | Maestro                            | 309.38° | 315.00° | 320.62° |
// | 30      | Northwest by north | NWbN         | Quarto di Maestro verso Tramontana | 320.63° | 326.25° | 331.87° |
// | 31      | North-northwest    | NNW          | Maestro-Tramontana                 | 331.88° | 337.50° | 343.12° |
// | 32      | North by west      | NbW          | Quarto di Tramontana verso Maestro | 343.13° | 348.75° | 354.37° |
// +---------+--------------------+--------------+------------------------------------+---------+---------+---------+

export default [
  {
    'name': 'North',
    'abbreviation': 'N',
    'wind': 'Tramontana',
    'minimum': 354.38,
    'middle': 0.00,
    'maximum': 5.62,
  },
  {
    'name': 'North by east',
    'abbreviation': 'NbE',
    'wind': 'Quarto di Tramontana verso Greco',
    'minimum': 5.63,
    'middle': 11.25,
    'maximum': 16.87,
  },
  {
    'name': 'North-northeast',
    'abbreviation': 'NNE',
    'wind': 'Greco-Tramontana',
    'minimum': 16.88,
    'middle': 22.50,
    'maximum': 28.12,
  },
  {
    'name': 'Northeast by north',
    'abbreviation': 'NEbN',
    'wind': 'Quarto di Greco verso Tramontana',
    'minimum': 28.13,
    'middle': 33.75,
    'maximum': 39.37,
  },
  {
    'name': 'Northeast',
    'abbreviation': 'NE',
    'wind': 'Greco',
    'minimum': 39.38,
    'middle': 45.00,
    'maximum': 50.62,
  },
  {
    'name': 'Northeast by east',
    'abbreviation': 'NEbE',
    'wind': 'Quarto di Greco verso Levante',
    'minimum': 50.63,
    'middle': 56.25,
    'maximum': 61.87,
  },
  {
    'name': 'East-northeast',
    'abbreviation': 'ENE',
    'wind': 'Greco-Levante',
    'minimum': 61.88,
    'middle': 67.50,
    'maximum': 73.12,
  },
  {
    'name': 'East by north',
    'abbreviation': 'EbN',
    'wind': 'Quarto di Levante verso Greco',
    'minimum': 73.13,
    'middle': 78.75,
    'maximum': 84.37,
  },
  {
    'name': 'East',
    'abbreviation': 'E',
    'wind': 'Levante',
    'minimum': 84.38,
    'middle': 90.00,
    'maximum': 95.62,
  },
  {
    'name': 'East by south',
    'abbreviation': 'EbS',
    'wind': 'Quarto di Levante verso Scirocco',
    'minimum': 95.63,
    'middle': 101.25,
    'maximum': 106.87,
  },
  {
    'name': 'East-southeast',
    'abbreviation': 'ESE',
    'wind': 'Levante-Scirocco',
    'minimum': 106.88,
    'middle': 112.50,
    'maximum': 118.12,
  },
  {
    'name': 'Southeast by east',
    'abbreviation': 'SEbE',
    'wind': 'Quarto di Scirocco verso Levante',
    'minimum': 118.13,
    'middle': 123.75,
    'maximum': 129.37,
  },
  {
    'name': 'Southeast',
    'abbreviation': 'SE',
    'wind': 'Scirocco',
    'minimum': 129.38,
    'middle': 135.00,
    'maximum': 140.62,
  },
  {
    'name': 'Southeast by south',
    'abbreviation': 'SEbS',
    'wind': 'Quarto di Scirocco verso Ostro',
    'minimum': 140.63,
    'middle': 146.25,
    'maximum': 151.87,
  },
  {
    'name': 'South-southeast',
    'abbreviation': 'SSE',
    'wind': 'Ostro-Scirocco',
    'minimum': 151.88,
    'middle': 157.50,
    'maximum': 163.12,
  },
  {
    'name': 'South by east',
    'abbreviation': 'SbE',
    'wind': 'Quarto di Ostro verso Scirocco',
    'minimum': 163.13,
    'middle': 168.75,
    'maximum': 174.37,
  },
  {
    'name': 'South',
    'abbreviation': 'S',
    'wind': 'Ostro',
    'minimum': 174.38,
    'middle': 180.00,
    'maximum': 185.62,
  },
  {
    'name': 'South by west',
    'abbreviation': 'SbW',
    'wind': 'Quarto di Ostro verso Libeccio',
    'minimum': 185.63,
    'middle': 191.25,
    'maximum': 196.87,
  },
  {
    'name': 'South-southwest',
    'abbreviation': 'SSW',
    'wind': 'Ostro-Libeccio',
    'minimum': 196.88,
    'middle': 202.50,
    'maximum': 208.12,
  },
  {
    'name': 'Southwest by south',
    'abbreviation': 'SWbS',
    'wind': 'Quarto di Libeccio verso Ostro',
    'minimum': 208.13,
    'middle': 213.75,
    'maximum': 219.37,
  },
  {
    'name': 'Southwest',
    'abbreviation': 'SW',
    'wind': 'Libeccio',
    'minimum': 219.38,
    'middle': 225.00,
    'maximum': 230.62,
  },
  {
    'name': 'Southwest by west',
    'abbreviation': 'SWbW',
    'wind': 'Quarto di Libeccio verso Ponente',
    'minimum': 230.63,
    'middle': 236.25,
    'maximum': 241.87,
  },
  {
    'name': 'West-southwest',
    'abbreviation': 'WSW',
    'wind': 'Ponente-Libeccio',
    'minimum': 241.88,
    'middle': 247.50,
    'maximum': 253.12,
  },
  {
    'name': 'West by south',
    'abbreviation': 'WbS',
    'wind': 'Quarto di Ponente verso Libeccio',
    'minimum': 253.13,
    'middle': 258.75,
    'maximum': 264.37,
  },
  {
    'name': 'West',
    'abbreviation': 'W',
    'wind': 'Ponente',
    'minimum': 264.38,
    'middle': 270.00,
    'maximum': 275.62,
  },
  {
    'name': 'West by north',
    'abbreviation': 'WbN',
    'wind': 'Quarto di Ponente verso Maestro',
    'minimum': 275.63,
    'middle': 281.25,
    'maximum': 286.87,
  },
  {
    'name': 'West-northwest',
    'abbreviation': 'WNW',
    'wind': 'Maestro-Ponente',
    'minimum': 286.88,
    'middle': 292.50,
    'maximum': 298.12,
  },
  {
    'name': 'Northwest by west',
    'abbreviation': 'NWbW',
    'wind': 'Quarto di Maestro verso Ponente',
    'minimum': 298.13,
    'middle': 303.75,
    'maximum': 309.37,
  },
  {
    'name': 'Northwest',
    'abbreviation': 'NW',
    'wind': 'Maestro',
    'minimum': 309.38,
    'middle': 315.00,
    'maximum': 320.62,
  },
  {
    'name': 'Northwest by north',
    'abbreviation': 'NWbN',
    'wind': 'Quarto di Maestro verso Tramontana',
    'minimum': 320.63,
    'middle': 326.25,
    'maximum': 331.87,
  },
  {
    'name': 'North-northwest',
    'abbreviation': 'NNW',
    'wind': 'Maestro-Tramontana',
    'minimum': 331.88,
    'middle': 337.50,
    'maximum': 343.12,
  },
  {
    'name': 'North by west',
    'abbreviation': 'NbW',
    'wind': 'Quarto di Tramontana verso Maestro',
    'minimum': 343.13,
    'middle': 348.75,
    'maximum': 354.37,
  }
];
