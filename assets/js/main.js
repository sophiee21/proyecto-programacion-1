class Media{
    artista;
    album;
     constructor(artista,album){
         this.artista=artista;
         this.album=album;
     }
     informacion(){
         console.log("Artista:" + this.artista  + "Album: " + this.album);
     }
 }
 
 class album extends Media{
         descripcion;
         canciones;
         constructor(album,artista,canciones,descripcion){
         super(album,artista);
         this.canciones=canciones;
         this.descripcion=descripcion;
     }
     infAlbum(){
         console.log("Nombre: " + this.album + " Artista: "+ this.artista+ " Canciones: " + this.canciones+ " Descripción: "+this.descripcion);
     }  
     }
 class cancion extends Media{
         cancion;
         duracion;
         genero;
         constructor(album,artista,cancion, duracion, genero){
         super(artista,album);
         this.cancion=cancion;
         this.duracion=duracion;
         this.genero=genero;
     }
     infCancion(){
         console.log(" Album: "+this.album+ " Nombre: " + this.cancion + " Artista:" + this.artista+  " Duracion: "+ this.duracion + " Genero:" + this.genero);
     }  
     }
     /*class artista extends Media{
     biografia;
     discografia;
     constructor(artista,biografia, discografia){
         super(artista);
         this.biografia=biografia;
         this.discografia=discografia;
     }
     infArtista(){
         console.log("Nombre:" + this.artista + "Biografia: "+this.biografia + "Discografica: "+ this.discografia);
     } 
     }*/


     //creamos arrays con las diferentes canciones de cada album
     HMHAS=["skinny","lunch","chihiro","birds of a feather","wildflower","the greatest","l amour de ma vie","the diner","bittersuite","blue"];

     NEVERMIND=["Smells like Teen Spirit","In bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain you", "Lounge Act", "Stay Away ", "On A Plain", "Something in The Way", "Endless, Nameless"];
     THEVERVE=["Bitter Sweet Symphony", "Sonnet", "The Rolling People", "The Drugs Don't Work","Catching The Butterfly", "Neon Wilderness", "Space And Time", "Weeping Willow", "Lucky Man", "One Day", "This Time", "Velvet Morning", "Come on/ Deep Freeze "];


     //pruebas 
    /*const artista=new media("billie", "Hit me hard and soft");
    artista.informacion();*/
     //subclase album
    const album1= new album("Hit me hard and soft", "billie", HMHAS, "descripcion...")
    album1.infAlbum();
    const album2= new album("Nevermind", "Nirvana", NEVERMIND, "descripcion")
    album2.infAlbum();



     const cancion1= new cancion("Hit me hard and soft","skinny","Billie Eilish","3:40", "Alternativo");
     cancion1.infCancion()





     //agrego al html
     //Album HMHAS
     let setalbum1=document.getElementById("album1");//
     let titulo1album1=document.querySelector(".album-h2");
     titulo1album1.innerHTML="HIT ME HARD AND SOFT";
     let titulo2album1=document.querySelector(".album-h3");
     titulo2album1.innerHTML="Billie Eilish";
     let titulo3album1=document.querySelector(".album-h4");
     titulo3album1.innerHTML="Artist";



     //Album NEVERMIND





