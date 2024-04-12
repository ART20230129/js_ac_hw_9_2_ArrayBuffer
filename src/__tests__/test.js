import ArrayBufferConverter from '../js/arrayBufferConvert';
import getBuffer from '../js/getBuffer';

test('loading data and converting it to a string', () => {
        const arrayBufferConverter = new ArrayBufferConverter();// создаём новый экземпляр класса
        const dataBuffer = getBuffer();// создаём ArrayBuffer из json-строки
        arrayBufferConverter.load(dataBuffer);// создаём представление Uint16Array из переданного ArrayBuffer
        const dataConverted = arrayBufferConverter.toString(); // конвертируем Uint16Array в json-строку
        expect(dataConverted).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});




