// var xtthp = new XMLHttpRequest();
// xtthp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var res = JSON.parse(xtthp.responseText);
//         console.log(res);
//         document.getElementById("apodPhoto").src = res.hdurl;
//         document.getElementById("title").innerHTML = res.title;
//         document.getElementById("msg").innerHTML = res.explanation;
//     }
// };
// xtthp.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=HaMzD2R3LQbj4AZRuL3d3g55eK8eKNC8yoJH6FCX', true);

// xtthp.send();
//----------------------------------------------------------------------------------------------
// var $photo = $('#apodPhoto');
// var $title = $('#title');
// var $msg = $('#msg');
// $(document).ready(function(){
//     $.ajax({
//         type:'GET',
//         url: 'https://api.nasa.gov/planetary/apod?api_key=HaMzD2R3LQbj4AZRuL3d3g55eK8eKNC8yoJH6FCX',
//         success: function(data){
//            $photo.attr('src',data.hdurl);
//            $title.html(data.title);
//            $msg.html(data.explanation);
//         }
//     })
// });

axios.get('https://api.nasa.gov/planetary/apod?api_key=HaMzD2R3LQbj4AZRuL3d3g55eK8eKNC8yoJH6FCX')
.then(function(response){
    console.log('success');
    console.log(response);
    const{
        url,title,explanation
    }= response.data;
    document.getElementById("apodPhoto").src = url;
    document.getElementById("title").innerHTML = title;
    document.getElementById("msg").innerHTML = explanation;
})
.catch(function(error){
    console.log(error)
});
