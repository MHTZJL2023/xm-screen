<template>
  <div class="login-container">
    <!-- <div class="header">
      产线数字孪生及功效数字化管理系统
    </div> -->
    <div class="content">
      <div class="title">用户登录 USER LOGIN</div>
      <a-form
        ref="formRef"
        :model="formState"
        class="my-form"
        :rules="rules"
        style="margin: 41px 75px 0 75px"
        @finish="onFinish">
        <a-form-item name="username">
          <a-input
            v-model:value="formState.username"
            size="large"
            autocomplete="on">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            size="large"
            autocomplete="on">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <!-- <a-form-item name="headers">
          <VerifycodeInput v-model:value="formState.headers" />
        </a-form-item> -->
        <div style="display: flex; width: 100%; margin-top: -10px">
          <a-checkbox>记住密码</a-checkbox>
          <span style="color: #30bbff; font-size: 14px; margin-left: 222px">
            忘记密码?
          </span>
        </div>

        <a-button
          block
          :loading="loading"
          class="btn"
          type="primary"
          size="large"
          html-type="submit">
          登录
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from '@/hooks';

const router = useRouter();
const { formRef, formState } = useForm();

const rules = {
  username: [{ required: true, message: '请输入用户名!' }],
  password: [{ required: true, message: '请输入密码!' }],
};

/* 登录 */
const loading = ref(false);
const onFinish = async () => {
  try {
    // const { headers, ...data } = values;
    // if (isEmpty(headers) || isEmpty(headers['captcha-code']) || isEmpty(headers['captcha-key'])) throw new Error("请输入验证码！");
    loading.value = true;

    // const hashPassword = md5(data.password);
    // await userStore.login(headers, { ...data, password: hashPassword });
    message.success('登录成功！');
    window.ue5('Web_登录成功');
    router.push('/safeProduction');
  } catch (error: any) {
    error && error.message
      ? message.error(error.message || '登录失败！')
      : null;
  } finally {
    formState.value.headers = {};
    loading.value = false;
  }
};
</script>

<style lang="less" scoped>
.login-container {
  // position: relative;
  height: 100%;
  width: 100%;
  background-image: url('@/assets/images/inlet_bg.png');

  .header {
    position: absolute;
    top: 215px;
    left: 706px;
    width: 100%;
    z-index: 2;

    .logo {
      width: 50px;
      height: 50px;
      padding: 8px;
      margin-top: 4px;
    }

    .title {
      font-size: 20px;
      color: #666;
    }
  }

  .content {
    position: absolute;
    top: 290px;
    left: 695px;
    background-image: url('@/assets/images/login/img_login_frame.png');
    background-size: 100% 100%;
    width: 530px;
    height: 600px;

    .title {
      font-size: 24px;
      color: #2fbbff;
      line-height: 24px;
      margin-top: 81px;
      margin-left: 45px;
    }
  }

  .footer {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 42px;
    color: #acacac;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    bottom: 0;
    box-shadow: 10px 10px grey;
  }

  .bg {
    position: absolute;
    left: 0;
    height: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    background-size: cover;

    &.active {
      opacity: 1;
    }
  }

  .btn {
    width: 380px;
    height: 50px;
    background-color: #0096dc;
    color: #d8ecff;
    font-size: 20px;
    font-weight: 400;
    margin-top: 52px;
  }
}

:deep(.ant-form-item-control-input-content) {
  box-shadow: 0px 0px 0px 0px #06f8f9;
  border-radius: 4px;
  border: 1px solid #00c6ff;
  background-color: #073e65;
  // opacity: 0.5;
}

:deep(.ant-input-prefix) {
  color: #00c6ff;
}

:deep(.ant-checkbox-wrapper) {
  color: #00c6ff;
  font-size: 14px;
}

:deep(.ant-input-lg) {
  // background: bottom ;
}

:deep(.ant-input-affix-wrapper-lg) {
  // background: bottom;
}
</style>
