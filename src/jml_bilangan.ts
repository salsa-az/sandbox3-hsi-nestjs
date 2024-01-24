function perjumlahanBilangan(a: number[],b: "ganjil" | "genap"): number {
    let res = 0;

    if (b === "ganjil") {
        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 0) res += a[i];
        }
    } else if (b === "genap"){
        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 1) res += a[i];
        }
    }

    return res;
}

// console.log(perjumlahanBilangan([1,2,3], "ganjil"));
// console.log(perjumlahanBilangan([1,2,3,4,5,6,7], "genap"));
// console.log(perjumlahanBilangan([1,2,3,4,5], "ganjil"));

// console.log(perjumlahanBilangan([1,2,3,4,5,6,7], "ganj"));
// console.log( perjumlahBilangan([1,2,3,4,5,6,7], "positif"));