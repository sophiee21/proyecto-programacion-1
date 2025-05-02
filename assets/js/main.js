class Media{
    #artista;
    #album;
    constructor(album, artista){
        this.#artista=artista;
        this.#album=album;
    }
    get artista () {
        return this.#artista
    }
    get album () {
        return this.#album
    }
}
 
class album extends Media{
    #descripcion;
    #canciones;
    #genero;
    constructor(album,artista,canciones, genero, descripcion){
        super(album,artista);
        this.#canciones=canciones;
        this.#descripcion=descripcion;
        this.#genero=genero;
    }
    infAlbum1(){
       
        let titulo1album1=document.querySelector(".album1-h2");
        titulo1album1.innerHTML=this.album;
        let titulo2album1=document.querySelector(".album1-h3");
        titulo2album1.innerHTML=this.artista;
        let descripalbum1=document.querySelector(".descrip1");
        descripalbum1.textContent=descripcion1;
        let generoalbum1=document.querySelector(".genero1");
        generoalbum1.textContent=generoalb1;
        
    }   
    infAlbum2(){
        let titulo1album2=document.querySelector(".album2-h2");
        titulo1album2.innerHTML=this.album;
        let titulo2album2=document.querySelector(".album2-h3");
        titulo2album2.innerHTML=this.artista;
        let descripalbum2=document.querySelector(".descrip2");
        descripalbum2.textContent=descripcion2;
        let generoalbum2=document.querySelector(".genero2");
        generoalbum2.textContent=generoalb2;
    }
    infAlbum3(){
        let titulo1album3=document.querySelector(".album3-h2");
        titulo1album3.innerHTML=this.album;
        let titulo2album3=document.querySelector(".album3-h3");
        titulo2album3.innerHTML=this.artista;
        let descripalbum3=document.querySelector(".descrip3");
        descripalbum3.textContent=descripcion3;
        let generoalbum3=document.querySelector(".genero3");
        generoalbum3.textContent=generoalb3;
    }
   
    get descripcion () {
        return this.#descripcion
    }
    set descripcion (nuevaDescripcion) {
        if (typeof nuevaDescripcion !== "string") throw new TypeError("la descripcion debe ser un texto")
        this.#descripcion = nuevaDescripcion
    }
    get canciones() {
        return this.#canciones
    }
    set descripcion (nuevascanciones) {
        if (typeof nuevascanciones !== "string") throw new TypeError("las nuevas canciones deben ser textos")
        this.#canciones = nuevascanciones
    }
    get genero () {
        return this.#genero
    }
    set genero (nuevosgeneros) {
        if (typeof nuevosgeneros !== "string") throw new TypeError("los generos deben ser textos")
        this.#genero = nuevosgeneros
    } 
}

class cancion {
    #cancion;
    #duracion;

    constructor(cancion, duracion){
    this.#cancion=cancion;
    this.#duracion=duracion;
 

    }
    infCancion1(){
        let cancion1;
        let i;
        let album1canciones=document.querySelector(".cancionesalb1")
      
    for(i=0;i<10;i++){
        
        cancion1=document.createElement("div");
        cancion1.setAttribute("class", "cancion1");
        let nombrecancion1=document.createElement("h4");
        nombrecancion1.setAttribute("class","cancion1-nombre")
        nombrecancion1.textContent=HMHAS[i];
        
        let duracioncancion1=document.createElement("h5");
        duracioncancion1.setAttribute("class","cancion1-duracion1");
        duracioncancion1.textContent=duracion1[i];
        cancion1.appendChild(nombrecancion1);
        cancion1.appendChild(duracioncancion1);
        album1canciones.appendChild(cancion1);

    }  
    } 
    infCancion2(){
        let cancion2;
        let i;
        let album2canciones=document.querySelector(".cancionesalb2")
    
    for(i=0;i<10;i++){
        
        cancion2=document.createElement("div");
        cancion2.setAttribute("class", "cancion2");
        let nombrecancion2=document.createElement("h4");
        nombrecancion2.setAttribute("class","cancion2-nombre")
        nombrecancion2.textContent=CLANCY[i];
        
        let duracioncancion2=document.createElement("h5");
        duracioncancion2.setAttribute("class","cancion2-duracion2");
        duracioncancion2.textContent=duracion2[i];
        cancion2.appendChild(nombrecancion2);
        cancion2.appendChild(duracioncancion2);
        album2canciones.appendChild(cancion2);
    }  
    } 
  infCancion3(){
        let cancion3;
        let i;
        let album3canciones=document.querySelector(".cancionesalb3")
       
    for(i=0;i<10;i++){
        
        cancion3=document.createElement("div");
        cancion3.setAttribute("class", "cancion3");
        let nombrecancion3=document.createElement("h4");
        nombrecancion3.setAttribute("class","cancion3-nombre")
        nombrecancion3.textContent=WINGS[i];
        
        let duracioncancion3=document.createElement("h5");
        duracioncancion3.setAttribute("class","cancion3-duracion3");
        duracioncancion3.textContent=duracion3[i];
        cancion3.appendChild(nombrecancion3);
        cancion3.appendChild(duracioncancion3);
        album3canciones.appendChild(cancion3);

    } 
    } 
    get cancion () {
        return this.#cancion
    }
    get duracion () {
        return this.#duracion
    } 

}

//------ALBUM y DURACION------
HMHAS=["SKINNY","LUNCH","CHIHIRO","BIRDS OF A FEATHER","WILDFLOWER","THE GREATEST","L'AMOUR DE MA VIE","THE DINER","BITTERSUITE","BLUE"];
let duracion1=["3:39", "2:59", "5:03", "3:30","4:21","4:53","5:33","3:06","4:58","5:43"];

CLANCY=["Overcompensate","Next Semester","Backslide","Midwest Indigo","Routines In The Night","Vignette","The Craving","Lavish","Navigating","Snap Back","Oldies Station","At The Risk Of Feeling Dumb","Paladin Strait"];
let duracion2=["3:39", "2:59", "5:03", "3:30","4:21","4:53","5:33","3:06","4:58","5:43"];

WINGS=["Intro: Boy Meets Evil","Blood Sweat & Tears","Begin","Lie","Stigma","First Love","Reflection","MAMA","Awake","Lost","BTS Cypher 4","Am I Wrong","21st Century Girl","2! 3!","Interlude: Wings"];
let duracion3=["3:39", "2:59", "5:03", "3:30","4:21","4:53","5:33","3:06","4:58","5:43"];



//----descripciones de los albums----
let descripcion1="Hit Me Hard and Soft es el tercer álbum de estudio de la cantautora estadounidense Billie Eilish, lanzado el 17 de mayo de 2024 a través de Darkroom e Interscope Records. Billie Eilish coescribió Hit Me Hard and Soft con su hermano y colaborador frecuente Finneas, quien también produjo el álbum.";
let descripcion2="Clancy es el séptimo álbum de larga duración y quinto álbum de estudio del dúo estadounidense Twenty One Pilots, publicado el 24 de mayo de 2024 a través de Fueled by Ramen. Sirvió como prólogo al «capítulo final» de la serie de álbumes conceptuales que iniciaron hace casi una década con Blurryface (2015)";
let descripcion3="Wings es el segundo álbum de estudio del grupo BTS, publicado el 10 de octubre de 2016 por el sello Big Hit en cuatro versiones diferentes W, I, N y G y con un total de quince temas, siete de los cuales eran canciones en solitario de cada uno de los miembros. Una reedición, llamada You Never Walk Alone, salió a la venta el 13 de febrero de 2017, en la que se incluyeron tres temas nuevos.";


//----GENEROS DE LOS ALBUMS-----
let generoalb1="pop alternativo - lofi";
let generoalb2="Pop alternativo - Synth Pop - Pop Rap";
let generoalb3="Hip hop - EDM - dance pop - R&B";


// ------CREO INSTANCIAS DE LA CLASE ALBUM----
const album1= new album("HIT ME HARD AND SOFT", "Billie Eilish", HMHAS, descripcion1, generoalb1)
    if(document.getElementById("album1")){
    album1.infAlbum1();
    }
const album2= new album("CLANCY", "Twenty One Pilots", CLANCY, descripcion2, generoalb2)
    if(document.getElementById("album2")){
        album2.infAlbum2();
    }
const album3= new album("WINGS", "BTS", WINGS, descripcion3, generoalb3)
    if(document.getElementById("album3")){
        album3.infAlbum3();
    }

//-----CREO INTANCIAS DE LA CLASE CANCION------
const cancionalbum1= new cancion( HMHAS,duracion1 );
if(document.querySelector(".cancionesalb1")){
    cancionalbum1.infCancion1()
}
const cancionalbum2= new cancion( CLANCY,duracion2);
if(document.querySelector(".cancionesalb2")){
    cancionalbum2.infCancion2()
}
const cancionalbum3= new cancion( WINGS,duracion3);
if(document.querySelector(".cancionesalb3")){
    cancionalbum3.infCancion3()
}











//Animacion giro del album

const vinyl = document.querySelector('.album-cover'); //selecciono al elemento con la clase album-cover y lo guardo

let rotationAngle = 0; //ángulo actual de rotación de la imagen en grados
const rotationAnimation = function(){//actualiza la rotación de la imagen y solicita el siguiente cuadro de la animación
    rotationAngle += 0.5;//En cada llamada de la función, el valor de rotationAngle se incrementa en el numero que le pongas. Esto significa que la imagen rota (num) grado más en cada cuadro de la animación. Si es un numero mas grande va a girar mas rapido, si es mas chico mas lento
    vinyl.style.transform = 'rotate(' + rotationAngle + 'deg)'//esto hace que la imagen rote aplicandole los estilos dinamicamente al css
    requestAnimationFrame(rotationAnimation);
}
rotationAnimation()



//botones album y artista
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");

// Mostrar el primer contenido al cargar la página
contenido1.style.display = "flex";
contenido2.style.display = "none";

boton1.addEventListener("click", function() {
    contenido1.style.display = "flex";
    contenido2.style.display = "none";//no muestra el segundo contenido
});

boton2.addEventListener("click", function() {
    contenido1.style.display = "none";//no muestra el primer contenido
    contenido2.style.display = "flex";
});

/*botones de pause y play*/
const audio = document.querySelector('.track'); //agarro el audio
const playBtn = document.querySelector('.play'); //boton de play y pause
const iconPlay = playBtn.querySelector('.fa-play'); //selecciono los iconos para que me sirvan como los botones
const iconPause = playBtn.querySelector('.fa-pause');

playBtn.addEventListener('click', function() {
    if (audio.paused) {//si el audio esta pausado entonces que ponga play. para saberlo se usa la propiedad paused de audio
        audio.play();//metodo de js que le pone play al audio
        iconPlay.classList.add('hide');//se le agrega la clase hide al bt play
        iconPause.classList.remove('hide');//se le saca la clase hide porque ahora esta sonando 
    } else {//si el audio esta en play entonces se pausa
        audio.pause();//metodo de js que le pone pausa al audio
        iconPause.classList.add('hide');//lo mismo que antes pero al contrario
        iconPlay.classList.remove('hide');
    }
});

const audio2 = document.querySelector('.track-2'); //agarro el audio
const playBtn2 = document.querySelector('.play-2'); //boton de play y pause
const iconPlay2 = playBtn.querySelector('.lunch-billie-pl'); //selecciono los iconos para que me sirvan como los botones
const iconPause2 = playBtn.querySelector('.fa-pause');

playBtn2.addEventListener('click', function() {
    if (audio2.paused) {//si el audio esta pausado entonces que ponga play. para saberlo se usa la propiedad paused de audio
        audio2.play();//metodo de js que le pone play al audio
        iconPlay2.classList.add('hide');//se le agrega la clase hide al bt play
        iconPause2.classList.remove('hide');//se le saca la clase hide porque ahora esta sonando 
    } else {//si el audio esta en play entonces se pausa
        audio2.pause();//metodo de js que le pone pausa al audio
        iconPause2.classList.add('hide');//lo mismo que antes pero al contrario
        iconPlay2.classList.remove('hide');
    }
});
    

