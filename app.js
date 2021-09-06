one = {
    question: "HTML stands for _____________________",
    answer: ["Hyper text mark up language", " Hyper markup language", "Language Hyper", "None of these"],
    correctAns: "Hyper text mark up language",
  };
  two = {
    question: "CSS stands for _____________________",
    answer: ["cascading style sheet", "Style sheet cascading", "cacsael style sheet", "none of these"],
    correctAns: "cascading style sheet",
  };
  three = {
    question: "What is the capital of Pakistan ______________________",
    answer: ["Islamabad", "Karachi", "Lahore", "Punjab"],
    correctAns: "Islamabad",
  };
  four = {
    question: "Iphone is the mobile of ________________________",
    answer: ["Apple", "Samsung", "Huawei", "Sony"],
    correctAns: "Apple",
  };
  
  var arr = [one, two, three, four];
  var question = document.getElementById("question");
  var currentQuestionNumber = document.getElementById("currentQuestionNumber");
  var totalQuestionQuantity = document.getElementById("totalQuestionQuantity");
  var optionsParent = document.getElementById("optionsParent");
  var resultParent = document.getElementById("resultParent");
  var resultText = document.getElementById("resultText");
  var detail = document.getElementById('detail')
  
  var ind = 0;
  var score = 0;
  
  function displayQuestion() {
    optionsParent.innerHTML = "";
    question.innerHTML = arr[ind].question;
    currentQuestionNumber.innerHTML = ind + 1;
    totalQuestionQuantity.innerHTML = arr.length;
    for (var i = 0; i < arr[ind].answer.length; i++) {
      optionsParent.innerHTML += `<div class="col-md-6 py-3">
      <button onclick="checkAnswer('${arr[ind].answer[i]}')" class="btn px-5  rounded-pill btn-light">${arr[ind].answer[i]}</button>
  </div>`;
    }
  }
  displayQuestion();
  
  function checkAnswer(e) {
    var userAnswer = e;
    if (userAnswer == arr[ind].correctAns) {
      score++;
    }
    if (ind + 1 == arr.length) {
      displayResult();
    } else {
      ind++;
      displayQuestion();
    }
  }
  
  var name1 = document.getElementById('name')
  var showName = document.getElementById('showName')
  
  
  
  function displayResult() {
    resultParent.style.display = "block";
    optionsParent.style.display = "none";
    question.style.display = "none";
    var result = "Your Score is " + score + " /" + arr.length + "👍"
    resultText.innerHTML = result
  
    
  }
  
  
  
  // var name1 = document.getElementById('name')
  // var showName = document.getElementById('showName')
  
  // function getName(){
   
  //   showName.value = name1.value
  //   name1.value = ''
  //   // console.log(showName.value)
  // }
  
  
  
  
  //................database
  
  // function pushData(){
  
  // var model = {}
  
  // model.showName = showName.value
  // model.score = score
  
  
  // console.log(model)
  // firebase.database.ref('/').child('stdData')
  
  // }