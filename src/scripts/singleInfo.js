const buildSingleInfo = (singleInfoObject) => {
    return `<div>
    <label>
    <span>${singleInfoObject.firstName}</span>
    <p>${singleInfoObject.lastName}</p>
    <p>${singleInfoObject.emailAddress}</p>
    <p>${singleInfoObject.birthDay}</p>
    <p>${singleInfoObject.department}</p>
    <p>${singleInfoObject.phoneNumber}</p>
    </label>
    </div>`
}