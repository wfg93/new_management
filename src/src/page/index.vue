<template>
  <div class="bo_dey">
    <div class="aa">
      <div class="bb">
        <div class="ddd">
          麦吉答题管理-登录
        </div>
      </div>

      <div class="bb">
        账号：
        <div class="ccc"><el-input v-model="aa_input.name"></el-input></div>
      </div>
      <div class="bb">
        密码：
        <div class="ccc">
          <el-input v-model="aa_input.pwd" show-password></el-input>
        </div>
      </div>

      <div class="bb">
        <el-button type="primary" @click="kakak()">登录</el-button>
      </div>
    </div>

    <div class="ee">
      <img
        src="../../static/img/maijiCat.png"
        alt=""
        style="width:100%;height:100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa_input: {
        name: "",
        pwd: null
      }
    };
  },
  mounted(){ },
  methods: {


    kakak() {
      if (this.aa_input.name == "maiji001" && this.aa_input.pwd == 123456) {
        this.$router.push({ path: "./Answer" });
      } else {
        this.$confirm("账号密码不对")
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
};
</script>

<style scoped>
.bo_dey {
  background-image: url("../../static/img/123.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.aa {
  width: 400px;
  height: 400px;
  border: solid 1px #b3b3b3;
  margin: 0 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-line-pack: distribute;
  align-content: space-around;
  background: #fffcfc;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 24%;
}
.bb {
  width: 90%;
  height: 56px;
  margin: 27px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  line-height: 56px;
  font-family: cursive;
  font-size: 20px;
}
.ccc {
  width: 80%;
}
.el-button {
  margin: auto;
}
.ddd {
  width: 100%;
  text-align: center;
  font-family: fantasy;
  font-weight: 600;
  font-size: 25px;
}
.ee {
  width: 300px;
  height: 400px;
  position: absolute;
  left: 20%;
  top: 25%;
}
</style>
