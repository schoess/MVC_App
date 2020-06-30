  
$(function () {
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
      let newBurger = { name: $("#newBurger").val().trim() };
      if (newBurger.name === "") { newBurger.name = "(the burger with no name)" }
  
      $.ajax("/api/add-burger", {
        type: "POST",
        data: newBurger
      }).then(
        location.reload()
      );
    });
  
    $(".eat").on("click", function (event) {
      event.preventDefault();
      let burger_id = this.id;
      let eaten = { id: burger_id };
      $.ajax("/api/eat-burger", {
        type: "PUT",
        data: eaten,
      })
        .then(
        location.reload()
        );
    });
  });