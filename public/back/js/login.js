$(function () {
  $("form").bootstrapValidator({
    fields:{
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          stringLength:{
            message:"用户名不能为空"
            min:3
            max:9
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "用户名不能为空"
            }
          }
        }
      }
     
    }
  })
})