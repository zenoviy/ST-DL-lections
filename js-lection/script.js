//document.write("Hello JS")
/*
    Variables - змінні 
        - var   let const
        let myFirsVariable = 100;
        Типи даних
            - String 
            - Number  -Infinity Infinity
            - Boolean true false
            - Object - methods, properties

            - undefined 
            - null
        
        Структури Даних
        - Tree  дерево - Objects { key: 'Value'}

        - Linear - масиви  let array = [{name: 'John'}, {name: 'Sara'}];

        Цикли
            Для фперекбору масивів
            for(let i = 0; i < 10; i++) {
                console.log(i)
            }

            for(let obj of allObject) {
                console.log(obj)
            }
            let i = 10;
            while(i > 0){
                i--
            }
            
        Function 
            function multiplyNumbers(a, b, c) { // Declaration function
                let finalResult = a * b * c;
                return finalResult
            }

            let functionResult = multiplyNumbers(4, 3, 5)
            console.log(functionResult)


            const myFoo = (a, b) => {   // Expression function

            }

        Logic
            if(a === 3) {
                console.log(3)
            } if else ( a === 5) {
                console.log(5)
            }
            else {
                console.log('a != 3')
            } 

        === == !=   &&  ||   > <  >=  <=

        Construecors 

        class CreateUsers {
            constructor(props){
                this.userName = props.userName;
                this.userEmail = props.userEmail;
            }
            showUserInfo() {
                return `User Info: ${this.userName} ${this.userEmail}`;
            }
            loggingUserInfo(text) {
                console.log(text)
            }
        }

        let user = new CreateUsers({
            userName: 'John',
            userEmail: 'asd@com'
        })

        user.loggingUserInfo(user.showUserInfo())

        Browser API  Application Interface 
            DOM Document Object Model
            const idElement = document.getElementById("my-id");

            ducument.querySelectror('#my-id')

            BOM  Browser Object Model
                 -

                function geoFindMe() {
                   
                   
                    Geolocation
            function success(position) {
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;
                    console.log(latitude, longitude)
            }

            function error() {
                status.textContent = 'Unable to retrieve your location';
            }

                navigator.geolocation.getCurrentPosition(success, error);

            }  geoFindMe()
*/  


const formConfigModel = {
    selectors: {
        mainForm: document.forms["dl-form"],
        dislayUserArea: document.querySelector("#dislay-user-area")
    },
    allAppUsers: []
}


formConfigModel.selectors.mainForm.addEventListener('submit', (event) => {
    event.preventDefault()
    initForms(event)
    event.target.reset()
})

function initForms(event) {
    let formsValue = convertFormToObject(event.target)
    saveUser(formsValue)
    displayUsers(formConfigModel)
}

function convertFormToObject(form) {
    let localObject = {};
    for(let inputData of form){
        if(inputData.name && inputData.value) {
            localObject[inputData.name] = inputData.value;
        }
    }
    localObject.id = new Date().getTime();
    return localObject
}
function saveUser(userData) {
    formConfigModel.allAppUsers.push(userData)
    console.log(formConfigModel.allAppUsers, "<< All users")
}


function displayUsers(model) {
    const allUsers = model.allAppUsers;
    const dislayUserArea = model.selectors.dislayUserArea;

    dislayUserArea.innerHTML = "";
    for(let user of allUsers) {
        let userCreateDate = new Date(user.id);
        let date = {
            year: userCreateDate.getFullYear(),
            month: userCreateDate.getMonth() + 1,
            day: userCreateDate.getDate(),
            hours: userCreateDate.getHours(),
            minuts: userCreateDate.getMinutes(),
            seconds: userCreateDate.getSeconds()
        }
        let userElement = createNewHtmlItem(
            'li',
            'user-list single-user',
            ` <p>
            <b>${user.userName} </b>
            <span>Email: ${user.userMail}</span> 
            <i>${date.year}/${date.month}/${date.day} ${date.hours}:${date.minuts}:${date.seconds}</i>
                </p>
            `,
            (e) => {
                alert(`Ви натиснули на юзера ${user.userName}`)
            }
        )
        dislayUserArea.appendChild(userElement)
    }

}



function createNewHtmlItem(tagName, styleClass, innerText, event) {
    let newElement = document.createElement(tagName);
    if (styleClass) newElement.className = styleClass;
    if (innerText) newElement.innerHTML = innerText;
    if (event) newElement.addEventListener('click', (e) => {
        event(e)
    })

    return newElement
}