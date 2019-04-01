<template>
  <div class="AdminLogin" :style="{width:width+'px',height:height+'px'}">
    <div class="content">
      <h3>校园零食商城</h3>
      <P>后台管理系统</P>

        <el-input v-model="input" ref="account" type="text" placeholder="账号" >

        </el-input>

        <el-input v-model="input11" ref="pwd" type="password" placeholder="密码" show-password>
        </el-input>

      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getClientSize } from "../../util/util";

export default {
  name: "AdminLogin",
  computed: {
    width() {
      return getClientSize().width;
    },
    height() {
      return getClientSize().height;
    }
  },
  data() {
    return {
      input:'',
      input11:''
    };
  },
  methods: {
    ...mapMutations({
      setAdminName: "SET_ADMIN_NAME",
      setAdminToken: "SET_ADMIN_TOKEN"
    }),
    login() {
      const account = this.$refs.account.value;
      const pwd = this.$refs.pwd.value;
      this.axios.post("http://localhost:8083/login",{
        account:account,
        pwd:pwd
      })
        .then(respose => {
         console.log(respose.data);
         if(respose.data.data==0)
         {
           this.$router.push({path:"/backstage"})
           console.log('ok')
         }
         else{
           alert('账号密码错误，登录失败')
         }

      });

      // const res = login({
      //   name:account,
      //   pwd:pwd
      // });
      // res.then((data)=>{
      //     this.setAdminName(data.name);
      //     this.setAdminToken(data.token);
      //     this.$router.push('/backstage');
      //   })
      //   .catch((e)=>{
      //     alert('登录失败')
      //   })
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/var.less";

.AdminLogin {
  background-color: #2d3a4b;
  position: relative;
  .content {
    width: 300px;
    height: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -180px;
    margin-left: -150px;
    text-align: center;
    overflow: hidden;
    h3 {
      font-size: 26px;
      font-weight: 400;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    p {
      margin-top: 20px;
      color: @fontDefaultColor;
      margin-bottom: 20px;
    }
    input {
      background: transparent;
      border: 1px solid #eee;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eee;
      height: 47px;
      width: 80%;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
    button {
      width: 90%;
      background: @secondColor;
      box-shadow: none;
      border: 0;
      border-radius: 3px;
      line-height: 41px;
      color: #fff;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}
</style>
