$(document).ready(function () {
    listing();
});

function listing() {
  $.ajax({
    type: "GET",
    url: "/movie",
    data: {},
    success: function (response) {
      let rows = response["movies"];
      for (let i = 0; i < rows.length; i++) {
        let image = rows[i]["image"];
        let title = rows[i]["title"];
        let description = rows[i]["description"];
        let star = rows[i]["star"];
        let comment = rows[i]["comment"];
        let star_image = "⭐".repeat(star);
        let temp_html = `
      <div class="col">
          <div class="card h-100">
              <img src="${image}"
                  class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <p>${star_image}</p>
                  <p class="mycomment">${comment}</p>
              </div>
          </div>  
                  `;
        $("#cards-box").append(temp_html);
      }
    },
  });
}

function posting() {
  let url = $("#url").val();
  let star = $("#star").val();
  let comment = $("#comment").val();
  $.ajax({
    type: "POST",
    url: "/movie",
    data: {
      url_give: url,
      star_give: star,
      comment_give: comment,
    },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}

function open_box() {
  $("#post-box").show();
}
function close_box() {
  $("#post-box").hide();
}