// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".change-eat").on("click", function(event) {
    const id = $(this).data("id");
    const newEat = $(this).data("newEat");

    const newEatState = {
      devoured: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#bu").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
