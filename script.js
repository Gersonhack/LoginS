// Configurar o Firebase (substitua pelas suas próprias configurações)
const firebaseConfig = {
    apiKey: "AIzaSyB_wnuKZfpXFPtjCGoSdqshPJ99jKLbnSQ",
    authDomain: "baco-dados-ghost.firebaseapp.com",
    projectId: "baco-dados-ghost",
    storageBucket: "baco-dados-ghost.appspot.com",
    messagingSenderId: "223550098785",
    appId: "1:223550098785:web:f32478267ce5f5aed44920",
    measurementId: "G-BZWYHYPDCX"
  };
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  const userContent = document.getElementById("userContent");
  const loggedInUsername = document.getElementById("loggedInUsername");
  const logoutBtn = document.getElementById("logoutBtn");
  
  // Modifique o evento de login para usar o Firebase Realtime Database
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Faça a autenticação Firebase com e-mail e senha
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Usuário autenticado com sucesso
        const user = userCredential.user;
        loggedInUsername.textContent = user.email; // Use o e-mail como nome de usuário
        showUserScreen();
      })
      .catch((error) => {
        // Tratamento de erro de autenticação
        Swal.fire("usuário não encontrado. Tente novamente.", "", "error");
      });
  });
  
  notificationBtn.addEventListener("click", () => {
    Swal.fire({
      title:"Bem vindo a sakuna web. Entre em contacto com o suporte para actualizar sua conta.",
      icon: "info",
      confirmButtonText: "Fechar"
    });
  });
  
  logoutBtn.addEventListener("click", () => {
    showLoginScreen();
  });
  
  function showUserScreen() {
    userContent.style.display = "block";
    document.querySelector(".login-container").style.display = "none";
  }
  
  function showLoginScreen() {
    userContent.style.display = "none";
    document.querySelector(".login-container").style.display = "block";
  }
  
  
  // ... (mantenha o código anterior)
  
  const androidBtn = document.getElementById("androidBtn");
  
  document.querySelectorAll(".square").forEach((square, index) => {
    square.addEventListener("click", () => {
      redirectToNewPage(index + 1);
    });
  });
  
  androidBtn.addEventListener("click", () => {
    window.open("https://chat.openai.com/", "_blank");
  });
  
  function redirectToNewPage(pageNumber) {
    switch (pageNumber) {
      case 1:
        // Redirecionar para a página 1
        window.location.href = "page1.html";
        break;
      case 2:
        // Redirecionar para a página 2
        window.location.href = "page2.html";
        break;
      case 3:
        // Redirecionar para a página 3
        window.location.href = "page3.html";
        break;
      case 4:
        // Redirecionar para a página 4
        window.location.href = "page4.html";
        break;
      default:
        break;
    }
  }
  
  
  function gr()
  {
const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "fazendo o login"
    });
    MANIPULAÇÃO
    
    
    
    
  }