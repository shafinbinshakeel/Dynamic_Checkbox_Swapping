function swapToRightCheckboxes(){
    const temp2=document.getElementById("container2")
    const rightDiv=temp2.querySelectorAll("input[type='checkbox']")

    const temp1=document.getElementById("container1")
    const leftDiv=temp1.querySelectorAll("input[type='checkbox']")
    const checked=temp1.querySelectorAll("input[type='checkbox']:checked")

    var checkedArr=[]
    for(let i=0;i<checked.length;i++)
    {
        checkedArr.push(checked[i].value)
    }

    for(let i=0;i<checkedArr.length;i++)
    {
        let createInput=document.createElement("input")
        createInput.type="checkbox"
        createInput.value=checkedArr[i]

        let label=document.createElement("label")
        label.innerText=checkedArr[i]
        label.className="checkbox"

        let labelContainer=document.createElement("label")
        labelContainer.appendChild(createInput)
        labelContainer.appendChild(label)

        document.getElementById("container2").appendChild(labelContainer)
    }

    for(let i=0;i<leftDiv.length;i++)
    {
        if(leftDiv[i].checked){
            leftDiv[i].parentNode.remove(leftDiv[i])
        }
    }
}

function swapToLeftCheckboxes(){
    const temp2=document.getElementById("container1")
    const leftDiv=temp2.querySelectorAll("input[type='checkbox']")

    const temp1=document.getElementById("container2")
    const rightDiv=temp1.querySelectorAll("input[type='checkbox']")
    const checked=temp1.querySelectorAll("input[type='checkbox']:checked")

    var checkedArr=[]
    for(let i=0;i<checked.length;i++)
    {
        checkedArr.push(checked[i].value)
    }

    for(let i=0;i<checkedArr.length;i++)
    {
        let createInput=document.createElement("input")
        createInput.type="checkbox"
        createInput.value=checkedArr[i]

        let label=document.createElement("label")
        label.innerText=checkedArr[i]
        label.className="checkbox"

        let labelContainer=document.createElement("label")
        labelContainer.appendChild(createInput)
        labelContainer.appendChild(label)

        document.getElementById("container1").appendChild(labelContainer)
    }

    for(let i=0;i<rightDiv.length;i++)
    {
        if(rightDiv[i].checked){
            rightDiv[i].parentNode.remove(rightDiv[i])
        }
    }
}