// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  // Update whether the burger has been eaten or not
  $(".change-eat").on("click", function () {
    const id = $(this).data("id");
    const newEat = $(this).data("newEat");

    // Get whether or not the burger selected is true or false and
    // set it equal to newEatState
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

  // Adding a new burger
  $(".create-form").on("submit", event => {
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
