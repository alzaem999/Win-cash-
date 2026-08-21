const fs = require('fs');
const path = './users.json';

// إنشاء الملف إذا لم يكن موجوداً
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify([]));
}

// قراءة بيانات المستخدمين
const getUsers = () => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

// حفظ المستخدمين
const saveUsers = (users) => {
  fs.writeFileSync(path, JSON.stringify(users, null, 2));
};

module.exports = { getUsers, saveUsers };
