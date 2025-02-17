<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <h2>Login</h2>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username"> <i class="fas fa-user"></i> Username </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Username"
          />
        </div>
        <div class="input-group">
          <label for="password"> <i class="fas fa-lock"></i> Password </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch(
          "http://192.168.55.49:8080/api/auth/admin/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("Login successful");
          // Lưu token hoặc chuyển hướng
          localStorage.setItem("token", data.accessToken);
          this.$router.push("/");
        } else {
          alert(data.message || "Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      }
    },
  },
};
</script>

  
  <style scoped>
.login-page {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.login-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
}

.sidebar {
  flex: 1;
  background-color: #3ea9e0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sidebar img {
  width: 100px;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.info {
  background-color: #e8f0fe;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}

/* Form đăng nhập */
.login-form {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #3ea9e0;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #3ea9e0;
}

/* Footer */
.login-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
}

.forgot-password {
  color: #3ea9e0;
  text-decoration: none;
  font-weight: bold;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
  