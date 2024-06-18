//Creare l’array di oggetti con le informazioni fornite.
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//Stampare le stesse informazioni su DOM sottoforma di stringhe

//seleziono il div#container dove stampare i risultati
const container = document.getElementById("container");

//creo l'array con i dati dei componenti del team
const teamMembers = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo",
    },  
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor",
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager",
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager",
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer",
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer",
    },
];


//stampo in console i dati per ogni membro
for (let i = 0; i < teamMembers.length; i++){ //creo ciclo for per attraversare tutti i mebmri e stampare i dati
    //creo variabile per attraversare ogni singolo dato
    let member = teamMembers[i];

    //associo il tipo di dato ad una variabile
    let memberName = member.name;
    let memberRole = member.role;
    let memberImage = member.image;
    
    //stampo in console il tipo di dato con l'informazione
    console.log("Name:", memberName,
                "Role:", memberRole, 
                "Image:", memberImage);
    
    //stampo in pagina le informazioni
    container.innerHTML += `<div>Name: ${memberName}, Role: ${memberRole}, Image: ${memberImage}</div>`;
};