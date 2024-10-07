function setupHeadingAnchors(container: Document) {
  const headings = Array.from(container.querySelectorAll('h2, h3, h4, h5, h6'))
  for (const heading of headings) {
    heading.classList.add('group')
    const link = document.createElement('a')
    link.innerText = '#'
    link.className =
      'heading-link hidden group-hover:inline-block ml-3 no-underline'
    link.href = '#' + heading.id
    link.ariaHidden = 'true'
    heading.appendChild(link)
  }
}

document.addEventListener('astro:page-load', () => {
  setupHeadingAnchors(document)
})
