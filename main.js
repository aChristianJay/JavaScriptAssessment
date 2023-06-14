

const NFTs = []

function mintNFT (_name,_shirtcolor,_capcolor,_theme) {

const NFT ={
    "name":_name,
    "shirtcolor":_shirtcolor,
    "capcolor":_capcolor,
    "theme":_theme
}
NFTs.push(NFT)
console.log("Minted: "+_name)
console.log("---------")
}

////////////////////////
function listNFTs () {
for(var list = 0; list<NFTs.length;list++){
    console.log("NFT ID Number: \t"+ (list+1));
    console.log("Name: \t"+NFTs[list].name);
    console.log("Shirt Color: \t"+NFTs[list].shirtcolor);
    console.log("Cap Color: \t"+NFTs[list].capcolor);
    console.log("Theme: \t"+NFTs[list].theme);
    console.log("---------")
}
}
//////////////////////////

function getTotalSupply() {
    console.log(NFTs.length);
    console.log("---------")
}
//////////////////////


mintNFT("Hiro","black","darkblue","casual");
mintNFT("Artis","blue","black","superhero");
mintNFT("Mina","red","blue","futuristic");
mintNFT("Mako","white","gray","plain");

listNFTs();
getTotalSupply();
