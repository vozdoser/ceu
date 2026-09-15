/* =====================================================================
   Configuração do Clube de Estudos — Voz do Ser
   Edite este arquivo uma única vez. Instruções completas no README.md.
   ===================================================================== */

window.VDS_CONFIG = {

  /* 1) Cole aqui o objeto firebaseConfig que o Firebase te mostrar.
        Console do Firebase → engrenagem → Configurações do projeto →
        "Seus apps" → app da Web → Configuração do SDK.

        Estas chaves são públicas por natureza: quem protege o banco são
        as regras de acesso do passo 5 do README, não o segredo delas. */
  firebase: {
    apiKey: "COLE_AQUI",
    authDomain: "SEU-PROJETO.firebaseapp.com",
    databaseURL: "https://SEU-PROJETO-default-rtdb.firebaseio.com",
    projectId: "SEU-PROJETO",
    appId: "COLE_AQUI"
  },

  /* 2) Nome da sala do clube. Pode deixar como está.
        É o endereço onde ficam guardadas as notas de todos os encontros —
        só mude se quiser começar do zero, porque as notas antigas ficam
        na sala antiga. */
  sala: "vozdoser",

  /* 3) Nome do clube, mostrado no topo do texto projetado. */
  clube: "Clube de Estudos · Um Curso em Milagres"
};
