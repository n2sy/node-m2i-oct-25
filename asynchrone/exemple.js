console.log("Traitement 1");
console.log("Traitement 2");
//

// function traiter3() {
//   return (p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("Traitement 3");
//       reject(new Error("Pas de thé"));
//     }, 3000);
//   }));
// }

// traiter3()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Traitement de l'erreur ", err.toString());
//   });

function traiter3() {
  return (p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Traitement 3");
      //reject(new Error("Pas de thé"));
    }, 3000);
  }));
}

async function traiter3Version2() {
  try {
    let data = await traiter3();
    console.log(data);
    console.log("Traitement 4");
    console.log("Traitement 5");
  } catch (err) {
    console.log(err);
  }
}
