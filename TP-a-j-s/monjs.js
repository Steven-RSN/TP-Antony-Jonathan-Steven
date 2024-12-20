// déclaration des constantes
const imgCoupe = document.querySelector("#coupe");

const flecheGauche = document.querySelector('#flecheG')
const flecheDroite = document.querySelector('#flecheD')
const couleurs = document.querySelectorAll('.carre input[type=image]')

const dataCheveux=[
    ['img/hair-black-1.png','img/hair-black-2.png','img/hair-black-3.png'],
    ['img/hair-blond-1.png','img/hair-blond-2.png','img/hair-blond-3.png'],
    ['img/hair-turquoise-1.png','img/hair-turquoise-2.png','img/hair-turquoise-3.png']

];

//déclaration des variables (compteurs)

let compteurCouleur=0;

let compteurCoupe =0;







//boucle pour chaque couleurs de cheveux

for(let i=0 ; i<couleurs.length;i++){
    
    couleurs[i].addEventListener('click',function(){
        
        compteurCouleur=[i]
        imgCoupe.setAttribute('src', `${dataCheveux[compteurCouleur][compteurCoupe]}`)
            
        return compteurCouleur
        
    })

  

}





//Changer des coupe de cheveux (flèche de droite)

flecheDroite.addEventListener('click',function(){
    flecheGauche.style.opacity='100%'//opacité

    if(compteurCoupe<2 && compteurCoupe>=0){  // Interval
    
        imgCoupe.setAttribute('src', `${dataCheveux[compteurCouleur][compteurCoupe+1]}`)
        compteurCoupe++
        console.log(compteurCoupe)
        if(compteurCoupe==2) {
            
            flecheDroite.style.opacity='50%'
            
        }
        
        return compteurCoupe

    }
    
 

    
})


//Changer des coupe de cheveux ( flèche de gauche)


flecheGauche.addEventListener('click',function(){
  
    
    flecheDroite.style.opacity='100%'

    if(compteurCoupe<=2 && compteurCoupe>0){  //interval
        
        compteurCoupe--
    
        imgCoupe.setAttribute('src', `${dataCheveux[compteurCouleur][compteurCoupe]}`)
    
        if(compteurCoupe==0){
            flecheGauche.style.opacity='50%'
        }
        return compteurCoupe

    }
  

    

    
})


