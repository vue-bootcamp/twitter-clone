<template>
  <div class="register_modal">
    <div class="overlay" @click="$emit('hide-event')"></div>
    <div class="content">
      <svg viewBox="0 0 24 24">
        <g>
          <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          ></path>
        </g>
      </svg>
      <h3>Hesabını oluştur</h3>

      <div class="register_form">
        <input
          v-model="userData.username"
          class="mb-20"
          type="text"
          placeholder="Kullanıcı adı"
        />
        <input
          v-model="userData.full_name"
          class="mb-20"
          type="text"
          placeholder="İsim"
        />
        <input
          v-model="userData.email"
          class="mb-20"
          type="email"
          placeholder="E-posta"
        />
        <input
          v-model="userData.password"
          class="mb-20"
          type="password"
          placeholder="Şifre"
        />
        <div
          class="d-flex justify-content-start align-items-center birthday_container"
        >
          <select v-model="userData.birthday.day">
            <option disabled selected>Gün</option>
            <option v-for="day in 31" :value="day" :key="day">
              {{ day }}
            </option>
          </select>
          <select v-model="userData.birthday.month">
            <option disabled selected>Ay</option>
            <option v-for="month in months" :key="month.id" :value="month.id"
              >{{ month.label }}
            </option>
          </select>
          <select v-model="userData.birthday.year">
            <option disabled selected>Yıl</option>
            <option
              v-for="year in 81"
              :key="year"
              :value="currentYear - year"
              >{{ currentYear - year }}</option
            >
          </select>
        </div>

        <div class="user_aggreement">
          <span>
            Kaydolduğunda Hizmet Şartları'nı ve Çerez Kullanımı dahil olmak
            üzere Gizlilik Politikası'nı kabul etmiş olursun. Gizlilik
            Seçeneklerini buna göre belirlediğinde başkaları seni e-postan veya
            telefon numaranla bulabilir.
          </span>
          <div class="aggreement_container">
            <input v-model="aggrement" type="checkbox" id="aggree" />
            <label for="aggree">Kabul Ediyorum</label>
          </div>
        </div>
        <button @click="onSave" :disabled="!invalid" class="w-100 mt-20">
          Kaydol
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { appAuthAxios } from "@/utils/appAxioses";
export default {
  data() {
    return {
      months: [
        { id: "01", label: "Ocak" },
        { id: "02", label: "Şubat" },
        { id: "03", label: "Mart" },
        { id: "04", label: "Nisan" },
        { id: "05", label: "Mayıs" },
        { id: "06", label: "Haziran" },
        { id: "07", label: "Temmuz" },
        { id: "08", label: "Ağustos" },
        { id: "09", label: "Eylül" },
        { id: "10", label: "Ekim" },
        { id: "11", label: "Kasım" },
        { id: "12", label: "Aralık" },
      ],
      userData: {
        full_name: null,
        username: null,
        email: null,
        birthday: {
          day: null,
          month: null,
          year: null,
        },
        password: null,
      },
      aggrement: false,
    };
  },
  methods: {
    onSave() {
      let userData = JSON.parse(JSON.stringify(this.userData));

      userData = {
        ...this.userData,
        birthday: `${userData.birthday.year}-${userData.birthday.month}-${userData.birthday.day}`,
      };

      appAuthAxios.post("/user", userData).then((new_user_response) => {
        if (new_user_response?.status === 201) {
          this.$emit("hide-event");
        }
      });
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    invalid() {
      return this.aggrement;
    },
  },
};
</script>
