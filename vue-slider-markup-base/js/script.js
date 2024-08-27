const { createApp } = Vue;

createApp({
  data() {
    return {
      currentImg: 0, // indice di partenza
      intervalTime: null, // tempo di riferimento
      direction: 1, //cambio de senso dell'autoplay
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },

        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },

        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },

        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },

        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },

  methods: {
    // funzione per l'evento al click sullo pseudo-pulsante "prev"
    prev() {
        //controllo
        //SE l'indice è uguale a 0
            //ALLORA l'indice sarà l'ultimo indice dell'array
        //ALTRIMENTI decrementa
        if(this.currentImg === 0) this.currentImg = this.slides.length-1
        else this.currentImg--
    },

    // funzione per l'evento al click sullo pseudo-pulsante "next"
    next() {
        //controllo
        //SE l'indice è minore dell'ultimo indice dell'array (length - 1)
            //ALLORA incrementa
        //ALTRIMENTI setta l'indice a 0
        if(this.currentImg < this.slides.length-1) this.currentImg++
        else this.currentImg = 0
    },

    // funzione per l'evento al mouse sull'immagine (@mouseleave)
    startCarousel() {
      this.intervalTime = setInterval(this.changeSlide, 2000);
    },

    // funzione per l'evento al mouse sull'immagine (@mouseover)
    stopCarousel() {
      if (this.currentImg !== null) {
        clearInterval(this.intervalTime);
        intervalTime = null;
      }
    },

    //funzione per cambiare la direzione al click sul pulsane
    changeDirection(){
        //controllo
        //SE la direction è uguale a 1
            //ALLORA la direzione si imposta su -1
        //ALTRIMENTI la direzione si imposta su 1
        if(this.direction === 1) this.direction = -1
        else this.direction = 1
    },

    //funzione per il controllo della direzione delle slide, e la passo a startInterval
    changeSlide(){
        //controllo
        //SE direction è uguale a 1
            //ALLORA invoca il metodo nextSlide()
        //ALTRIMENTI invoca il metodo prevSlide()
        if(this.direction === 1) this.next();
        else this.prev()
    }
  },
  mounted() {
    this.startCarousel();
  },
}).mount("#app");
