<template>
  <div class="container">
    <div class="header">
      <span>General Information</span>
      <label class="toggle">
        Edit
        <input type="checkbox" v-model="isEditable" class="switch" />
        <span class="slider"></span>
      </label>
    </div>

    <div class="row">
      <div>
        <label>Organization Name*</label>
        <input type="text" v-model="form.organization" :disabled="!isEditable" />
      </div>
      <div>
        <label>Number of Employees</label>
        <input type="number" v-model="form.employees" :disabled="!isEditable" />
      </div>
    </div>

    <div class="row">
      <div>
        <label>Registration Number</label>
        <input type="text" v-model="form.registrationNumber" :disabled="!isEditable" />
      </div>
      <div>
        <label>Tax ID</label>
        <input type="text" v-model="form.taxId" :disabled="!isEditable" />
      </div>
    </div>

    <div class="row">
      <div>
        <label>Phone</label>
        <input type="text" v-model="form.phone" :disabled="!isEditable" />
      </div>
      <div>
        <label>Fax</label>
        <input type="text" v-model="form.fax" :disabled="!isEditable" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="form.email" :disabled="!isEditable" />
      </div>
    </div>

    <div class="row">
      <div>
        <label>Address Street 1</label>
        <input type="text" v-model="form.address1" :disabled="!isEditable" />
      </div>
      <div>
        <label>Address Street 2</label>
        <input type="text" v-model="form.address2" :disabled="!isEditable" />
      </div>
      <div>
        <label>City</label>
        <input type="text" v-model="form.city" :disabled="!isEditable" />
      </div>
    </div>

    <div class="row">
      <div>
        <label>State/Province</label>
        <input type="text" v-model="form.state" :disabled="!isEditable" />
      </div>
      <div>
        <label>Zip/Postal Code</label>
        <input type="text" v-model="form.zip" :disabled="!isEditable" />
      </div>
      <div>
        <label>Country</label>
        <select v-model="form.country" :disabled="!isEditable">
          <option>United States</option>
          <option>Canada</option>
          <option>United Kingdom</option>
        </select>
      </div>
    </div>

    <div>
      <label>Notes</label>
      <textarea v-model="form.notes" :disabled="!isEditable"></textarea>
    </div>

    <button class="save-btn" @click="saveData">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: false,
      form: {
        organization: "OrangeHRM",
        employees: 99,
        registrationNumber: "1234",
        taxId: "5678",
        phone: "0123456789",
        fax: "9101",
        email: "info@orangehrm.com",
        address1: "538 Teal Plaza",
        address2: "Mysore",
        city: "Secaucus",
        state: "NJ",
        zip: "51217",
        country: "United States",
        notes: "HRM Software",
      },
    };
  },
  methods: {
    saveData() {
      alert("Data saved!");
    },
  },
};
</script>

<style scoped>
.container {
  font-family: sans-serif;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  margin: auto;
}
label {
  margin: 5px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 15px;
}
.toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.switch {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.slider:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: 0.3s;
}

.switch:checked + .slider {
  background: #8cc63f;
}

.switch:checked + .slider:before {
  transform: translateX(20px);
}
input,
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.row {
  display: flex;
  gap: 10px;
}

.row > div {
  flex: 1;
}

.save-btn {
  background-color: #8cc63f;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
}

.save-btn:hover {
  background: #88c057;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
}
</style>
