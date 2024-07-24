const cardArray=[
    {
    	name:"dog",
    	icon:"<i class='fa-solid fa-dog'><i>"
    },
    {
    	name:"hippo",
    	icon:"<i class='fa-solid fa-hippo'><i>"
    },
    {
    	name:"fish",
    	icon:"<i class='fa-solid fa-fish'><i>"
    },
    {
    	name:"cat",
    	icon:"<i class='fa-solid fa-cat'><i>"
    },
    {
    	name:"spider",
    	icon:"<i class='fa-solid fa-spider'><i>"
    },
    {
    	name:"frog",
    	icon:"<i class='fa-solid fa-frog'><i>"
    },
    {
    	name:"dog",
    	icon:"<i class='fa-solid fa-dog'><i>"
    },
    {
    	name:"hippo",
    	icon:"<i class='fa-solid fa-hippo'><i>"
    },
    {
    	name:"fish",
    	icon:"<i class='fa-solid fa-fish'><i>"
    },
    {
    	name:"cat",
    	icon:"<i class='fa-solid fa-cat'><i>"
    },
    {
    	name:"spider",
    	icon:"<i class='fa-solid fa-spider'><i>"
    },
    {
    	name:"frog",
    	icon:"<i class='fa-solid fa-frog'><i>"
    }
]
let flipedCards=[]
let matchedPairs=0
cardShuffle()
let gameBoard=document.getElementById('gameBoard')

displayCards()
function cardShuffle(){
	for(let i=cardArray.length-1;i>=0;i--){
		const randIndex=Math.floor(Math.random()*(i+1));
		[cardArray[i],cardArray[randIndex]]=[cardArray[randIndex],cardArray[i]]
	}
}

function displayCards(){
    cardArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index)
        card.classList.add('cardback')
        card.classList.add('active')
        gameBoard.append(card)
        card.addEventListener("click",flipCard)

    })
}
function flipCard(){
    if(flipedCards.length<2 && this.classList.contains('active')){
        let cardId=this.getAttribute("id")
        flipedCards.push(this) 
        this.classList.remove('cardback')
        this.innerHTML=cardArray[cardId].icon
        if(flipedCards.length==2){
            setTimeout(checkMatch,1000)
        }
    }
}
console.log(flipedCards)
function checkMatch(){
    const card1Id=flipedCards[0].getAttribute('id')
    const card2Id=flipedCards[1].getAttribute('id')
    if(cardArray[card1Id].name===cardArray[card2Id].name){
        flipedCards[0].style.border='none'
        flipedCards[0].style.backgroundColor='#f5e8ba'
        flipedCards[0].innerHTML=''
        flipedCards[0].classList.remove('active')
        flipedCards[1].classList.remove('active')
        flipedCards[1].style.border='none'
        flipedCards[1].style.backgroundColor='#f5e8ba'
        flipedCards[1].innerHTML=''
        matchedPairs++
        gameOver()
    }
    else{
        flipedCards[0].innerHTML='';
        flipedCards[0].classList.add('cardback');
        flipedCards[1].innerHTML='';
        flipedCards[1].classList.add('cardback');
    }
    flipedCards=[]
}
function gameOver(){
    if(matchedPairs==cardArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)

        }
         gameBoard.classList.remove('game')
        gameBoard.classList.add('won')
        gameBoard.innerHTML='You Won!'
    }
}