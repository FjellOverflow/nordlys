function setupHeadingAnchors(container: Document) {
  const headings = Array.from(container.querySelectorAll('h2, h3, h4, h5, h6'))
  for (const heading of headings) {
    heading.className += ' group relative max-w-fit underline-offset-4'

    const link = container.createElement('a')
    link.innerText = '#'
    link.className =
      'w-[110%] heading-anchor no-underline absolute hidden group-hover:block -left-8'
    link.href = '#' + heading.id
    link.ariaHidden = 'true'
    heading.prepend(link)
  }
}

document.addEventListener('astro:page-load', () => {
  setupHeadingAnchors(document)
})
