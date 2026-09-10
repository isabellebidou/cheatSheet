document.addEventListener("click", async (e) => {
  const code = e.target.closest("code")

  if (!code) return

  await navigator.clipboard.writeText(code.textContent)

  const original = code.textContent
  code.textContent = "Copied!"

  setTimeout(() => {
    code.textContent = original
  }, 1000)
})
document.addEventListener("DOMContentLoaded", () => {
  const q = document.querySelector("#search")
  if (q) {
    q.addEventListener("input", () => {
      const term = q.value.toLowerCase().trim()
      document.querySelectorAll(".topic").forEach((t) => {
        t.classList.toggle(
          "hidden",
          term && !t.innerText.toLowerCase().includes(term),
        )
      })
    })
  }
})
