var house = [{
        id: 1,
        name: 'Ultima, Phase 2, 1 Tower',
        location: 'Ho Man Tin, Southern',
        price: '120',
        size: '1237',
        Layout: '4Rm 2Area',
        status: 'promotion',
        application: 'rental'
    },
    {
        id: 2,
        name: 'Heng Fa Chuen, 5Tower',
        location: 'Heng Fa Chuen, Kowloon City',
        price: '600',
        size: '550',
        Layout: '3Rm 2Area',
        status: 'normal',
        application: 'sale'
    },
    {
        id: 3,
        name: 'Vision City, 5Tower',
        location: 'Tsuen Wan, Tai Po',
        price: '700',
        size: '450',
        Layout: '2Rm 2Area',
        status: 'promotion',
        application: 'sale'
    },
    {
        id: 4,
        name: 'Grand Promena, 5Tower',
        location: 'Sai Wan Ho, Eastern',
        price: '500',
        size: '400',
        Layout: '2Rm 2Area',
        status: 'normal',
        application: 'rental'
    }
];



$(document).ready(function() {
    house.forEach(function(element) {
        if (element.status == "promotion") {
            $(".searchContent").append(`<div class="columns">
                                              <ul class="price">
                                                <li class="header"><div class="promotion">promotion</div><img class="img" src="./img/house${element.id}.jpg"></li>
                                                <li class="grey"><h5><a href="houseDetail.html?id=${element.id}">${element.name}</a></h5></li>
                                                <li>${element.location}</li>
                                                <li>HK$${element.price}M</li>
                                                <li>${element.size}sq.ft.</li>
                                                <li>${element.Layout}</li>
                                                <li>${element.application}</li>
                                                <li class="grey"><a id="houseSearch" href="houseDetail.html?id=${element.id}" class="button">Select</a></li>
                                              </ul>
                                            </div>`);
        } else {
            $(".searchContent").append(`<div class="columns">
                                              <ul class="price">
                                                <li class="header"><img class="img" src="./img/house${element.id}.jpg"></li>
                                                <li class="grey"><h5><a href="houseDetail.html?id=${element.id}">${element.name}</a></h5></li>
                                                <li>${element.location}</li>
                                                <li>HK$${element.price}M</li>
                                                <li>${element.size}sq.ft.</li>
                                                <li>${element.Layout}</li>
                                                <li>${element.application}</li>
                                                <li class="grey"><a id="houseSearch" href="houseDetail.html?id=${element.id}" class="button">Select</a></li>
                                              </ul>
                                            </div>`);
        }
    });
});

$(document).ready(function() {
    house.forEach(function(element) {
        $(".searchContent2").append(`<div class="columns2">
                                      <ul class="price2">
                                        <li class="header2"><img class="img" src="./img/house${element.id}.jpg"></li>
                                        <li class="grey2"><h5><a href="houseDetail.html?id=${element.id}">${element.name}</a></h5></li>
                                        <li>${element.location}</li>
                                        <li>HK$${element.price}M</li>
                                        <li>${element.size}sq.ft.</li>
                                        <li>${element.Layout}</li>
                                        <li>${element.application}</li>
                                        <li class="grey2"><a id="houseSearch" href="houseDetail.html?id=${element.id}" class="button2">Select</a></li>
                                      </ul>
                                    </div>`);
    });
});

$(document).ready(function() {
    house.forEach(function(element) {
        $(".searchContent3").append(`<div class="columns3">
                                      <ul class="price3">
                                        <li class="header3"><img class="img" id="output" src="./img/house${element.id}.jpg">	
                                        <div class="UploadImageButton">
                                          <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)">
                                        </div>

                                        <script>
                                          var loadFile = function(event) {
                                            var image = document.getElementById('output');
                                            image.src = URL.createObjectURL(event.target.files[0]);
                                          };
                                        </script>
                                        </li>
                                        <li class="grey3"><h5><p contenteditable="true">${element.name}</p></h5></li>
                                        <li><p1 contenteditable="true">${element.location} </p1><i style="font-size:20px" class="fa">&#xf040;</i></li>
                                        <li>HK<p1 contenteditable="true">HK$${element.price}M</p1><i style="font-size:20px" class="fa">&#xf040;</i></li>
                                        <li><p1 contenteditable="true">${element.size}sq.ft. <p1><i style="font-size:20px" class="fa">&#xf040;</i></li>
                                        <li><p1 contenteditable="true">${element.Layout} <p1><i style="font-size:20px" class="fa">&#xf040;</i></li>

                                        <li><select><option value="none" selected disabled hidden>${element.application}</option>
                                        <option value="sale">sale</option><option value="rental">rental</option></select></li>

                                        <li><select><option value="none" selected disabled hidden>${element.status}</option>
                                        <option value="promotion">promotion</option><option value="normal">normal</option></select></li>


                                        <li> <b>Disable / Enable</b> <br><br>
                                          <label class="switch">
                                            <input type="checkbox" checked>
                                            <span class="slider round"></span>
                                          </label>
                                        </li>
                                      </ul><br><br><br><br></div>`);

    });
    $(".searchContent3").append("<center><button>Save</button></center><br><br>");

});