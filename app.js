let AddStudentsBTN = document.querySelector('.btn')
let Name = document.querySelector('.Name')
let surname = document.querySelector('.surname')
let fatherland = document.querySelector('.fatherland')
let faculty = document.querySelector('.faculty')
let study = document.querySelector('.study')
let birth = document.querySelector('.birth')
let tbody = document.querySelector('tbody')

AddStudentsBTN.addEventListener('click', check)

let check01 = false
let check02 = false
let check03 = false
let check04 = false
let check05 = false
let check06 = false

function check() {
   if(Name.value.trim().length === 0) {
       alert('Вы оставили поле с именем пустым')
       Name.style.borderColor  = 'red'
   } 
   else {
     check01 = true
   }
   if(surname.value.trim().length === 0) {
    alert('Вы оставили поле с фамилией пустым')
    surname.style.borderColor  = 'red'
   } 
   else {
     check02 = true
   }
   if(fatherland.value.trim().length === 0) {
    alert('Вы оставили поле с отечеством пустым')
    fatherland.style.borderColor  = 'red'
   } 
   else {
     check03 = true
   }
   if(faculty.value.trim().length === 0) {
    alert('Вы оставили поле с отечеством пустым')
    faculty.style.borderColor  = 'red'
   } 
   else {
     check06 = true
   }
   if(study.value.trim().length === 0) {
    alert('Вы неправильную дату, она должно быть после 2000 года')
    study.style.borderColor  = 'red'
   } 
    else {
         check05 = true
    }
   
   if(birth.value.trim().length === 0) {
    alert('Вы неправильную дату, она должно быть после 2000 года')
    birth.style.borderColor  = 'red'
   
   } 
   else {
     check04 = true
}
   if(check01 === check02 === check03 === check04 === check05 === check06 === true) {
       let tr  = document.createElement('tr')
       let td1 = document.createElement('td')
       let td2 = document.createElement('td')
       let td3 = document.createElement('td')
       let td4 = document.createElement('td')
       let td5 = document.createElement('td')
       let td6 = document.createElement('td')
       td1.append(Name.value)
       td2.append(surname.value)
       td3.append(faculty.value)
       td4.append(new Date().getFullYear() - birth.value)
       td5.append(new Date().getFullYear() - study.value + 'курс')
       td6.append(faculty.value)
       tr.append(td1, td2, td3, td4, td5, td6)
   tbody.append(tr)
   }

}

document.querySelector('.Name-sort').addEventListener('click', function() {
    let arr = []
    document.querySelectorAll('.Name').forEach(item => arr.push(item))
    arr.sort(a, b)
})