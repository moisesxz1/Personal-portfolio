import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {

    public url: string;

    constructor() {
        this.url = Global.url;
    }

    //                       SUBIR FICHEROS AL BACKEND

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {

        return new Promise(function (resolve, reject) { 
            var formData: any = new FormData(); //Simular formulario clasico, Crear un formulario en un objeto
            var xhr = new XMLHttpRequest(); // Sinonimo de AJAX, XMLHTTP: Objeto de peticiones asincronas 

            for (var i = 0; i < files.length; i++) {//Recorrer los ficheros y adjuntarlos al formulario // 1
                formData.append(name, files[i], files[i].name); // name: el nombre del parametro
            }

            xhr.onreadystatechange = function () { //3
                if (xhr.readyState == 4) { // valor por defecto
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response)); //resolve: lo que se retorna, parsear la respuesta del servicio
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true); // true: Asincrono 2
            xhr.send(formData);
        });
    }
}

//Parametros fileRequest : 1. URL a hace peticion AJAX, 2. Posibles parametros a enviar, 3. Array de archivos, 4. nombre de la propiedad que va a recibir el backend

//El objeto XMLHttpRequest tiene la capacidad de mandar peticiones y recibir respuestas del servidor, lo anterior es lo que hace posible actualizar el contenido de una pagina
//sin tener que recargarla

//onreadystatechange: Cuando haya algun cambio en el servidor  esta propiedad lo detecta y lanza una funcion
//onreadystatechange: Es un metodo que no se ejecuta inmediatamente, es decir, se pone en espera a que haya algun cambio en el servidor y luego se ejecuta

//open: Prepara el objeto para hacer una peticion hacia el servidor

//send: Mandar la peticion
