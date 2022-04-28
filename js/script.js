// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
//     stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
//     stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
//     trasformare la stringa foto in una immagine effettiva
// BONUS 2:
//     organizzare i singoli membri in card / schede
// BONUS 3:
//     Utilizzare gli input presenti nella pagina per permettere all 'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'
// array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall 'utente.

//inserimento informazioni dei membri

const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//     stampare su console le informazioni di nome, ruolo e la stringa della foto

let userInformation = "";
for (let i = 0; i < team.length; i++) {
    userInformation = team[i];
    console.log(userInformation.name, userInformation.role, userInformation.image);
    // MILESTONE 2:
    //     stampare le stesse informazioni su DOM sottoforma di stringhe
    const string = document.getElementById("team");
    string.innerHTML += `${"Name Member:"} ${userInformation.name} <br> ${"Role member:"} ${userInformation.role} <br><img src="img/${userInformation.image}" alt="${userInformation.name}"><br><br> `;
}