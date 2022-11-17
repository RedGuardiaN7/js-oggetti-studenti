/* CONSEGNA:    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
                Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. */

//MILESTONE 0: Creazione dell'array contenente tutti i membri del team sotto forma di oggetti

let team_members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "img/barbara-ramos-graphic-designer.jpg",
    }
]

/*MILESTONE 1:  Stampa su console ogni membro del team
                Per fare ciò viene utilizzato un ciclo for, il quale stamperà ogni membro grazie alla funzione creata appositamente */

for (let i = 0; i < team_members.length; i++) {

    print_member(team_members[i], i);
}

/*MILESTONE 2:  Stampare le stesse informazione nel DOM
                Questo step integrerà il bonus (organizzare ogni singolo membro in una card) */



//Funzione creata per stampare ogni membro del team nella console. Member rappresenta il membro da stampare, il num rappresenta il loro numer nell'elenco

function print_member(member, num) {

    console.log(
        `
<<<<-------------------- Team member (${num + 1})-------------------->>>>
        
        Nome: ${member.name}
        Ruolo: ${member.role}
        Immagine (indirizzo): ${member.picture}
 
----------------------------------------------------------------

        `
    );
}

//Creazione della funzione che permette di stampare le infromazioni di ogni membro all'interno dell'HTML sotto forma di card (bootstrap)

function card_member(member) {

    document.getElementById("cards_container").innerHTML = `
    
    <div class="col-3 card ms-5 me-2 p-0 shadow border-light">
          <img src="${member.picture}" alt="Profile picture">
          
          <h4 class="mt-3">${member.name}</h4>
          
          <p>${member.role}</p>
    </div>

    `
}