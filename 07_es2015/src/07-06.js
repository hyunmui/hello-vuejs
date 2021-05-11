function addContact({ name, phone, email = 'none', age = 0 }) {
  console.log('이름: ' + name);
  console.log('전번: ' + phone);
  console.log('이메일: ' + email);
  console.log('나이:' + age);
}

addContact({ name: '이몽룡', phone: '010-222-3331' });
