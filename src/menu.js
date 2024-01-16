

const Menu = () => {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Menu items
    let content = document.querySelector('#content');
    let menu = document.querySelector('#menu');
    let ul = document.createElement('ul')
    ul.setAttribute('id', 'list')
    menu.appendChild(ul)
    function listEl() {
        var array = ['Elixir of the youth', 'Lilith of the Fox hill', 'Pork belly', 'Cinammon chicken', 'Beef Buns', 'Ramen'];

        for (let i = 0; i < array.length; i++) {
            var text = array[i];
            var list = document.getElementById('list');
            var listItem = document.createElement("li");
            listItem.innerHTML = text;
            list.appendChild(listItem);
        }
    }
    listEl()


    ////////////////////////////////////////// working time
    let workingTime = document.createElement('ul');
    workingTime.setAttribute('id', 'workTime')
    menu.appendChild(workingTime)
    function workEl() {
        var array = [' Mo - 08:00 - 16-00', ' Tu - 08:00 - 16-00', ' Wed 08:00 - 16-00', ' Thr - 08:00 - 16-00', ' Fri - 08:00 - 16-00', ' Sat - 08:00 - 16-00', ' Sun - 08:00 - 16-00'];

        for (let i = 0; i < array.length; i++) {
            var text = array[i];
            var list = document.getElementById('workTime');
            var listItem = document.createElement("li");
            listItem.innerHTML = text;
            list.appendChild(listItem);
        }
    }
    workEl()
}

export default Menu