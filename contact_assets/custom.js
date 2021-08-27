function scrollID(){
    document.getElementById('ConnectDetailsBoxID').scrollIntoView({
        behavior: 'smooth'
      });
}

const endpointUrl = "https://indexgroup94-api.glitch.me/send"
function sendMail() {
  
  var services = ""

  if ($('#choice_4_7_1').is(":checked"))
  {
    services += `${$('#choice_4_7_1').val()}, `;
  }
  if ($('#choice_4_7_2').is(":checked"))
  {
    services += `${$('#choice_4_7_2').val()}, `;
  }
  if ($('#choice_4_7_3').is(":checked"))
  {
    services += `${$('#choice_4_7_3').val()}, `;
  }
  if ($('#choice_4_7_4').is(":checked"))
  {
    services += `${$('#choice_4_7_4').val()}, `;
  }
  if ($('#choice_4_7_5').is(":checked"))
  {
    services += `${$('#choice_4_7_5').val()}, `;
  }
  if ($('#choice_4_7_6').is(":checked"))
  {
    services += `${$('#choice_4_7_6').val()}, `;
  }
  if ($('#choice_4_7_7').is(":checked"))
  {
    services += `${$('#choice_4_7_7').val()}, `;
  }
  if ($('#choice_4_7_8').is(":checked"))
  {
    services += `${$('#choice_4_7_8').val()}, `;
  }
  if ($('#choice_4_7_9').is(":checked"))
  {
    services += `${$('#choice_4_7_9').val()}, `;
  }
  if ($('#choice_4_7_10').is(":checked"))
  {
    services += `${$('#choice_4_7_10').val()}, `;
  }
  if ($('#choice_4_7_11').is(":checked"))
  {
    services += `${$('#choice_4_7_11').val()}, `;
  }
  if ($('#choice_4_7_12').is(":checked"))
  {
    services += `${$('#choice_4_7_12').val()}, `;
  }
  if ($('#choice_4_7_13').is(":checked"))
  {
    services += `${$('#choice_4_7_13').val()}, `;
  }
  if ($('#choice_4_7_14').is(":checked"))
  {
    services += `${$('#choice_4_7_14').val()}, `;
  }
  if ($('#choice_4_7_15').is(":checked"))
  {
    services += `${$('#choice_4_7_15').val()}, `;
  }
  if ($('#choice_4_7_16').is(":checked"))
  {
    services += `${$('#choice_4_7_16').val()}, `;
  }
  if ($('#choice_4_7_17').is(":checked"))
  {
    services += `${$('#choice_4_7_17').val()}, `;
  }
  if ($('#choice_4_7_18').is(":checked"))
  {
    services += `${$('#choice_4_7_18').val()}, `;
  }

  var msg = $("#input_4_5").val();
  var name = $("#input_4_1").val();
  var email = $("#input_4_3").val();
  var mobile = $("#input_4_2").val();
  if(mobile.trim()=="") {
    alert("Mobile number should be required!");
    return
  }
  if(services.trim()=="") {
    alert("Select atleast one service!")
    return;
  }
  
  var data = {
    name: name,
    mobile: mobile,
    email: email,
    services: services,
    msg: msg
  }
  $.ajax({
    url: endpointUrl,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (result) {
      console.log(result)
      alert("We receive your request your successfully!")
    },
    error: function (e) {
      console.log(e)
      alert("Something went wrong try after some time!")
    }
  });
}