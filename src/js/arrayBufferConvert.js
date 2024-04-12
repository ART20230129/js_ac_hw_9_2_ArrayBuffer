export default class ArrayBufferConverter {
        constructor() {
          this.buffer = ''; //буфер для хранения Unit16Array
        }
      
        //метод для загрузки данных из ArrayBuffer
        load(buffer) {
                this.buffer = buffer;
        }
     
        // метод преобразования данных из ArrayBuffer в строку
/*         toString() {
                const bufferView = new Uint16Array(this.buffer);
                let newString = '';            
                for (let i = 0; i < bufferView.length; i += 1) {
                  newString += String.fromCharCode(bufferView[i]);
                }
                console.log(newString);
                return newString;
        }  */

        toString() {
          const bufferView = new Uint16Array(this.buffer); 
          let result = String.fromCharCode(...bufferView); 
          console.log(result);     
          return result
        }  
        
}