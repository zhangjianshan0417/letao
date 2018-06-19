
//渲染以及分页的操作
$(function () {
  var currentPage = 1;
  var pageSize = 5;
  render();
  function render() {

    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function (info) {
        console.log(info);
        var html = template("tml", info);
        $("tbody").html(html);
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: currentPage,
          totalPages: Math.ceil(info.total / pageSize),
          onPageClicked: function (a, b, c, p) {
            currentPage = p;
            render();
          },
        });

      }
    })
  }
  $("tbody").on("click", ".btn", function () {

    $("#showModal").modal("show");
    var id = $(this).parent().data("id");
    var isDelete = $(this).hasClass("btn-success") ? 1 : 0;
    $(".queding").on("click",function(){
      // console.log(1111)
      $.ajax({
        type:"post",
        url:"/user/updateUser",

        data:{
          id:id,
          isDelete:isDelete
        },
        success:function(info){
          $("#showModal").modal("hide");
          render();
        }
      })
    })

  })



})



//点击禁用按钮的开始
