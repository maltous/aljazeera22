function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FZ1YZsv1yk":
        Script1();
        break;
      case "5qGB0zfvUPU":
        Script2();
        break;
      case "5XduDohw3BT":
        Script3();
        break;
      case "5cKh6gqFAeE":
        Script4();
        break;
      case "5ZKhuFTLCMe":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

