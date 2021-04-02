$('a[href^="#"]').on("click", function(e) {
  e.preventDefault()

  const targetEle = this.hash
  const $targetEle = $(targetEle)

  $("div.column.independent-scroll").stop().animate(
    {
      scrollTop: $targetEle.offset().top,
    },
    500,
    "swing"
  )
})
