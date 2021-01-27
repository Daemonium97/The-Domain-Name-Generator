let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];


function ranDom() {
    var con = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)] + domain[Math.floor(Math.random() * domain.length)];
    
    return con;
}

console.log(ranDom());

