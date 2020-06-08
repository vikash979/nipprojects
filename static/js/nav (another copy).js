$(window).on('load',function(){
  var aa = {}

  $.ajax({
       url:  '/application/policy/',
       type: "GET",
       dataType: "json",
       //data:{"parent_id":"parent_id"},
        success: function(response){
          for(var i=0;i<response.results.length;i++){
              if(i % 2 == 0){
                $('#publicities').append(`<tr style="border-bottom:1px dotted grey"><td style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/abc1.png" class="rounded-circle" alt="Cinque Terre" width="50" height="50"></td><td style="border-bottom:1px dotted grey; color:#000" width="100%">&nbsp;&nbsp;&nbsp;<span align="justify">${response.results[i]['policy_name']}</span></span><p>30 April 2020</p></td></tr>`)

              }
              else
              {
                $('#publicities').append(`<tr style="border-bottom:1px dotted grey"><td style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/def1.png" class="rounded-circle" alt="Cinque Terre" width="50" height="50"></td><td style="border-bottom:1px dotted grey; color:#000" width="100%">&nbsp;&nbsp;&nbsp;<span align="justify">${response.results[i]['policy_name']}</span></span><p>30 April 2020</p></td></tr>`)
                //alert("ok")
              }
                   //$('#publicities').append(`<tr style="border-bottom:1px dotted grey"><td style="border-bottom:1px dotted grey" width="30%"><i class="fa fa-file-pdf-o fa_custom fa-4x" style="font-size:24px;color:red"></i></i></td><td style="border-bottom:1px dotted grey" width="100%">&nbsp;&nbsp;&nbsp;<span>${response.results[i]['policy_name']}a</span></td></tr>`)
                   
                  //$("#publicities").append(`${response.results[i]['file']}</td><td>${response.results.[i]['policy_name']}</td></tr>`)
              }
        }
      })


  ////////////////////////////publication//////////////
              $.ajax({
                  url:  '/application/publication/',
                  type: "GET",
                  dataType: "json",
                  //data:{"parent_id":"parent_id"},
                   success: function(response){
                      for(var i=0;i<response.results.length;i++){
                        if(i % 2 == 0){
                           $('#publication').append(`<tr style="border-bottom:1px dotted grey"><td style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/man.png" class="rounded-circle" alt="Cinque Terre" width="50" height="50"> </td><td style="border-bottom:1px dotted grey; color:#000" width="100%">&nbsp;&nbsp;&nbsp;<span>${response.results[i]['ppublication_name']}<br/> <span> 30 April 2020</span></td></tr>`)
                         }
                         else{
                          $('#publication').append(`<tr style="border-bottom:1px dotted grey"><td style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/man2.jpg" class="rounded-circle" alt="Cinque Terre" width="50" height="50"> </td><td style="border-bottom:1px dotted grey; color:#000" width="100%">&nbsp;&nbsp;&nbsp;<span>${response.results[i]['ppublication_name']}<br/> <span> 30 April 2020</span></td></tr>`)
                         
                         }
                          //$("#publicities").append(`${response.results[i]['file']}</td><td>${response.results.[i]['policy_name']}</td></tr>`)
                      }
                      //alert(JSON.stringify(response.results))  public_obj
                   }
               })

  /////////////////////////////////////////////////////Social media//////////////


              $.ajax({
                  url:  '/socialmedia/social_media/',
                  type: "GET",
                  dataType: "json",
                  //data:{"parent_id":"parent_id"},
                   success: function(response){

                    for(var i=0;i<response.length;i++){
                      //alert(response)

                      $('#socialmenu_bar').append(` <li class="col-sm-2" style="color:#000"><a href="${response[i]['url_link']}" style="color:#000;">${response[i]['menu_name']}</a><br/><hr>
                        </li>` )
                    }
                      
                   }
               })

              ////////////////////////////////////Othersites///
               $.ajax({
                url:  '/othersiters/menu_details/',
                type: "GET",
                dataType: "json",
                data:{"parent_id":"parent_id"},
                success: function(response){
                  //alert(JSON.stringify(response))
                   for(var i=0;i<response.length;i++){
                     var ee = '.text-center_'+i
                     $('#othersiters_bar').append(` <li class="col-sm-2" style="color:#000; font-weight:bold">${response[i]['menu_name']}<hr>
                        <ul class="menu-inner otext-center_${i}"</ul></li>` )
                         var ee = '.otext-center_'+i
                        
                         for (var j=0;j<response[i]['othersiteParent_menu'].length;j++)
                         {
                          $(ee).append(`
                          <li><a href="/application/applicationobj_list/${response[i]['menu_name']}/${response[i]['othersiteParent_menu'][j]['menu_name']}/">${response[i]['othersiteParent_menu'][j]['menu_name']}</a></li>
                        `)

                         }
                            
                      //$('#post_widget_data').append(`<button class="tablink" onclick="openPage('${response[i]['menu_name']}', this, 'red')">${response[i]['menu_name']}</button>`)
                   //   for (var j=0;j<response[i]['application_menu'].length;j++)

                     
                   }

                }



              })
               $.ajax({
                  url:  '/acknowledge/sendjson/',
                  type: "GET",
                  dataType: "json",
                  //data:{"parent_id":"parent_id"},
                   success: function(response){
                   // alert(JSON.stringify(response))

                   }
                 })

  ///////////////////////////////////Acknowledge/////////////////////////

              $.ajax({
                  url:  '/acknowledge/ack_detail/',
                  type: "GET",
                  dataType: "json",
                  //data:{"parent_id":"parent_id"},
                   success: function(response){

                   
                    var arr = [];
                    var arrCount = []
                    policy_name = []
                    policy_count = []
                    publication_name = []
                    publication_count = []
                    for(var i=0;i<response.length;i++){
                      //alert(JSON.stringify(response))
                      var public_data = i+1
                      
                      arr.push(response[i]['menu_name'])
                      

                      
                        $('#ack_bar').append(` <li class="col-sm-2" style="color:#000"><a href="${response[i]['url_link']}" style="color:#000;">${response[i]['menu_name']}</a><br/><hr>
                        </li>` )
                        if (response[i]['menu_name'] =='Policy Letters')
                        {
                          arrCount.push(response[i]['ask_submenues'].length)

                          var obj_length = response[i]['ask_submenues'].length
                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #f39c12; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><div class="col-lg-12 col-sm-12 col-xs-12"><div class="col-lg-6 col-sm-6 col-xs-6"><h3>Total : ${obj_length}</h3></div><div class="col-lg-6 col-sm-6 col-xs-6"><img src="http://192.168.0.8:8088/static/images/policy_red.png" class="rounded-circle" alt="Cinque Terre" ></div></div><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}"></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data
                            //$('#myUL').empty()
                             for (var polkk = 0; polkk<response[i]['ask_submenues'].length;polkk++)

                             {
                               
                               
                               plocy_size =  response[i]['ask_submenues'][polkk]['policy_name'].length
                               if (plocy_size > 0)
                               {
                                policy_count.push(response[i]['ask_submenues'][polkk]['policy_name'].length)
                                //for (var poli_size = 0;poli_size<plocy_size;poli_size++ )
                                //{
                                  policy_name.push(response[i]['ask_submenues'][polkk]['policy_name'][0]['policy_name'])
                                //}
                               }
                             }
                        for (var kk = 0; kk<response[i]['ascsubmenu_count'].length;kk++)
                        {

                             if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/policy_red.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascsubmenu_count'][kk]['submenu_name']}</a></div></div>`)
                        
                          }
                          else
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/policy4.png" class="rounded-circle" alt="Cinque Terre" >  </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascsubmenu_count'][kk]['submenu_name']}</a></div></div>`)
                        

                          }
                          


                        }
                        if (response[i]['ask_submenues'].length > 0)
                        {
                           for (var kk = 0; kk<response[i]['ask_submenues'].length;kk++)
                        {
                          
                            // $('#myUL').append(`<li><input type="radio" id="aa_${response[i]['ask_submenues'][kk]['id']}" value="${response[i]['ask_submenues'][0]['submenu_name']}" name="megafol" class="box" onclick="dsd(this.id,this.className)" >${response[i]['ask_submenues'][0]['submenu_name']}
                            //   <ul class="nested" id="nested_${response[i]['ask_submenues'][kk]['id']}">
                            // </ul>                     </li>`)
                        }
                        }
                      }
                        }
                        if (response[i]['menu_name'] =='Publications')
                        {
                          var obj_length = response[i]['ask_subpublicationmenues'].length
                          arrCount.push(response[i]['ask_subpublicationmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #bdc3c7; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}"></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['ascpublicationsubmenu_count'].length;kk++)
                        {

                            if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/publication_blue.png" style="border-radius: 100%; background-color:red"  alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascpublicationsubmenu_count'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['ascpublicationsubmenu_count'][kk]['added_on']}</p></div></div>`)
                        
                           // $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/publication_red.png" style="border-radius: 60%;" class="rounded-circle" alt="Cinque Terre"  width="80%" height="80%"> </span></div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify">${response[i]['ascpublicationsubmenu_count'][kk]['submenu_name']}</div></div>`)
                        
                          }
                          else
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/publication_red.png" style="border-radius: 100%; background-color:blue"  class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascpublicationsubmenu_count'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['ascpublicationsubmenu_count'][kk]['added_on']}</p></div></div>`)
                        
                            // $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/publication_blue.png" style="border-radius: 60%;"  width="80%" height="80%" class="rounded-circle" alt="Cinque Terre" > </span></div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify">${response[i]['ascpublicationsubmenu_count'][kk]['submenu_name']}</div></div>`)
                        

                          }

                          
                        }
                      }
                        }

                    ///////////////////////?Guidelines////////////////////////

                     if (response[i]['menu_name'] =='Guidelines')
                        {
                          var obj_length = response[i]['ask_subguidelinesmenues'].length
                          arrCount.push(response[i]['ask_subguidelinesmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #4874bf; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}"></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['ascguideleinessubmenu_count'].length;kk++)
                        {

                          if (kk % 2 ==0)
                          {

                             $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/guidelines_rednew.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascguideleinessubmenu_count'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['ascguideleinessubmenu_count'][kk]['added_on']}</p></div></div>`)
                        
                            
                          }
                          else
                          {
                           $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/guidelines_bluenew.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['ascguideleinessubmenu_count'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['ascguideleinessubmenu_count'][kk]['added_on']}</p></div></div><br/>`)
                        

                          }
                          
                        }
                      }
                        }

        //////////////////////////////////////Standards///////////////////
                      if (response[i]['menu_name'] =='Standards')
                        {
                          var obj_length = response[i]['ask_substandardsmenues'].length
                          arrCount.push(response[i]['ask_substandardsmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #f39c12; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}"></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['standards'].length;kk++)
                        {

                           if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/standardsred.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['standards'][kk]['submenu_name']}</a></div></div>`)
                        
                           // $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/abc1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> <input type="checkbox" id="${response[i]['standards'][kk]['id']}" value="${response[i]['standards'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')"></span>${response[i]['standards'][kk]['submenu_name']}</div>`)
                        
                          }
                          else
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/standardsblue.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['standards'][kk]['submenu_name']}</a></div></div>`)
                        

                          }
                          //$(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%"><input type="checkbox" id="${response[i]['standards'][kk]['id']}" value="${response[i]['standards'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['standards'][kk]['submenu_name']}</div>`)
                        }
                      }
                        }
                        

          /////////////////////////////////////////////Navy Orders//////////////////////////
          if (response[i]['menu_name'] =='Navy Orders')
                        {
                          var obj_length = response[i]['ask_subnavy_ordersmenues'].length
                          arrCount.push(response[i]['ask_subnavy_ordersmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #bdc3c7; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}"></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['navy_ordersCount'].length;kk++)
                        {
                            if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/navy_orderred.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['navy_ordersCount'][kk]['submenu_name']}</a></div></div>`)
                        
                            
                          }
                          else
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/navy_orderblue.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['navy_ordersCount'][kk]['submenu_name']}</a></div></div>`)
                        

                          }

                          //$(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%"><input type="checkbox" id="${response[i]['navy_ordersCount'][kk]['id']}" value="${response[i]['navy_ordersCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['navy_ordersCount'][kk]['submenu_name']}</div>`)
                        }
                      }
                        }
                        
                         ///////////////////////?Navy Instructions////////////////////////

                     if (response[i]['menu_name'] =='Navy Instructions')
                        {
                          var obj_length = response[i]['ask_subnavy_instructionmenues'].length
                          arrCount.push(response[i]['ask_subnavy_instructionmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #4874bf; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}" ></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['navyInstrctionCount'].length;kk++)
                        {
                          if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/instructionred.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['navyInstrctionCount'][kk]['submenu_name']}</a></div></div>`)
                        
                            //$(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/abc1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> <input type="checkbox" id="${response[i]['navyInstrctionCount'][kk]['id']}" value="${response[i]['navyInstrctionCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')"></span>${response[i]['navyInstrctionCount'][kk]['submenu_name']}</div>`)
                        
                          }
                          else
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-2 col-sm-2 col-xs-2"><img src="http://192.168.0.8:8088/static/images/instructionred.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-10 col-sm-10 col-xs-10" style="align:justify"><a href="#">${response[i]['navyInstrctionCount'][kk]['submenu_name']}</a></div></div>`)
                        

                          }
                          }
                      }
                        }



                          ///////////////////////?Library////////////////////////

                     if (response[i]['menu_name'] =='NHQ e-Library')
                        {
                          var obj_length = response[i]['ask_subnohqsmenues'].length
                          arrCount.push(response[i]['ask_subnohqsmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #4874bf; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}" ></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['ask_libCount'].length;kk++)
                        {
                          if (kk % 2 ==0)
                          {
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%" > <span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/abc1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> </span> <input type="checkbox" id="${response[i]['ask_libCount'][kk]['id']}" value="${response[i]['ask_libCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['ask_libCount'][kk]['submenu_name']}</div>`)
                           

                          }
                          else
                          {
                             $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%" > <span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/def1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> </span> <input type="checkbox" id="${response[i]['ask_libCount'][kk]['id']}" value="${response[i]['ask_libCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['ask_libCount'][kk]['submenu_name']}</div>`)
                           
                          }
                         
                        }
                      }
                        }


                /////////////////////////////////////////////////////////////////Brs///////////////////////////////////////

                if (response[i]['menu_name'] =='BRs')
                        {
                          var obj_length = response[i]['brsmenues'].length
                          arrCount.push(response[i]['brsmenues'].length)

                          $('#ack_men').append(`<div class="col-lg-4 col-sm-4 col-xs-4"><aside id="sidebar" class="left-bar"><div class="feature-matchs"><h4 style="border-bottom:1px dotted grey; background-color: #4874bf; color:#fff; font-weight:bold"> ${response[i]['menu_name']}</h4><div class="team-btw-match" ><h3>Total : ${obj_length}</h3><div class="col-lg-12 col-sm-12 col-xs-12" id="dashbdcount_${public_data}" ></div></div><button onclick="megamyFunction('${response[i]['menu_name']}')" class="thbg-color" style="background: #800000; background-color: #800000;
                              border: none;
                              color: white;
                              padding: 10px 20px;
                              text-align: center;
                              text-decoration: none;
                              display: inline-block;
                              font-size: 16px;
                              margin: 0px 2px;
                              cursor: pointer;" id="myBtn">Read more</button></aside></div>`)
                          if (obj_length > 0)
                        {
                          var dashboard = '#dashbdcount_'+public_data

                        for (var kk = 0; kk<response[i]['brsCount'].length;kk++)
                        {
                           if(kk % 2 == 0){
                            $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/brsred.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['brsCount'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['brsCount'][kk]['added_on']}</p></div></div>`)
                        
                            //$(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%" ><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/abc1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> </span><input type="checkbox" id="${response[i]['brsCount'][kk]['id']}" value="${response[i]['brsCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['brsCount'][kk]['submenu_name']}</div>`)
                            }
                            else
                            {
                              $(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%;" ><div class="col-lg-3 col-sm-3 col-xs-3"><img src="http://192.168.0.8:8088/static/images/brsblue.png" class="rounded-circle" alt="Cinque Terre" > </div><div class="col-lg-9 col-sm-9 col-xs-9" style="align:justify"><a href="#">${response[i]['brsCount'][kk]['submenu_name']}</a><p text-align="justify">${response[i]['brsCount'][kk]['added_on']}</p></div></div>`)
                        
                              //$(dashboard).append(`<div class="col-lg-12 col-sm-12 col-xs-12" style="padding-top:3%" ><span style="border-bottom:1px dotted grey"><img src="http://192.168.0.8:8088/static/images/def1.png" class="rounded-circle" alt="Cinque Terre" width="10%" height="10%"> <input type="checkbox" id="${response[i]['brsCount'][kk]['id']}" value="${response[i]['brsCount'][kk]['id']}" name="megafol" onclick="megafolder(this.id,'${response[i]['menu_name']}')">${response[i]['brsCount'][kk]['submenu_name']}</div>`)

                            }
                          
                        }
                      }
                        }

//alert(JSON.stringify(response[i]['ask_submenues']))

                      
          //             $('#myUL').append(`<li><span class="box">Green Tea</span>
          //   <ul class="nested">
          //     <li>Sencha</li>
          //     <li>Gyokuro</li>
          //     <li>Matcha</li>
          //     <li>Pi Lo Chun</li>
          //   </ul>
          // </li>`)
                      if (response[i]['ask_submenues'].length > 0)
                      {
                        //alert(response[i]['ask_submenues'].length)
                       for (var j=0; j<response[i]['ask_submenues'].length;j++)
                       {
                        $('#policy_name').append(`<tr><td><i class="fa fa-file-pdf-o" style="font-size:18px;color:red"></i>${response[i]['ask_submenues'][j]['submenu_name']}</td><td></td><td>${response[i]['ask_submenues'][j]['added_on']}</td></tr>`)
                        
                        $('#myULl').append(`<li><input type="checkbox" id="aa_${j}" class="box" onclick="dsd(this.id,this.className)" >${response[i]['ask_submenues'][j]['submenu_name']}
    <ul class="nested" id="nested_${j}"></li>`)
                        //alert(JSON.stringify(response[i]['ask_submenues'][j]['policy_name']))
                        if (response[i]['ask_submenues'][j]['policy_name'].length> 0)
                        {
                           var nestedid = "#nested_"+j
                          for (var k=0; k<response[i]['ask_submenues'][j]['policy_name'].length;k++)
                          {
                           
                          $(nestedid).append(`<li><input type="checkbox" id="bb_${k}" class="box" onclick="dsd(this.id,this.className)" >${response[i]['ask_submenues'][j]['policy_name'][k]['policy_name']}
    <ul class="nested" id="nested_${k}"></li>`)
                        } 
                          }
                          
    
  
                      // var aaaa = "aa_"+j


                       }
                      }

                    }
                   // alert(policy_name)
                   // alert(policy_count)
                    // var arr = [];
                    //var arrCount = []

                    var policydataa  = policy_name
                   var policylabels  = policy_count 

                   var dataa  = arr
                   var labels  = arrCount

                    Highcharts.chart('ccontainer', {
                       chart: {
                          type: 'column'
                        },
                        title: {
                          text: 'Km'
                      },
                       xAxis: {
                        categories:arr
                        },
                        series: [{
          name: 'KM',
          data: arrCount,
          color: 'green'
          }]

                    })
                   Highcharts.chart('policycontainer', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Policy Graph'
      },
      xAxis: {
          categories:policydataa
        },
        series: [{
          name: 'Policy Graph',
          data: policylabels,
          color: 'green'
          }]
    })
                     
                   }
               })

////////////////////////////////////Policy graph////////////////




          

  ///////////////////////////////////

  $.ajax({
                  url:  '/application/policy/',
                  type: "GET",
                  dataType: "json",
                  //data:{"parent_id":"parent_id"},
                   success: function(response){

                   }
               })

  ///////////////////////////////////////////////////
              $.ajax({
                url:  '/application/menu_detail/',
                type: "GET",
                dataType: "json",
                data:{"parent_id":"parent_id"},
                success: function(response){
                  //alert(JSON.stringify(response))
                   for(var i=0;i<response.length;i++){
                     var ee = '.text-center_'+i
                     $('#menu_bar').append(` <li class="col-sm-2" style="color:#000">${response[i]['menu_name']}<hr>
                        <ul class="menu-inner text-center_${i}"</ul></li>` )
                        var ee = '.text-center_'+i
                        //alert(JSON.stringify(response[i]['application_menu']))
                        for (var j=0;j<response[i]['application_menu'].length;j++)
                        {
                          $(ee).append(`
                          <li><a href="/application/applicationobj_list/${response[i]['menu_name']}/${response[i]['application_menu'][j]['menu_name']}/">${response[i]['application_menu'][j]['menu_name']}</a></li>
                        `)
                        }


                   //   for (var j=0;j<response[i]['application_menu'].length;j++)

                      //$('#menu_bar').append('</ul></li>')
                   }

                }



              })

    ////////////////////////////////////////////////////////////////

    $.ajax({
            url:  '/application/commander/',
            type: "GET",
            dataType: "json",
            data:{"parent_id":"parent_id"},
            success: function(response){
              //alert(JSON.stringify(response.results))
              $("#defence_zone").empty()
              $("#defence_zone").append(`<h3 align="center">Officers</h3>`)
              for (var i=0;i<response.results.length;i++)
                	{
                    $("#defence_zone").append(`<div class="col-lg-3"><div class="team-column style-2"><img src="${response.results[i]['file']}" class="img-fluid circle" />  <div class="player-name">
                         <div class="desination-2">${response.results[i]['wing_commander_rank']}</div>
                         <h5 >${response.results[i]['wing_commander_name']}</h5>
                         <span class="player-number">12</span>
                      </div></div></div>`)
                  }


                }



        })

    //////////////////////////////////?Lates NewsMenuuobjSerializer
    $.ajax({
                            url:  '/application/news_detail/',
                            type: "GET",
                            dataType: "json",

                            success: function(response){
                                $('#news_listss').empty()


                                for(var i=0;i<=response.results.length;i++){

                                        $('#news_listss').append(`<td style="color: #ffcb05; font-weight:bold; font-size:18px;">${response.results[i]['news_heading']}</td>`)



                                             //$('#news_details').append( `<tr><td><i class="fa fa-file-pdf-o" style="color: red"></i><a  href="${response.results[i]['id']}" style="color:#fff" target="_blank">${response.results[i]['news_heading']}</a></td><td></td></tr>`)
                                           //$('#news_listss').append(`<td style="color: red">${response.results[i]['news_heading']}, &nbsp; </td>`)


                                            if(i % 2 == 0){

                                              $('#lastest_obj').append(`<tr class="even" style="border-bottom-color: coral; border-bottom:1px dotted grey;"><td style="color:#ffcb05"><div class="col-lg-12">${response.results[i]['news_heading']}, &nbsp;<br/> </div><hr/></td></tr>`)
                  // rows.className = "even";

                                               }else{
                                                   $('#lastest_obj').append(`<tr class="odd"><td style="color:#ffcb05; border-bottom:1px dotted blue;"><div class="col-lg-12">${response.results[i]['news_heading']}, &nbsp;<br/> </div><hr/></td></tr>`)
                                                // rows.className = "odd";

                                               }

                                }

                               // alert(JSON.stringify(response))news_details
                            }
                        })
    ////////////////////////////////////////////
    ///////////////////////////////////////Other Sites//////////
                         
    //////////////////////////////////////////////////////////////

  openPage('NHQ', this, 'red')


///////////////////////////////////////////////////////////////////////////////////////

       
})

function openPage(pageName,elmnt,color) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




function megamyFunction(valu)
{
  alert(valu)
  var ids = $(':checkbox:checked').map(function() {
    return this.id;
  }).get();

  var favorite = [];
              $.each($("input[name='megafol']:checked"), function(){

                favorite.push($(this).val());

            });
  //alert(JSON.stringify(favorite))
  //myArray = ['aaa', 'bbb', 'ccc']; megafol
//var arrStr = encodeURIComponent(JSON.stringify(myArray));
//var ee = myArray.join(",")
//alert(ids)
var url = "/acknowledge/ackpolicy/?array="+ favorite+'&menutype='+valu
 window.location.href = url;

 //$('#myLink').attr({ href: '/myLink/?array=' + myArray });

}