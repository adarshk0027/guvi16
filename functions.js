const FirstName = document.getElementById('FirstName')
const LastName = document.getElementById('LastName')
const inputAddress = document.getElementById('inputAddress')
const inputState = document.getElementById('inputState')
const PinCode = document.getElementById('PinCode')
const inputCountry = document.getElementById('inputCountry')
const submit = document.getElementById('submit');
const Gender = document.getElementsByName('gender')
const tablebdy = document.getElementById('tbody')
const foods=document.getElementsByName('foods')
//const unknown=document.getElementById('unknown')
let Datas = []

function GetData() {
    let gender
    let food
    for(let i=0;i<Gender.length;i++){
        if(Gender[i].checked){
             gender=Gender[i].value
            console.log(gender);
            
        }
    }
    for(let i=0;i<foods.length;i++){
        if(foods[i].checked){
            food=foods[i].value
            console.log(foods);
            
        }
    }
    let data = {
        FirstName: FirstName.value,
        LastName: LastName.value,
        inputAddress: inputAddress.value,
        PinCode: PinCode.value,
        inputState: inputState.value,
        inputCountry: inputCountry.value,
        Gender:gender,
        food:food
    }
    console.log(data);
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')
    let td8 = document.createElement('td')
    

    td1.innerText = data.FirstName
    td2.innerText = data.LastName
    td3.innerText = data.inputAddress
    td4.innerText = data.PinCode
    td5.innerText = data.Gender
    td6.innerText = data.food
    td7.innerText = data.inputState
    td8.innerText = data.inputCountry
    tablebdy.append(td1)
    tablebdy.append(td2)
    tablebdy.append(td3)
    tablebdy.append(td4)
    tablebdy.append(td5)
    tablebdy.append(td6)
    tablebdy.append(td7)
    tablebdy.append(td8)

}