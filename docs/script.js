function salvar() {
    let resposta1 = "";
    if (document.getElementById("q1a").checked) resposta1 = "jupiter";
    if (document.getElementById("q1b").checked) resposta1 = "marte";
    if (document.getElementById("q1c").checked) resposta1 = "saturno";
    if (document.getElementById("q1d").checked) resposta1 = "netuno";

    let resposta2 = "";
    if (document.getElementById("q2a").checked) resposta2 = "africa";
    if (document.getElementById("q2b").checked) resposta2 = "asia";
    if (document.getElementById("q2c").checked) resposta2 = "europa";
    if (document.getElementById("q2d").checked) resposta2 = "oceania";

    let resposta3 = {
        baleia: document.getElementById("q3a").checked,
        morcego: document.getElementById("q3b").checked,
        galinha: document.getElementById("q3c").checked,
        crocodilo: document.getElementById("q3d").checked
    };

    let resposta4 = "";
    if (document.getElementById("q4a").checked) resposta4 = "leonardo";
    if (document.getElementById("q4b").checked) resposta4 = "picasso";
    if (document.getElementById("q4c").checked) resposta4 = "vangogh";
    if (document.getElementById("q4d").checked) resposta4 = "michelangelo";

    let resposta5 = document.getElementById("q5").value;

    let resposta6 = "";
    if (document.getElementById("q6a").checked) resposta6 = "toquio";
    if (document.getElementById("q6b").checked) resposta6 = "pequim";
    if (document.getElementById("q6c").checked) resposta6 = "seul";
    if (document.getElementById("q6d").checked) resposta6 = "quioto";

    let resposta7 = {
        solar: document.getElementById("q7a").checked,
        eolica: document.getElementById("q7b").checked,
        carvao: document.getElementById("q7c").checked,
        hidraulica: document.getElementById("q7d").checked
    };

    let respostas = {
        q1: resposta1, 
        q2: resposta2, 
        q3: resposta3,
        q4: resposta4, 
        q5: resposta5, 
        q6: resposta6,
        q7: resposta7
    };

    localStorage.setItem("quiz", JSON.stringify(respostas));
}

function corrigir() {
    let respostas = JSON.parse(localStorage.getItem("quiz"));
    let elementoResultado = document.getElementById("resultadoFinal");

    let pontos = 0;
    const totalQuestoes = 7;

    if (respostas.q1 === "jupiter") pontos++;
    if (respostas.q2 === "africa") pontos++;
    if (respostas.q3.baleia && respostas.q3.morcego && !respostas.q3.galinha && !respostas.q3.crocodilo) {
        pontos++;
    }
    if (respostas.q4 === "leonardo") pontos++;
    if (respostas.q5 && respostas.q5.trim() === "1500") pontos++;
    if (respostas.q6 === "toquio") pontos++;
    if (respostas.q7.solar && respostas.q7.eolica && respostas.q7.hidraulica && !respostas.q7.carvao) {
        pontos++;
    }

    elementoResultado.innerHTML = `
        <h3 class="text-light">Você acertou</h3>
        <h1 class="display-1 fw-bold text-light">${pontos}</h1>
        <h3 class="text-light">de ${totalQuestoes} questões!</h3>
    `;
}

function checarQ1() {
    document.getElementById('label-q1a').classList.remove('correta', 'incorreta');
    document.getElementById('label-q1b').classList.remove('correta', 'incorreta');
    document.getElementById('label-q1c').classList.remove('correta', 'incorreta');
    document.getElementById('label-q1d').classList.remove('correta', 'incorreta');

    if (document.getElementById('q1a').checked) { 
        document.getElementById('label-q1a').classList.add('correta');
    } else if (document.getElementById('q1b').checked) { 
        document.getElementById('label-q1b').classList.add('incorreta');
    } else if (document.getElementById('q1c').checked) { 
        document.getElementById('label-q1c').classList.add('incorreta');
    } else if (document.getElementById('q1d').checked) { 
        document.getElementById('label-q1d').classList.add('incorreta');
    }
}

function checarQ2() {
    document.getElementById('label-q2a').classList.remove('correta', 'incorreta');
    document.getElementById('label-q2b').classList.remove('correta', 'incorreta');
    document.getElementById('label-q2c').classList.remove('correta', 'incorreta');
    document.getElementById('label-q2d').classList.remove('correta', 'incorreta');

    if (document.getElementById('q2a').checked) {
        document.getElementById('label-q2a').classList.add('correta');
    } else if (document.getElementById('q2b').checked) {
        document.getElementById('label-q2b').classList.add('incorreta');
    } else if (document.getElementById('q2c').checked) {
        document.getElementById('label-q2c').classList.add('incorreta');
    } else if (document.getElementById('q2d').checked) {
        document.getElementById('label-q2d').classList.add('incorreta');
    }
}

function checarQ4() {
    document.getElementById('label-q4a').classList.remove('correta', 'incorreta');
    document.getElementById('label-q4b').classList.remove('correta', 'incorreta');
    document.getElementById('label-q4c').classList.remove('correta', 'incorreta');
    document.getElementById('label-q4d').classList.remove('correta', 'incorreta');

    if (document.getElementById('q4a').checked) {
        document.getElementById('label-q4a').classList.add('correta');
    } else if (document.getElementById('q4b').checked) {
        document.getElementById('label-q4b').classList.add('incorreta');
    } else if (document.getElementById('q4c').checked) { 
        document.getElementById('label-q4c').classList.add('incorreta');
    } else if (document.getElementById('q4d').checked) {
        document.getElementById('label-q4d').classList.add('incorreta');
    }
}

function checarQ6() {
    document.getElementById('label-q6a').classList.remove('correta', 'incorreta');
    document.getElementById('label-q6b').classList.remove('correta', 'incorreta');
    document.getElementById('label-q6c').classList.remove('correta', 'incorreta');
    document.getElementById('label-q6d').classList.remove('correta', 'incorreta');

    if (document.getElementById('q6a').checked) {
        document.getElementById('label-q6a').classList.add('correta');
    } else if (document.getElementById('q6b').checked) {
        document.getElementById('label-q6b').classList.add('incorreta');
    } else if (document.getElementById('q6c').checked) {
        document.getElementById('label-q6c').classList.add('incorreta');
    } else if (document.getElementById('q6d').checked) {
        document.getElementById('label-q6d').classList.add('incorreta');
    }
}

function checarCheckbox(inputId, status) {
    let input = document.getElementById(inputId);
    let label = document.getElementById("label-" + inputId);

    if (input.checked) {
        if (status === 'correta') {
            label.classList.add('correta');
        } else {
            label.classList.add('incorreta');
        }
    } else {
        label.classList.remove('correta', 'incorreta');
    }
}
