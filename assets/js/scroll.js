$('a[href^="#"]').on("click", function (e) {
  e.preventDefault()

  const targetEle = this.hash
  const $targetEle = $(targetEle)

  $("div.column.is-four-fifths.scroll").stop().animate(
    {
      scrollTop: $targetEle.offset().top,
    },
    700,
    "swing"
  )
})
