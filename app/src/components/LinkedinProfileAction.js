// export default class Actions {
//   menuSelected = (e) => {
//     // STEP diss-asign class from all
//     const menuBtns = document.querySelectorAll(`.menu button`);

//     // Loop through the NodeList and remove the class from each element
//     menuBtns.forEach((element) => {
//       element.classList.remove("selected");
//     });

//     // STEP assign class.
//     if (e != null && e.target != null && e.target.classList != null) {
//       e.target.classList.add("selected");
//     }

//     // STEP Show respective section
//     if (
//       e != null &&
//       e.target != null &&
//       e.target.attributes.sectionref != null &&
//       e.target.attributes.sectionref.value != null
//     )
//       console.log(e.target.attributes.sectionref.value);
//   };
// }
