//This is challenge 1 fortune teller
//output a random quote from a list of 10 different quotes
var quoteList = [{
    author: 'Sam Keen',
    quote: 'We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.'
    
}, { 
    author: 'Confucius',
    quote: 'Life is really simple, but we insist on making it complicated.'
}, {
    author: 'Buddha',
    quote: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.'
}, {
    author: 'George Bernard Shaw',
    quote: "Life isn't about finding yourself. Life is about creating yourself."
}, {
    author: 'Soren Kierkegaard',
    quote: 'Life is not a problem to be solved, but a reality to be experienced.'
}, {
    author: 'Cesare Pavese',
    quote: 'We do not remember days, we remember moments.'
}, {
    author: 'Lyndon B. Johnson',
    quote: 'Yesterday is not ours to recover, but tomorrow is ours to win or lose.'
}, {
    author: 'Dalai Lama',
    quote: 'In order to carry a positive action we must develop here a positive vision.'
}, {
    author: 'H. Jackson Brown, Jr.',
    quote: 'The best preparation for tomorrow is doing your best today.'
}, {
    author: 'Helen Keller',
    quote: 'Keep your face to the sunshine and you cannot see a shadow.'
}
];

var generator = Math.round(Math.random() * 10);

console.log('' + quoteList[generator].quote + '' + ' - ' + quoteList[generator].author);
