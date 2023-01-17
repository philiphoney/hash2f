function h2f4(v) {
    if (Array.isArray(v)) {
        return dh2f4(v);
    }
    else {
        return eh2f4(v);
    }
}
function h2f8(v) {
    if (Array.isArray(v)) {
        return dh2f8(v);
    }
    else {
        return eh2f8(v);
    }
}
function h2f16(v) {
    if (Array.isArray(v)) {
        return dh2f16(v);
    }
    else {
        return eh2f16(v);
    }
}
var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var general = [];
function hashCreator() {
    var genHash = [];
    var endHash = [];
    for (var i = 0; i < 16; i++) {
        for (var i_1 = 0; i_1 < 17; i_1++) {
            genHash[i_1] = characters[Math.floor(Math.random() * 61)];
        }
        for (var i_2 = 1; i_2 < 17; i_2++) {
            endHash += genHash[i_2];
        }
        general.push([endHash.toString()]);
        endHash = "";
    }
}
function eh2f4(v) {
    hashCreator();
    var value = v.split("");
    var txtHash = "";
    var NumHash = [];
    var arrIndv = [];
    for (var i = 0; i < v.length; i++) {
        var BlockN = Math.floor(Math.random() * 16);
        var InBlockN = Math.floor(Math.random() * 4);
        var Block = general[BlockN];
        var BlockSplit = Block[0].split("");
        // Number Array
        NumHash.push(InBlockN);
        // Text Hash
        BlockSplit[InBlockN] = value[i];
        arrIndv.push(BlockSplit);
    }
    var a = 0;
    var InBlock = 0;
    for (var i = 0; i < 4 * v.length; i++) {
        if (a == 4) {
            InBlock += 1;
            a = 0;
        }
        txtHash += arrIndv[InBlock][a];
        a += 1;
    }
    return [txtHash, NumHash.toString()];
}
function eh2f8(v) {
    hashCreator();
    var value = v.split("");
    var txtHash = "";
    var NumHash = [];
    var arrIndv = [];
    for (var i = 0; i < v.length; i++) {
        var BlockN = Math.floor(Math.random() * 16);
        var InBlockN = Math.floor(Math.random() * 8);
        var Block = general[BlockN];
        var BlockSplit = Block[0].split("");
        // Number Array
        NumHash.push(InBlockN);
        // Text Hash
        BlockSplit[InBlockN] = value[i];
        arrIndv.push(BlockSplit);
    }
    var a = 0;
    var InBlock = 0;
    for (var i = 0; i < 8 * v.length; i++) {
        if (a == 8) {
            InBlock += 1;
            a = 0;
        }
        txtHash += arrIndv[InBlock][a];
        a += 1;
    }
    return [txtHash, NumHash.toString()];
}
function eh2f16(v) {
    hashCreator();
    var value = v.split("");
    var txtHash = "";
    var NumHash = [];
    var arrIndv = [];
    for (var i = 0; i < v.length; i++) {
        var BlockN = Math.floor(Math.random() * 16);
        var InBlockN = Math.floor(Math.random() * 16);
        var Block = general[BlockN];
        var BlockSplit = Block[0].split("");
        // Number Array
        NumHash.push(InBlockN);
        // Text Hash
        BlockSplit[InBlockN] = value[i];
        arrIndv.push(BlockSplit);
    }
    var a = 0;
    var InBlock = 0;
    for (var i = 0; i < 16 * v.length; i++) {
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
function dh2f4(content) {
    var hashNum = content[1].split(",").map(Number);
    var arrBlock = [];
    var txtHash = "";
    var arrBlocksplit;
    var num = 0;
    for (var i = 0; i < hashNum.length; i++) {
        arrBlock.push([content[0].substr(num, 4)]);
        num += 4;
    }
    for (var i = 0; i < hashNum.length; i++) {
        arrBlocksplit = arrBlock[i][0].split("");
        txtHash += arrBlocksplit[hashNum[i]];
    }
    if ((txtHash.search("undefined")) >= 0) {
        return 'error';
    }
    return txtHash;
}
function dh2f8(content) {
    var hashNum = content[1].split(",").map(Number);
    var arrBlock = [];
    var txtHash = "";
    var arrBlocksplit;
    var num = 0;
    for (var i = 0; i < hashNum.length; i++) {
        arrBlock.push([content[0].substr(num, 8)]);
        num += 8;
    }
    for (var i = 0; i < hashNum.length; i++) {
        arrBlocksplit = arrBlock[i][0].split("");
        txtHash += arrBlocksplit[hashNum[i]];
    }
    if ((txtHash.search("undefined")) >= 0) {
        return 'error';
    }
    return txtHash;
}
function dh2f16(content) {
    var hashNum = content[1].split(",").map(Number);
    var arrBlock = [];
    var txtHash = "";
    var arrBlocksplit;
    var num = 0;
    for (var i = 0; i < hashNum.length; i++) {
        arrBlock.push([content[0].substr(num, 16)]);
        num += 16;
    }
    for (var i = 0; i < hashNum.length; i++) {
        arrBlocksplit = arrBlock[i][0].split("");
        txtHash += arrBlocksplit[hashNum[i]];
    }
    if ((txtHash.search("undefined")) >= 0) {
        return 'error';
    }
    return txtHash;
}