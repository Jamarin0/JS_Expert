const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
;
(async () => {
    { 
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result =  File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result =  File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "GG Jamarino",
              "profession": "Javascript specialist",
              "age": 21
            },
            {
              "id": 321,
              "name": "Buz Lightyear",
              "profession": "Boneco specialist",
              "age": 80
            },
            {
              "id": 456,
              "name": "Jubileu Sabio",
              "profession": "Javascript developer",
              "age": 30
            }
          ]

          deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))

    }
})()