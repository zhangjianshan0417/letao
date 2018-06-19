//进度条功能
//禁用进度环
NProgress.configure({ showSpinner: false });

//注册一个全局的ajaxStart事件，所有的ajax在开启的时候，会触发这个事件
$(document).ajaxStart(function () {
  //开启进度条
  NProgress.start();
});

$(document).ajaxStop(function () {
  //完成进度条
  setTimeout(function () {
    NProgress.done();
  }, 500);
});


//非登陆页面，判断当前用户是否是登录了，如果登录了，就继续，如果没登陆，需要跳转到登录页面。
if (location.href.indexOf("login.html") == -1) {
  $.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    success: function (data) {
      if (data.error === 400) {
        //说明用户没有登录，跳转到登录页面
        location.href = "login.html";
      }
    }
  })
}

// 点击图标让左右显示影藏。通过切换类名
$(function () {
  $(".btn_confine").on("click", function () {
    // console.log(111);
    $(".lt_aside").stop().toggleClass("current");
    $(".lt_right").toggleClass("ml_left");
  })
  $(".slide").on("click", function () {
    // console.log(111);
    $(".feilei").slideToggle();
  })



  // 模态框的显示与影藏
  $(".btn_logout").on("click", function () {
    $("#logoutModal").modal("show");
  })
  //点击退出影藏模态框，跳转到登录页面
  $(".btn_tuichu").on("click", function () {
    $("#logoutModal").modal("hide");
    $.ajax({
      type: "get",
      url: "/employee/employeeLogout",
      success: function (info) {
        console.log(info);
        if (info.success) {
          location.href = "login.html";
        }
      }
    })

  })



})



