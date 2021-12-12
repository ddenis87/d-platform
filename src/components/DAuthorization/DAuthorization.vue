<script>
import DBtnForm from '../DBtn/DBtnForm.vue';

export default {
  components: { DBtnForm },
  name: 'DAuthorization',
  props: {
    dispatchFunction: { type: String, default: 'login/authorization' },
    pathAfterAuthorization: { type: String, default: '/' },
    title: { type: String, default: '' },
  },
  data() {
    return {
      error: false,
      loading: false,
      passwordShow: false,
      rules: {
        required: (value) => !!value || 'Обязательное поле',
      },
      userName: '',
      userPassword: '',
    };
  },
  computed: {
    formTitle() {
      if (this.title) return `${this.title} - Авторизация`;
      return 'Авторизация';
    },
  },
  methods: {
    async login() {
      if (!this.$refs.FormAuthorization.validate()) return;
      this.loading = true;
      const auth = await this.$store.dispatch('authorization/authorization', {
        userName: this.userName,
        userPassword: this.userPassword,
      });
      if (auth) {
        if (this.$router) {
          this.$router.push(this.pathAfterAuthorization);
        } else {
          window.location.href = this.pathAfterAuthorization;
        }
      } else {
        this.error = true;
        this.$refs.FormAuthorization.reset();
        setTimeout(() => { this.error = false; }, 3000);
      }
      this.loading = false;
    },
  },
};
</script>

<template>
  <div class="d-authorization">
    <v-card :loading="loading"
            max-width="400"
            min-width="300"
            tile>
      <v-toolbar color="primary"
                 dark
                 dense>{{ formTitle }}</v-toolbar>
      <v-card-text>
        <v-form ref="FormAuthorization">
          <v-text-field v-model="userName"
                        hide-details
                        label="Логин"
                        :rules="[rules.required]"></v-text-field>
          <v-text-field v-model="userPassword"
                        hide-details
                        label="Пароль"
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]"
                        :type="passwordShow ? 'text' : 'password'"
                        @click:append="passwordShow = !passwordShow"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="actions">
        <span v-show="error"
              class="message_error">Предоставлены неверные данные</span>
        <v-spacer></v-spacer>
        <d-btn-form height="28"
                    width="120"
                    @click="login">Войти</d-btn-form>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.d-authorization {
  max-width: 400px;
  width: 400px;
  .actions {
    padding: 0 16px;
    padding-bottom: 10px;
    height: 52px;
  }
  .message {
    &_error {
      font-size: 0.8rem;
      color: red;
    }
  }
}
</style>
