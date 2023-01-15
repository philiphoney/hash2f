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