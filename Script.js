const input = document.getElementById("sEARchInput");
const items = document.querySelectorAll("item");

input.addEventListener("keyup", ()=> {
    const searchText = input.valve.tolowercase();
    items.foreach(item => {
        const text = item.textcontent.tolowercase();
        item.classlist.toggle("hidden", !text.includes(searchText));
    });
});