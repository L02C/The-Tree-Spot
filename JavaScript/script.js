const interactions = document.querySelectorAll('.blog-interaction');

interactions.forEach(touchstart => {
  interaction.addEventListener('click', function handleClick(event) {
    console.log('interaction clicked', event);
    interaction.classList.toggle("blog-interaction-mobile");
  });
});

document.addEventListener("touchstart", function remove(event){
  interactions.forEach(interaction => {
    interaction.classList.remove("blog-interaction-mobile");
  })
})
