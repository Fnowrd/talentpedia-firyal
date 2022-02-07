$(document).ready(function () {
    var list = [
        'Name: Firyal Nabilah', 
        'Gender: Female',
        'Age: 92 x 0,25',
        'Address: Permata Pamulang, South Tangerang',
        'Origin: Banten'
    ]
    var awal = 0
    $('#add').on('click', function() {
        if(awal >= list.length){
            alert('Data Telah Habis')
        }
        else
        {
            $('#listdata').append('<li>'+list[awal]+'</li>')
            awal++
        }
    })
})