const containers = Array.from(document.querySelectorAll('.cards__ellipsis-wrapper'));

containers.forEach((container) => {
  const paragraph = container.querySelector('.cards__description');
  const wrapperHeight = container.clientHeight;

  while (paragraph.offsetHeight > wrapperHeight) {
    paragraph.textContent = paragraph.textContent.replace(/\W*\s(\S)*$/, '...');
  }
});
