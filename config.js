/* =====================================================================
   Configuração do Clube de Estudos — Voz do Ser
   Projeto Firebase: ceu-vozdoser
   Site: https://vozdoser.github.io/ceu/
   ===================================================================== */

window.VDS_CONFIG = {

  /* Chaves do projeto Firebase. São públicas por natureza: identificam o
     projeto, não autorizam nada. Quem protege o banco são as regras de
     acesso publicadas no console (leitura e escrita só com auth != null). */
  firebase: {
    apiKey: "AIzaSyD-YTEyFoCiM8LGj5_waXXYDxmiXMBgfh0",
    authDomain: "ceu-vozdoser.firebaseapp.com",
    databaseURL: "https://ceu-vozdoser-default-rtdb.firebaseio.com",
    projectId: "ceu-vozdoser",
    storageBucket: "ceu-vozdoser.firebasestorage.app",
    messagingSenderId: "264036154493",
    appId: "1:264036154493:web:ad93e891a80b916edc8514"
  },

  /* Sala do clube: é onde ficam guardadas as notas de todos os encontros.
     Só mude se quiser começar do zero — as notas antigas continuam na
     sala antiga. */
  sala: "vozdoser",

  /* Nome do clube, mostrado acima do texto projetado quando o PDF não
     tiver data no nome do arquivo. */
  clube: "Clube de Estudos · Um Curso em Milagres"
};
