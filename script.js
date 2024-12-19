let btn = document.querySelector("#btn");
let submit = document.querySelector("#submit");

btn.addEventListener("click", () => {
  if (
    type.value == "" ||
    expense.value == "" ||
    type.value.replaceAll(" ", "") == "" ||
    expense.value.replaceAll(" ", "") == ""
  ) {
    alert("Enter a valid expense...");
  } else {
    if (parseInt(type.value) > 0 || parseInt(type.value) < 0 || parseInt(type.value) == 0) {
      alert("Expense name can't be number...");
    }
    else {
      document.querySelector(".details").innerHTML += `<div class="data">
                <h3 class="name" >${type.value}</h3>
                <h3 class="rate" >${expense.value}</h3>
                <div class="icons">
                    <img src="edit.svg" class="edit" />
                    <img src="delete.svg" class="delete" >
                </div>
            </div>`;
      cost.innerText = parseInt(cost.innerText) + parseInt(expense.value);
      savings.innerText = parseInt(amount.innerText) - parseInt(cost.innerText);
      Delete();
      Rewrite();
    }
  }
  type.value = "";
  expense.value = "";
});

submit.addEventListener("click", () => {
  let Value = income.value;
  if (Value == 0) {
    Value = 0;
  }
  if (income.value == '') {
    alert("Enter a valid budget...");
  }
  else {
    let x = parseInt(amount.innerText);
    let y = parseInt(cost.innerText);
    let z = parseInt(savings.innerText);
    if (x == 0 && y == 0 && z == 0) {
      amount.innerText = Value;
      savings.innerText = Value;
    }
    else if (x != 0 && y == 0 && z != 0) {
      amount.innerText = Value;
      savings.innerText = Value;
    }
    else if ((x != 0 || x == 0) && y != 0) {
      amount.innerText = Value;
      savings.innerText = parseInt(amount.innerText) - parseInt(cost.innerText);;
    }
  }
  income.value = "";
});

const Delete = () => {
  let deletes = document.querySelectorAll(".delete");

  deletes.forEach(ele => {
    ele.addEventListener("click", (event) => {
      const dataDiv = event.target.closest('.data');
      let rateValue = dataDiv.querySelector(".rate");
      cost.innerText = parseInt(cost.innerText) - parseInt(rateValue.innerText);
      savings.innerText=parseInt(amount.innerText)-parseInt(cost.innerText);
      dataDiv.remove();
    });
  });
}

const Rewrite=()=> {
  let edits=document.querySelectorAll(".edit");

  edits.forEach(elem=> {
    elem.addEventListener("click",(event)=> {
      const Div=event.target.closest('.data');
      let RateValue=Div.querySelector(".rate");
      let expenseValue=Div.querySelector(".name");
      cost.innerText = parseInt(cost.innerText) - parseInt(RateValue.innerText);
      savings.innerText=parseInt(amount.innerText)-parseInt(cost.innerText);
      type.value=expenseValue.innerText;
      expense.value=parseInt(RateValue.innerText);
      Div.remove();
    });
  });
}