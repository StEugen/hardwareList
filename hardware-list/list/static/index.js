document.addEventListener("DOMContentLoaded", function(e){
    
const hardBox = document.getElementById('hard-box')
const loading = document.getElementById('loading')
const loadBtn = document.getElementsByTagName('button')
const search = document.getElementById('search')


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


const searchData = (y) =>{
    $.ajax({
        type: 'GET',
        url: '/hard-json/',
        success: function(response){
            hardware = response.hard
            cab = response.cabs
            loading.classList.remove('not-visible')
            setTimeout(()=>{
                hardBox.innerHTML = ``
                loading.classList.add('not-visible')
                for(el of Array.from(hardware)){
                    data = el.hardware_number
                    cabinetid = el.cabinet_id
                    if(data == y){
                        hardware.filter(item => item.hardware_number === data).map(item =>{
                            hardBox.innerHTML += `
                            <tr>
                            <th>Наименование</th>
                            <th>Номер</th>
                            <th>Коментарий</th>
                            </tr>
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



search.addEventListener('keyup', (e) =>{
    const searchValue = e.target.value
    let y = searchData(searchValue)
    console.log(y)
})



for (const el of Array.from(loadBtn)){
    el.addEventListener('click', () =>{
        data = el.value
        let x = handleGetData(data)
        console.log(x)
    })
}
})
