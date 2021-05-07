let sentences = []
function generate() {
   
    var data = 	{
	    "name": ["Sebasti\u00E1n", "Liam", "Ian","Dylan","Mateo","Thiago","Lucas","Adri\u00E1n","Noah","Mat\u00EDas","Valentina","Victoria","Emma","Mia","Amaia","Isabella","Mikaela","Ainhoa","Amanda","Luna"],
        "animal": ["cat","dog","duck","hamster","goose","flamingo","hedgehog","chicken","eagle","octopus","fish","turtle"],
        "action" : ["bite","lick","run away from"],
        "start": ["#name# pet the #animal#, and it proceded to #action# them afterwards"]
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
