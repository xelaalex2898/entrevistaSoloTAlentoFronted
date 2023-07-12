# INSTRUCCIONES DE USO 

## Acceso a datos. 

    Dentro del proyecto EntrevistaSoloTalentoBackend hay un archivo con extensión .txt con el nombre "database.db" que contiene el código en SQL server que crea la base de datos y las tablas con sus respectivos campos. 
    
### Crear una base de datos 

    Se necesita un manejador de bases de datos SQL SERVER, como sql managment studio. 
    Acceda a su servidor local asegurandose tener encendido el servicio correspondiente.
    De click derecho en el apartado "Databases" y posteriormente de click sobre "new Database" debe ponerle el nombre "EntrevistaSoloTalento" dentro del campo database name.

    Por último en el menú superior presione el botón "New Querry" y pegue el código proporcionado en el archivo "database.db.txt" y ejecute con F5. 

### configuración del proyecto "EntrevistaSoloTalentoBackend"
    Antes de cerrar su manejador de base de datos debe obtener el nombre de su servidor. en mi caso es: "DESKTOP-86FDGJM\MSSQLSERVER01"
    Usando el editor de código de su preferencia, se recomienda Visual Studio 2022, acceda al archivo "appseting.json" en el directorio principal del proyecto. 
    Debe buscar el apartado "ConnectionStrings", dentro de este apartado hay una clave de nombre "SoloTalentoDB" en el valor correspondiente sustituya, usando el nombre de su servidor por: 
    "Data {nombre de su servidor};Initial Catalog=EntrevistaSoloTalento;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False".
    Sustituyendo {nombre de su servidor} por el nombre de su servidor. 
## Ejecución del proyecto "EntrevistaSoloTalentoBackend"

#### Opción 1:
    Abra el proyecto con Visual Studio 2022 y ejecute el proyecto. 
#### Opción 2:
    Dentro de una consola o CMD acceda al directorio del proyecto, una vez ahí escriba el comando 
    
    dotnet run. 

Esto creará un servidor local en el puerto 7193

    https://localhost:7193

## Ejecución del proyecto "EntrevistaSoloTalentoFrontend"

#### Opción 1:
    Abra el proyecto con Visual Studio Code, presionando el shurtcut 
    ctrl+ñ 
    para abrir una terminal ó abriendo usando la interfaz gráfica ejecute el comando 
    ng serve
#### Opción 2:
    Dentro de una consola o CMD acceda al directorio del proyecto, una vez ahí escriba el comando 
    ng serve 

Esto creará un servidor local en el puerto 4200

    http://localhost:4200/

Una vez ahí deberá registrarse. Por defecto los usuarios que cree dentro de la aplicación tendrán el rol de usuario NO manager. 

## Comentarios fianles

    Espero sea de su agrado, me esforcé mucho por seguir convenciones de clean code en ambos frameworks.
    Por tema de tiempo hay cosas que no pude completar como usar los servicios en angular. 

    Espero puedan tomarme en cuenta y así colaborar, espero con ansias sus comentarios y sea cual sea su decisión les agradezco por la oprtunidad, me divertí mucho en este proyecto. 
    
    


    