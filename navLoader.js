// $(document).ready(function(){
//     $("#navbar-frame").load("navbar.html");
// });

// $(function(){
//   $("#navbar-frame").load("navbar.html");
// });

fetch('D:/Mes cours/Seg/project/navbar.html', {
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Get the response as plain text
        })
            .then(htmlContent  => {
                document.getElementById('navbar-frame').innerHTML = htmlContent;
            });