var materials = [
    'Reason',
    'Code',
    'ReasonCode',
    'JavascriptAllDay'
];

//ES5
materials.map(function(material) {
    return material.length;
}); //[6. 4. 10. 16]

//ES6 OK
materials.map((material) => {
    return material.length;
}); //[6, 4, 10, 16]

//ES6 EVEN BETTER - works with filter, forEach and reduce
materials.map(material => material.length); //[6, 4, 10, 16]


