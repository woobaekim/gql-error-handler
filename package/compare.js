"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sample GraphQL query
var sampleQuery = "query Root {\n    allPlanets {\n      name\n      planets {\n        name\n        id\n        filmConnection {\n          films {\n            title\n          }\n        }\n      }\n    }\n  }";
var sampleQuery2 = "query {\n    character {\n      name\n      test\n      films {\n        title\n      }\n    }\n    films {\n      title\n    }\n  }\n\n  mutation {\n    createCharacter {\n      name\n      height\n      gender\n    }\n  }\n  ";
/*Sample Schema:
cacheSchema: {
[1]   query: {
[1]     characters: {
[1]       id: 'ID',
[1]       name: 'String',
[1]       height: 'Int',
[1]       gender: 'String',
[1]       birthYear: 'String',
[1]       eyeColor: 'String',
[1]       skinColor: 'String',
[1]       hairColor: 'String',
[1]       mass: 'String',
[1]       films: '[Film]'
[1]     },
[1]     films: {
[1]       id: 'ID',
[1]       title: 'String',
[1]       director: 'String',
[1]       releaseDate: 'String',
[1]       characters: '[Character]'
[1]     }
[1]   },
[1]   mutation: {
[1]     createCharacter: {
[1]       id: 'ID',
[1]       name: 'String',
[1]       height: 'Int',
[1]       gender: 'String',
[1]       birthYear: 'String',
[1]       eyeColor: 'String',
[1]       skinColor: 'String',
[1]       hairColor: 'String',
[1]       mass: 'String',
[1]       films: '[Film]'
[1]     }
[1]   }
[1] }
*/
function compare(schema, queryObj) {
    var errorObj = {};
    function helper(object, type) {
        for (var key in object) {
            if (schema[type][key]) {
                for (var i = 0; i < object[key].length; i++) {
                    if (typeof object[key][i] !== 'object') {
                        if (!schema[type][key][object[key][i]]) {
                            if (object[key][i][0] !== '_') {
                                if (errorObj[key]) {
                                    errorObj[key].push(object[key][i]);
                                }
                                else {
                                    errorObj[key] = [object[key][i]];
                                }
                            }
                        }
                    }
                    else {
                        // this is the case if an object exists in the array
                        helper(object[key][i], type);
                    }
                }
            }
        }
    }
    helper(queryObj.query, 'query');
    helper(queryObj.mutation, 'mutation');
    return errorObj;
}
module.exports = compare;
