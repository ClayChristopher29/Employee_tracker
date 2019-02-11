printAllInfo();

document.querySelector("#submitBtn").addEventListener("click",() => {

    const firstName = document.querySelector('#firstName').value;

    const lastname = document.querySelector("#lastName").value;

    const email = document.querySelector("#emailAddress").value;

    const birthDay = document.querySelector("#birthDay").value;

    const department = document.querySelector("#department").value;

    const phoneNumber = document.querySelector("#phoneNumber").value;

    const infoToAdd = {
        
        firstName: firstName,
        lastName: lastname,
        emailAddress: email,
        birthDay:birthDay,
        department:department,
        phoneNumber:phoneNumber
    };
    createTask(infoToAdd).then(() => {
        printAllInfo();
    })



}
)