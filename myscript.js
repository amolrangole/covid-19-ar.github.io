function fetch(){
  $.get("https://api.covid19api.com/summary",
    function (data){
          //console.log(data['Countries'].length);

          var tbval = document.getElementById('tbval');

          for(var i = 1 ; i < (data['Countries'].length); i++){

            var x = tbval.insertRow();
            x.insertCell(0);

            tbval.rows[i].cells[0].innerHTML = data['Countries'][i - 1]['Country'];

            tbval.rows[i].cells[0].style.background = '#77acf1';
            tbval.rows[i].cells[0].style.color = '#fff';



            x.insertCell(1);

            tbval.rows[i].cells[1].innerHTML = data['Countries'][i - 1]['TotalConfirmed'];

            tbval.rows[i].cells[1].style.background = 'rgb(184,181,255)';



            x.insertCell(2);

            tbval.rows[i].cells[2].innerHTML = data['Countries'][i - 1]['NewConfirmed'];

            tbval.rows[i].cells[2].style.background = 'rgb(184,181,255,0.6)';



            x.insertCell(3);

            tbval.rows[i].cells[3].innerHTML = data['Countries'][i - 1]['TotalRecovered'];

            tbval.rows[i].cells[3].style.background = 'rgb(145,199,136)';



            x.insertCell(4);

            tbval.rows[i].cells[4].innerHTML = data['Countries'][i - 1]['NewRecovered'];

            tbval.rows[i].cells[4].style.background = 'rgb(145,199,136,0.6)';



            x.insertCell(5);


            tbval.rows[i].cells[5].innerHTML = data['Countries'][i - 1]['TotalDeaths'];

            tbval.rows[i].cells[5].style.background = 'rgb(240,89,69)';



            x.insertCell(6);


            tbval.rows[i].cells[6].innerHTML = data['Countries'][i - 1]['NewDeaths'];

            tbval.rows[i].cells[6].style.background = 'rgb(240,89,69,0.6)';

          }
        }
      );
} 

// $data = file_get_contents('https://api.covid19api.com/summary');
// $coronadata = json_decode($data);

// $coronadata.print();
