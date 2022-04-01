let words = [
    'able','achieve','acoustics','action','activity','aftermath','afternoon','afterthought','apparel','appliance',
    'beginner','believe','bomb','border','boundary','breakfast','cabbage','cable','calculator','calendar','caption','carpenter',
    'cemetery','channel','circle','creator','creature','education','faucet','feather','friction','fruit','fuel',
    'galley','guide','guitar','health','heart','idea','kitten','laborer','language','lawyer','linen','locket','lumber',
    'magic','minister','mitten','money','mountain','music','partner','passenger','pickle','picture','plantation','plastic','pleasure',
    'pocket','police','pollution','railway','recess','reward','route','scene','scent','squirrel','stranger','suit','sweater',
    'temper','territory','texture','thread','treatment','veil','vein','volcano','wealth','weather','wilderness','wren','wrist','writer'
]
let abc = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const gameWord = document.querySelector('.word');

let randomWord = words[Math.floor(Math.random() * 85)];
let buttons = document.querySelectorAll('button');
let wordContainer = document.querySelector('.word-container');
let space;

const randomWordFunc = () => {
for(let i = 0; i < randomWord.length; i++){
    // gameWord.innerHTML = gameWord.innerHTML + " _"
    const space = document.createElement('h1');
    space.innerHTML = "_";
    wordContainer.appendChild(space);

}
console.log(randomWord);
}

randomWordFunc();




const spaces = document.querySelectorAll('h1');

for(let btn of buttons){
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML)
        btn.disabled = true;
        if(randomWord.includes(btn.innerHTML)){
            console.log('Match');
            console.log(randomWord.indexOf(btn.innerHTML));
            let index = randomWord.indexOf(btn.innerHTML);
            spaces[index+1].innerHTML = btn.innerHTML;
            console.log(gameWord.innerHTML);
       
        }

    });

}