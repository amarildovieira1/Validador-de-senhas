export default class Valido {
   
    validarSenha(str: string): boolean{

     let contx = 0, conty = 0;
     let mL = str.split("");
     let num = ["0","1","2","3","4","5","6","7","8","9"]
     let letr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

     /* Verificanndo se há pelo menos um número na senha */
     for (let vx = 0; vx < mL.length; vx++) {
         for (let vy = 0; vy < num.length; vy++) {
            if (mL[vx]==num[vy]) {
               contx+=1
            }
         }
      }
      /* Verificanndo se há pelo menos uma letra maíuscula na senha  */

      for (let vx = 0; vx < mL.length; vx++) {
         for (let vy = 0; vy < letr.length; vy++) {
            if (mL[vx]==letr[vy]) {
               conty+=1
            }
         }
      }

      /* Retornando os Resultados das Senhas */
     if (contx>0 && conty>0) {
      return true
     }

     else {
      return false
     }
     
  }
  
}