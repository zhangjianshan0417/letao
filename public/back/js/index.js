// 点击图标让左右显示影藏。通过切换类名
$(function(){
  $(".btn_confine").on("click",function(){
    // console.log(111);
    $(".lt_aside").stop().toggleClass("current");
    $(".lt_right").toggleClass("ml_left");
  })
$(".slide").on("click",function(){
  // console.log(111);
  $(".feilei").slideToggle();
})



// 模态框的显示与影藏
  $(".btn_logout").on("click",function(){
    $("#logoutModal").modal("show");
  })
//点击退出影藏模态框，跳转到登录页面
  $(".btn_tuichu").on("click",function(){
    $("#logoutModal").modal("hide");
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      success:function(info){
        console.log(info);
        if(info.success){
          location.href = "login.html";
        }
      }
    })
   
  })



})