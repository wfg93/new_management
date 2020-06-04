<template>
  <div class="nav">
      <div class="navgat">
         
         <div class="navgtion">
             <img src="../../static/img/maijilogo.jpg" alt="">
         </div>
         <div class="na_igton">
             麦吉减肥法
         </div>

      </div>
<div class="navgat">

<div class="navgtion_a">
<i class="ka_lio el-icon-message-solid"></i>
</div>
<div class="na_igton_b">
昵称 <i class="tubiao el-icon-user"></i>
</div>

</div>

  </div>
</template>

<script>
export default {
    name:"navigation",
    data(){
        return{

        }
    }

}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 66px;
    background: #ffffff;
    position: fixed;
    display: flex;
    justify-content: space-between;
}
.navgat{
    width: 230px;
    height: 100%;
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
}
.navgat:nth-child(2){
    width: 180px;
}
.navgtion{
width: 80px;
height: 67px;
}
img{
    width: 100%;
    height: 100%;
}
.na_igton{
width: 115px;
height: 60%;
margin-top: 12px;
line-height: 39px;
font-size: 21px;
font-weight: 600;
color: #333333;
/* font-family: Micr; */
}
.navgtion_a{
width: 50px;
height: 50px;
margin-top: 8px;
}
.ka_lio{
font-size: 27px;
margin: 10px;
color: #333333;
}
.na_igton_b{
width: 80px;
height: 50px;
margin-top: 8px;
line-height: 47px;
color: #AAAAAA;
}
.tubiao{
    margin-left: 15px;
}
</style>