
const About = () => {
    let content = document.querySelector('#content')
    let about = document.querySelector('#about');

    let text = document.createElement('p');
    text.setAttribute('id', 'text');
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et magna erat. Fusce elementum nulla congue tellus finibus tincidunt. Vestibulum id felis nec lectus viverra vehicula. Quisque lobortis felis sed eros elementum congue. Sed in interdum justo. Nullam malesuada quam eget enim ultrices placerat. Suspendisse eu porttitor erat. Maecenas suscipit ligula ornare, pharetra nisl sit amet, gravida massa. Aenean ac mi vitae arcu tempus convallis vel id erat. Pellentesque at efficitur quam. Phasellus feugiat lorem sed odio rhoncus, vel gravida lectus varius.Pellentesque iaculis eget odio nec blandit.Aliquam enim risus, malesuada sed rhoncus at, vestibulum volutpat massa.Pellentesque convallis metus sit amet mi interdum condimentum.Morbi auctor nunc metus, nec pulvinar neque scelerisque sed.Morbi vel molestie libero, sed sollicitudin risus.Donec ut posuere justo.Proin posuere purus id pharetra blandit.Fusce non varius quam.Nunc at sapien quis sem interdum mollis.Sed mi neque, dignissim sed magna non, porttitor blandit velit.Nam varius augue euismod, dictum enim eget, ultrices ligula. Suspendisse potenti.In dignissim turpis non posuere euismod.Nulla facilisi.Nunc venenatis facilisis augue.In a quam commodo nulla pellentesque ultricies at nec sem.Sed et pharetra nibh.Nunc mi urna, fermentum in velit a, sollicitudin imperdiet purus.Vestibulum odio ante, vulputate vitae eros vitae, aliquet dignissim erat.Integer interdum consequat augue ac facilisis.Sed nec convallis nulla.Suspendisse sed efficitur nunc, sed facilisis eros. Nunc dui leo, rhoncus quis sapien quis, feugiat mattis mauris.Morbi pulvinar luctus quam, id venenatis turpis lobortis ac.Curabitur sollicitudin volutpat quam sit amet semper.In aliquam efficitur volutpat.Aliquam mollis, leo at ornare pretium, nunc metus vestibulum purus, nec hendrerit dolor ante ac mi.Nulla facilisi.Nunc vitae dolor imperdiet, consequat quam et, mattis ligula.Nulla vel volutpat nisi.Vivamus tempus neque vel velit sagittis cursus.Vivamus ornare ornare magna, at dapibus quam sollicitudin in.Morbi venenatis massa libero, nec luctus arcu luctus eget.Mauris ultricies arcu non purus rhoncus, a convallis erat tempor.Pellentesque dictum, erat eu pharetra ultrices, neque tellus lobortis ex, id sagittis eros lacus sed purus.Quisque in euismod leo.Aenean at quam sit amet quam pharetra feugiat"
    console.log(text);
    about.appendChild(text);
}

export default About