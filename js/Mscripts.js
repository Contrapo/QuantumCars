//Sugestões
let availableKeywords = [
    'Dodge Challenger Hardtop Coupé',
    'Puma 1600 GTE',
    'VW Fusca 1500',
    'GM Belair Hardtop Coupé',
    'Porsche Chamonix 356 Speedster',
    'VW Brasilia',
    'GM Chevette Hacht',
    'GM Opala Comodoro',
    'Rolls Royce Silver Wrait',
    'VW Fusca 1300',
    'Rolls Royce Silver Cloud III',
    'GM Caravan SS',
    'VW Kombi 1500',
    'Fiat 147 Spazio CL',
    'Mercedes Benz E 240 Elegance',
    'Chevrolet C-14',
];

const resultToPageMap = {
    'Dodge Challenger Hardtop Coupé': 'C1-index.html',
    'Puma 1600 GTE': 'C2-index.html',
    'VW Fusca 1500': 'C3-index.html',
    'GM Belair Hardtop Coupé': 'C4-index.html',
    'Porsche Chamonix 356 Speedster': 'C5-index.html',
    'VW Brasilia': 'C6-index.html',
    'GM Chevette Hacht': 'C7-index.html',
    'GM Opala Comodoro': 'C8-index.html',
    'Rolls Royce Silver Wrait': 'C9-index.html',
    'VW Fusca 1300': 'C10-index.html',
    'Rolls Royce Silver Cloud III': 'C11-index.html',
    'GM Caravan SS': 'C12-index.html',
    'VW Kombi 1500': 'C13-index.html',
    'Fiat 147 Spazio CL': 'C14-index.html',
    'Mercedes Benz E 240 Elegance': 'C15-index.html',
    'Chevrolet C-14': 'C16-index.html',
};

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    const selectedResult = list.innerHTML;
    const pageName = resultToPageMap[selectedResult];

    if (pageName) {
        // Redirecione para a página HTML correspondente
        window.location.href = pageName;
    }

    resultsBox.innerHTML = '';
}