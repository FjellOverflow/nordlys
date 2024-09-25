function setupCopyOnClickHandlers(container: Document) {
  container.querySelectorAll('.astro-code-header .copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.parentNode?.parentNode?.querySelector('.astro-code code')

      await navigator.clipboard.writeText((code as HTMLElement).innerText)

      btn.className = 'copy-success'

      setTimeout(() => {
        btn.className = 'copy-btn'
      }, 1000)
    })
  })
}

document.addEventListener('astro:page-load', () => {
  setupCopyOnClickHandlers(document)
})
