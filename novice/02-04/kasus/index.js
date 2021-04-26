async function getData() {
  try {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    });
    const dataGanjil = res.data.filter((item) => item.id % 2 === 1);
    console.log(dataGanjil);
    let el = "";
    for (data of dataGanjil) {
      el += `
        <li>${data.name}, ${data.id}</li>
      `;
    }

    document.querySelector("#app").innerHTML = `<ul>${el}</ul>`;
  } catch (err) {
    console.error(err);
  }
}

getData();

// document.getElementById("app").innerHTML = res;
