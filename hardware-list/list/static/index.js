document.addEventListener("DOMContentLoaded", function(e){
    
const hardBox = document.getElementById('hard-box')
const loading = document.getElementById('loading')
const loadBtn = document.getElementsByTagName('button')
const table = document.getElementById('table')

const handleGetData = (x) =>{
    $.ajax({
        type: 'GET',
        url: '/hard-json/',
        success: function(response){
            hardware = response.hard
            loading.classList.remove('not-visible')
            setTimeout(()=>{
                hardBox.innerHTML = `
                                        <tr>
                                            <th>Наименование</th>
                                            <th>Номер</th>
                                            <th>Коментарий</th>
                                        </tr>
                                    
                                    `
                loading.classList.add('not-visible')
                for(el of Array.from(hardware)){
                    data = el.cabinet_id
                    if(data == x){
                        hardware.filter(item => item.cabinet_id === data).map(item =>{
                            console.log(item)
                            hardBox.innerHTML += `
                                                        
                                                            <td>${item.hardware_name}</td>
                                                            <td>${item.hardware_number}</td>
                                                            <td>${item.comment}</td>
                                                `
                        })
                    break
                }
                }
            }, 500)
        },
        error: function(error){
            console.log(error)
        }
    })
}


for (const el of Array.from(loadBtn)){
    el.addEventListener('click', () =>{
        console.log(el.value)
        data = el.value
        let x = handleGetData(data)
        console.log(x)
    })
}
})
