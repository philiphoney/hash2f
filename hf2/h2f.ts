function h2f4(v:any) {
  if (Array.isArray(v)) {
   return dh2f4(v);
  } else {
   return eh2f4(v);
  }
}

function h2f8(v:any) {
  if (Array.isArray(v)) {
    return dh2f8(v);
   } else {
    return eh2f8(v);
   }
}

function h2f16(v:any) {
  if (Array.isArray(v)) {
    return dh2f16(v);
   } else {
    return eh2f16(v);
   }
}

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
let general: string[][] = [];
function hashCreator() {
  var genHash: any = [];
  var endHash: any = [];

  for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 17; i++) {
      genHash[i] = characters[Math.floor(Math.random() * 61)];
    }
    for (let i = 1; i < 17; i++) {
      endHash += genHash[i];
    }
    general.push([endHash.toString()]);
    endHash = ""
  }
}

function eh2f4(v: any) {
  hashCreator();

  var value = v.split("");
  var txtHash: string = "";
  var NumHash: number[] = [];
  var arrIndv: any[] = [];

  for (let i = 0; i < v.length; i++) {
    var BlockN: number = Math.floor(Math.random() * 16);
    var InBlockN: number = Math.floor(Math.random() * 4);
    var Block: string[] = general[BlockN];
    var BlockSplit: any[] = Block[0].split("");
    // Number Array
    NumHash.push(InBlockN);
    // Text Hash
    BlockSplit[InBlockN] = value[i];
    arrIndv.push(BlockSplit);
  }

  var a = 0;
  var InBlock = 0;

  for (let i = 0; i < 4 * v.length; i++) {
    if (a == 4) {
      InBlock += 1;
      a = 0;
    }
    txtHash += arrIndv[InBlock][a];
    a += 1;
  }
  return [txtHash, NumHash.toString()];
}

function eh2f8(v: any) {
  hashCreator();

  var value = v.split("");
  var txtHash: string = "";
  var NumHash: number[] = [];
  var arrIndv: any[] = [];
  for (let i = 0; i < v.length; i++) {
    var BlockN: number = Math.floor(Math.random() * 16);
    var InBlockN: number = Math.floor(Math.random() * 8);
    var Block: string[] = general[BlockN];
    var BlockSplit: any[] = Block[0].split("");
    // Number Array
    NumHash.push(InBlockN);
    // Text Hash
    BlockSplit[InBlockN] = value[i];
    arrIndv.push(BlockSplit);
  }

  var a = 0;
  var InBlock = 0;

  for (let i = 0; i < 8 * v.length; i++) {
    if (a == 8) {
      InBlock += 1;
      a = 0;
    }
    txtHash += arrIndv[InBlock][a];
    a += 1;
  }
  return [txtHash, NumHash.toString()];
}

function eh2f16(v: any) {
  hashCreator();

  var value = v.split("");
  var txtHash: string = "";
  var NumHash: any = [];
  var arrIndv: any[] = [];

  for (let i = 0; i < v.length; i++) {
    var BlockN: number = Math.floor(Math.random() * 16);
    var InBlockN: number = Math.floor(Math.random() * 16);
    var Block: string[] = general[BlockN];
    var BlockSplit: any[] = Block[0].split("");
    // Number Array
    NumHash.push(InBlockN);
    // Text Hash
    BlockSplit[InBlockN] = value[i];
    arrIndv.push(BlockSplit);
  }

  var a = 0;
  var InBlock = 0;

  for (let i = 0; i < 16 * v.length; i++) {
    if (a == 16) {
      InBlock += 1;
      a = 0;
    }
    txtHash += arrIndv[InBlock][a];
    a += 1;
  }
  return [txtHash, NumHash.toString()];
}

// decrypt

function dh2f4(content: any[]) {
  var hashNum:number[] = content[1].split(",").map(Number);
  var arrBlock:any = []
  var txtHash: any = ""
  var arrBlocksplit: any;
  var num:number = 0
  for (let i = 0; i < hashNum.length; i++) {
     arrBlock.push([content[0].substr(num, 4)])
     num += 4
  }

  for (let i = 0; i < hashNum.length; i++) {
   arrBlocksplit = arrBlock[i][0].split("")
   txtHash += arrBlocksplit[hashNum[i]]
  }

  if ((txtHash.search("undefined")) >= 0) {
      return 'error';
  }

  return txtHash;
}

function dh2f8(content: any[]) {
  var hashNum:number[] = content[1].split(",").map(Number);
  var arrBlock:any = []
  var txtHash: any = ""
  var arrBlocksplit: any;
  var num:number = 0
  for (let i = 0; i < hashNum.length; i++) {
     arrBlock.push([content[0].substr(num, 8)])
     num += 8
  }

  for (let i = 0; i < hashNum.length; i++) {
   arrBlocksplit = arrBlock[i][0].split("")
   txtHash += arrBlocksplit[hashNum[i]]
  }

  if ((txtHash.search("undefined")) >= 0) {
      return 'error';
  }

  return txtHash;
}

function dh2f16(content: any[]) {
  var hashNum:number[] = content[1].split(",").map(Number);
  var arrBlock:any = []
  var txtHash: any = ""
  var arrBlocksplit: any;
  var num:number = 0
  for (let i = 0; i < hashNum.length; i++) {
     arrBlock.push([content[0].substr(num, 16)])
     num += 16
  }

  for (let i = 0; i < hashNum.length; i++) {
   arrBlocksplit = arrBlock[i][0].split("");
   txtHash += arrBlocksplit[hashNum[i]]
  }

  if ((txtHash.search("undefined")) >= 0) {
      return 'error';
  }

  return txtHash;
}