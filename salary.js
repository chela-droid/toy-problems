function income (salary,rates){
    let sum = salary;
    for (const rates of rate) {
        sum + rates
        
    }
    return sum
}
function NHIF (grossPay){
    if (gross < 10000){
        return 150
    }
    else if(grossPay < 12000){
        return 250
    }
    else if(grossPay < 14000){
        return 350
    }
    else if(grossPay < 16000){
        return 400
    }
    else if(grossPay < 20000){
        return 600
    }
    else if(grossPay < 25000){
        return 700
    }
    else if(grossPay < 30000){
        return 800
    }
    else if(grossPay < 40000){
        return 1200
    }
    else if(grossPay < 45000){
        return 1350
    }
    else if(grossPay < 48000){
        return 1500
    }
    else if(grossPay < 50000){
        return 1650
    }
    else if(grossPay < 55000){
        return 1700
    }
    else if(grossPay < 60000){
        return 1800
    }
    else if(grossPay < 65000){
        return 1900
    }
    else if(grossPay < 70000){
        return 2000
    }
    else if(grossPay < 80000){
        return 2100
    }
    else if(grossPay >= 100000){
        return 2300
    }

}
// NHIF

function NSSF(pensionablePay){
    return pensionablePay * 0.1  
}
// NSSF

function PAYE(){

}

function taxablepay(grossIncome, ...deductions){
    for(let deduction of deductions){
        grossIncome -=deduction
    }
       return grossIncome
}
//  Tax

function PAYE(taxablepay){
    if(taxablepay<= 20000){
    return taxablepay * 0.15 
}
else if(taxablepay<=55000){
    return taxablepay * 0.28
}
else if(taxablepay > 55000){
    return taxablepay * 0.35
}

}
//paye
function netPay(taxablepay, paye){
    return taxablepay - paye
}
// net pay

function handleSalary(event){
    let val= parseInt(document.getElementById("basic").value)
    let basicSalary=Boolean(val)? val : 0
    
    // basicSalary
    let allowances= Array.from (document.getElementsByClassName("allowances")).map(function(element){
        return Boolean(element.value) ? parseInt(element.value) : 0
    })
    let gross = grossIncome(basicSalary, ...allowances)
    let nhifdeduction = NHIF(gross)
    let nssfdeduction = NSSF(gross)
    let taxableincome = taxablepay(gross)
    let paye = PAYE (taxableincome)
    let net = netPay(taxableincome,paye)
    document.getElementById("nhif")
    document.getElementById("nssf")
    document.getElementById("paye")
    document.getElementById("TaxablePay")
    document.getElementById("Netpay")
    