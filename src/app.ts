import { envs } from "./config";
import { AppRoutes } from "./presentacion/router"; //1
import { Server } from "./presentacion/server";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT,
        routes: AppRoutes.routes //2
      }).start();
  }