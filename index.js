var but = document.getElementById("but").onclick = function() {


    let input1 = document.getElementById("inp1").value;
    let input2 = document.getElementById("inp2").value;
    let input3 = document.getElementById("inp3").value;
    let input4 = document.getElementById("inp4").value;
    let input5 = document.getElementById("inp5").value;

    let result1 = document.getElementById("result1")
    let result2 = document.getElementById("result2")
    let result3 = document.getElementById("result3")
    let result4 = document.getElementById("result4")
    let result5 = document.getElementById("result5")

    input1 = Number(input1);
    input2 = Number(input2);
    input3 = Number(input3);
    input4 = Number(input4);
    input5 = Number(input5);

    console.log(input1);
    console.log(input2);
    console.log(input3);
    console.log(input4);
    console.log(input5);

    let reU
    let reT
    let reJ
    let reK
    let reB

    //thai 
    THBtoUSD = () => {
        reU = input1 * 0.03;
        console.log(reU);
    } 
    THBtoJPY = () => {
        reJ = input1 * 3;
    }
    THBtoKRW = () => {
        reK = input1 * 35;
    }
    THBtoBTC = () => {
        reB = input1 * 0.000001;
    }

    //USD
    USDtoTHB = () => {
        reT = input2 * 30;
    } 
    USDtoJPY = () => {
        reJ = input2 * 114.93;
    }
    USDtoKRW = () => {
        reK = input2 * 1222.96;
    }
    USDtoBTC = () => {
        reB = input2 * 0.000026;
    }

    //YEN
    JPYtoUSD = () => {
        reU = input3 * 0.01;
    } 
    JPYtoTHB = () => {
        reT = input3 * 0.29;
    }
    JPYtoKRW = () => {
        reK = input3 * 10.68;
    }
    JPYtoBTC = () => {
        reB = input3 * 0.00000023;
    }

    //KRW
    KRWtoUSD = () => {
        reU = input4 * 0.0008;
    }
    KRWtoTHB = () => {
        reT = input4 * 0.03;
    }
    KRWtoJPY = () => {
        reJ = input4 * 0.09;
    }
    KRWtoBTC = () => {
        reB = input4 * 0.00000002;
    }

    //BTC
    BTCtoUSD = () => {
        reU = input5 * 38,115.58;
    }
    BTCtoTHB = () => {
        reT = input5 * 1,253,278.27;
    }
    BTCtoJPY = () => {
        reJ = input5 * 4,380,502.18;
    }
    BTCtoKRW = () => {
        reK = input5 * 46,766,120.65;
    }

//if else

//THB
    if (input2 <= 0 && input3 <= 0 && input4 <= 0 && input5 <= 0) {
        THBtoUSD();
        THBtoJPY();
        THBtoKRW();
        THBtoBTC();
        console.log(reU)
        console.log(reJ)
        console.log(reK)
        console.log(reB)
        result1.innerHTML = input1+" ฿"
        result2.innerHTML = reU+" $"
        result3.innerHTML = reJ+" ¥"
        result4.innerHTML = reK+" ₩"
        result5.innerHTML = reB+" ⓑ"
    }
    if (input1 <= 0 && input3 <= 0 && input4 <= 0 && input5 <= 0) {
        USDtoTHB();
        USDtoJPY();
        USDtoKRW();
        USDtoBTC();
        console.log(reT)
        console.log(reJ)
        console.log(reK)
        console.log(reB)
        result1.innerHTML = input2+" $"
        result2.innerHTML = reT+" ฿"
        result3.innerHTML = reJ+" ¥"
        result4.innerHTML = reK+" ₩"
        result5.innerHTML = reB+" ⓑ"
    }
    if (input1 <= 0 && input2 <= 0 && input4 <= 0 && input5 <= 0) {
        JPYtoUSD();
        JPYtoTHB();
        JPYtoKRW();
        JPYtoBTC();
        console.log(reU)
        console.log(reT)
        console.log(reK)
        console.log(reB)
        result1.innerHTML = input3+" ¥"
        result2.innerHTML = reU+" $"
        result3.innerHTML = reT+" ฿"
        result4.innerHTML = reK+" ₩"
        result5.innerHTML = reB+" ⓑ"
    }
    if (input1 <= 0 && input2 <= 0 && input3 <= 0 && input5 <= 0) {
        KRWtoUSD();
        KRWtoTHB();
        KRWtoJPY();
        KRWtoBTC();
        console.log(reU)
        console.log(reT)
        console.log(reJ)
        console.log(reB)
        result1.innerHTML = input4+" ₩"
        result2.innerHTML = reU+" $"
        result3.innerHTML = reT+" ฿"
        result4.innerHTML = reK+" ¥"
        result5.innerHTML = reB+" ⓑ"
    }
    if (input1 <= 0 && input2 <= 0 && input3 <= 0 && input4 <= 0 && input5 > 0) {
        BTCtoTHB();
        BTCtoTHB();
        BTCtoJPY();
        BTCtoKRW();
        console.log(reU)
        console.log(reT)
        console.log(reJ)
        console.log(reK)
        result1.innerHTML = input5+" ⓑ"
        result2.innerHTML = reU+" $"
        result3.innerHTML = reT+" ฿"
        result4.innerHTML = reK+" ¥"
        result5.innerHTML = reK+" ₩"
    }

    
}