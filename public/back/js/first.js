

$(function () {
  var currentPage = 1;
  var pageSize = 5;

  function render() {
    //发送ajax请求，获取数据
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function (info) {
        console.log(info);

        $("tbody").html(template("tml1", info));

        //渲染分页
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: currentPage,
          totalPages: Math.ceil(info.total / pageSize),
          onPageClicked: function (a, b, c, page) {
            currentPage = page;
            render();
          }
        });

      }
    });
  }
  render();
  //表单校验功能
  //表单校验功能





  $(".btn_add").on("click", function () {

    $("#addModal").modal("show");

  });


  //表单校验功能
  var $form = $("#form");
  $form.bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
      categoryName: {

        validators: {
          notEmpty: {
            message: "请输入一级分类的名称"
          }
        }

      }
    }
  });




  $form.on("success.form.bv", function (e) {

   

    e.preventDefault();
    console.log("呵呵");
    $.ajax({
      type: "post",
      url: "/category/addTopCategory",
      data: $form.serialize(),
      success: function (info) {
        console.log(info);
        if (info.success) {

          $("#addModal").modal("hide");

          currentPage = 1;
          render();


          $form.data("bootstrapValidator").resetForm();
          $form[0].reset();

        }
      }
    });
  });

})