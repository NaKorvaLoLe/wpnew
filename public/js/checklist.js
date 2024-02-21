// Чеклист


const btns = document.querySelectorAll(".checklist__btn");
const btnsAdd = document.querySelectorAll(".checklist__btn-add");
const formForAdd = document.querySelectorAll(".checklist__form");
const subList = document.querySelectorAll(".checklist__sublist");
const subItem = document.querySelector(".checklist__subitem");
const createBtn = document.querySelector(".checklist__btn-create");
const result = document.querySelector(".checklist__result");
const adminBtn = document.querySelector(".checklist__admin");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const inputDescription = document.querySelector(".checklist__input-description")
const inputUrl = document.querySelector(".checklist__input-url")

// hfpdthnsdfybt cgbrf

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    subList[i].classList.toggle("hidden");
    btn.classList.toggle("active");
  });
});


function resetHidden() {
    btns.forEach(btn => {
        btn.style.display = 'block';
    });
    formForAdd.forEach((form) => {
        form.style.display = 'none';
    })
    
}

resetHidden()


// Выбираем все дочерние чекбоксы при выборе родителя

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const subItems = checkbox.parentElement.querySelector(".checklist__sublist");
    const subCheckboxes = subItems.querySelectorAll("input[type=checkbox]");

    if (e.target.checked) {
      subCheckboxes.forEach((subCheckbox) => {
        subCheckbox.checked = true;
      });
    } else {
      subCheckboxes.forEach((subCheckbox) => {
        subCheckbox.checked = false;
      });
    }
  });
});


// Вывожу Тех задание

createBtn.addEventListener("click", () => {
    let tasks = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            tasks.push(checkbox.parentElement.querySelector("label").innerText);
        }
    });
    console.log(tasks);
    if (tasks != 0) {
        result.innerHTML = `
        <h2>Техническое задание</h2>
        <ul>
        ${tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
    `;
    }else{
        result.innerHTML = `<h2>Список работ пуст :(</h2>`;
    }
});


    

let trigger = false;
adminBtn.addEventListener("click", () => {
    resetHidden()
    if (!trigger) {
        subList.forEach(subli =>{
            subli.classList.toggle("hidden");
        })
        adminBtn.textContent='Выключить режим администратора'
        btns.forEach(btn => {
            btn.style.display = 'none';
            
        });
        formForAdd.forEach((form, i) => {
            form.style.display = 'block';
        })

        btnsAdd.forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                
            
                const newLi = document.createElement("li");
                newLi.classList.add ="checklist__subitem";
                newLi.innerHTML = `
                    <input type="checkbox" />
                    <label >${inputDescription.value} <a href="${inputUrl.value}">Ссылка</a> </label>
            `;
        
        
        
                subList[i].appendChild(newLi);
                console.log(subList[i]);
            });
            


            trigger = !trigger
        });
    } else {
        subList.forEach(subli =>{
            subli.classList.toggle("hidden");
        })
        adminBtn.textContent='Включить режим администратора'
        

        trigger = !trigger
    }
});


