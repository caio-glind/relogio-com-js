let data = new Date();
    let hora = data.getHours();
    let minutos=data.getMinutes();
    let sigundos = data.getSeconds();
    let total=hora+":"+minutos+":"+sigundos;

   function ca (){
    let data = new Date();
    let horas = data.getHours();
    let minutos=data.getMinutes();
    let sigundos = data.getSeconds();

    if(horas<10){
         horas="0"+horas;
     }
     if(minutos<10){
         minutos="0"+minutos;

     }
     if(sigundos<10){
         sigundos="0"+ sigundos;
     }



    let total=hora+":"+minutos+":"+sigundos;
    t.innerHTML=`${total}`
    }
    let tempo = setInterval(ca,1000);

    if(hora <=0  ||  hora <= 6 ){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #000000;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA MADRUGA `

    } else if( hora <=7 || hora <=12){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #F6C667;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA DIA `

    }else if(hora <=13 || hora <=18 ){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #64DFDF;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA TARDE`
    }else if(hora <=19 || hora <= 23){
        caio.innerHTML=`<style> body
                             {
                                background: #29252C;
                                }
                                .anbiente{
                                background:  url(https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                 background-size: cover;}
                             </style> BOA NOITE`

    }