# مستندات API پروژه مدوگرام

این مستند شامل تمام آدرس‌های API که در پروژه مدوگرام استفاده می‌شود و مشخصات کاملی از هر endpoint ارائه می‌دهد.

## 📋 فهرست مطالب
- [احراز هویت (Authentication)](#احراز-هویت-authentication)
- [مدیریت کاربران (User Management)](#مدیریت-کاربران-user-management)
- [ویزیت‌ها (Visits)](#ویزیتها-visits)
- [پیش‌بینی‌ها (Predictions)](#پیشبینیها-predictions)
- [پرداخت‌ها (Payments)](#پرداختها-payments)
- [وبلاگ (Blog)](#وبلاگ-blog)
- [چت (Chat)](#چت-chat)
- [دانلود فایل‌ها](#دانلود-فایلها)

---

## 🔐 احراز هویت (Authentication)

### 1. ثبت‌نام کاربر
**آدرس:** `https://api.medogram.ir/api/register/`  
**روش:** `POST`  
**توضیح:** ارسال کد تأیید به شماره موبایل کاربر

**پارامترهای ورودی:**
```json
{
  "phone_number": "string (required) - شماره موبایل کاربر"
}
```

**پاسخ موفق:**
```json
{
  "message": "کد تأیید با موفقیت ارسال شد",
  "status": "success"
}
```

### 2. تأیید کد احراز هویت
**آدرس:** `https://api.medogram.ir/api/verify/`  
**روش:** `POST`  
**توضیح:** تأیید کد دریافتی و دریافت توکن دسترسی

**پارامترهای ورودی:**
```json
{
  "code": "string (required) - کد تأیید دریافتی",
  "phone_number": "string (required) - شماره موبایل کاربر"
}
```

**پاسخ موفق:**
```json
{
  "access": "string - توکن دسترسی",
  "refresh": "string - توکن تجدید",
  "user": {
    "id": "integer",
    "phone_number": "string"
  }
}
```

---

## 👤 مدیریت کاربران (User Management)

### 3. دریافت اطلاعات کاربری
**آدرس:** `https://api.medogram.ir/api/username/`  
**روش:** `GET`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** دریافت اطلاعات نام کاربری

**هدرهای مورد نیاز:**
```
Authorization: Bearer {token}
```

**پاسخ موفق:**
```json
{
  "username": "string",
  "first_name": "string",
  "last_name": "string"
}
```

### 4. به‌روزرسانی نام کاربری
**آدرس:** `https://api.medogram.ir/api/username/update/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** به‌روزرسانی اطلاعات نام کاربری

**پارامترهای ورودی:**
```json
{
  "first_name": "string (optional) - نام",
  "last_name": "string (optional) - نام خانوادگی",
  "username": "string (optional) - نام کاربری"
}
```

### 5. دریافت پروفایل کاربر
**آدرس:** `https://api.medogram.ir/api/profile/`  
**روش:** `GET`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** دریافت اطلاعات کامل پروفایل کاربر

### 6. به‌روزرسانی پروفایل کاربر
**آدرس:** `https://api.medogram.ir/api/profile/update/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** به‌روزرسانی اطلاعات پروفایل کاربر

**پارامترهای ورودی:**
```json
{
  "first_name": "string (optional)",
  "last_name": "string (optional)",
  "email": "string (optional)",
  "date_of_birth": "string (optional) - تاریخ تولد",
  "gender": "string (optional) - جنسیت"
}
```

### 7. دریافت اطلاعات باکس کاربر
**آدرس:** `https://api.medogram.ir/api/box`  
**روش:** `GET`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** دریافت اطلاعات باکس یا داشبورد کاربر

---

## 🏥 ویزیت‌ها (Visits)

### 8. ثبت ویزیت جدید
**آدرس:** `https://api.medogram.ir/api/visit/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** ثبت درخواست ویزیت جدید

**پارامترهای ورودی:**
```json
{
  "name": "string (required) - نام بیمار",
  "national_code": "string (required) - کد ملی 10 رقمی",
  "insurance_type": "string (required) - نوع بیمه",
  "urgency": "string (required) - سطح اورژانسی",
  "general_symptoms": "string (required) - علائم عمومی",
  "neurological_symptoms": "string (optional) - علائم عصبی",
  "cardiovascular_symptoms": "string (optional) - علائم قلبی عروقی",
  "gastrointestinal_symptoms": "string (optional) - علائم گوارشی",
  "respiratory_symptoms": "string (optional) - علائم تنفسی",
  "description": "string (optional) - توضیحات اضافی"
}
```

**پاسخ موفق:**
```json
{
  "id": "integer - شناسه ویزیت",
  "name": "string",
  "status": "string",
  "created_at": "datetime"
}
```

### 9. دریافت لیست ویزیت‌های کاربر
**آدرس:** `https://api.medogram.ir/api/visit`  
**روش:** `GET`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** دریافت لیست تمام ویزیت‌های کاربر

**پاسخ موفق:**
```json
[
  {
    "id": "integer",
    "name": "string",
    "status": "string",
    "created_at": "datetime",
    "urgency": "string",
    "description": "string"
  }
]
```

---

## 🤖 پیش‌بینی‌ها (Predictions)

### 10. پیش‌بینی دیابت
**آدرس:** `https://api.medogram.ir/predict/api/diabetes/`  
**روش:** `POST`  
**توضیح:** پیش‌بینی احتمال ابتلا به دیابت بر اساس اطلاعات کاربر

**پارامترهای ورودی:**
```json
{
  "name": "string (optional) - نام",
  "age": "integer (required) - سن",
  "height": "float (required) - قد به سانتی‌متر",
  "weight": "float (required) - وزن به کیلوگرم",
  "gender": "string (required) - جنسیت (male/female)",
  "n_pregnant": "integer (required for female) - تعداد بارداری",
  "glucose": "float (required) - قند خون ناشتا",
  "tension": "float (required) - فشار خون سیستولیک",
  "thickness": "float (required) - ضخامت پوست",
  "num_parents": "integer (required) - تعداد والدین مبتلا",
  "num_siblings": "integer (required) - تعداد خواهر/برادر مبتلا",
  "num_grandparents": "integer (required) - تعداد پدربزرگ/مادربزرگ مبتلا",
  "num_uncles_aunts": "integer (required) - تعداد عمو/خاله/دایی/عمه مبتلا"
}
```

**پاسخ موفق:**
```json
{
  "probability": "float - احتمال ابتلا (بین 0 و 1)",
  "risk_level": "string - سطح ریسک",
  "recommendations": "array - توصیه‌ها"
}
```

### 11. ذخیره ورودی کاربر
**آدرس:** `https://api.medogram.ir/predict/api/store_user_input/`  
**روش:** `POST`  
**توضیح:** ذخیره اطلاعات ورودی کاربر برای بهبود مدل

**پارامترهای ورودی:**
```json
{
  "actual_outcome": "boolean (required) - نتیجه واقعی (true/false)",
  "...": "سایر اطلاعات مشابه API پیش‌بینی"
}
```

---

## 💳 پرداخت‌ها (Payments)

### 12. ایجاد تراکنش
**آدرس:** `https://api.medogram.ir/api/transaction/`  
**روش:** `POST`  
**توضیح:** ایجاد تراکنش جدید برای پرداخت

**پارامترهای ورودی:**
```json
{
  "amount": "float (required) - مبلغ",
  "description": "string (optional) - توضیحات تراکنش",
  "service_type": "string (required) - نوع سرویس"
}
```

**پاسخ موفق:**
```json
{
  "transaction_id": "string",
  "payment_url": "string - لینک پرداخت",
  "amount": "float",
  "status": "string"
}
```

### 13. تأیید پرداخت
**آدرس:** `https://api.medogram.ir/api/verify-payment/`  
**روش:** `POST`  
**توضیح:** تأیید پرداخت پس از بازگشت از درگاه

**پارامترهای ورودی:**
```json
{
  "trans_id": "string (required) - شناسه تراکنش",
  "id_get": "string (required) - شناسه دریافتی از درگاه"
}
```

**پاسخ موفق:**
```json
{
  "status": "string",
  "message": "string",
  "transaction_details": "object"
}
```

---

## 📝 وبلاگ (Blog)

### 14. دریافت لیست مقالات
**آدرس:** `https://api.medogram.ir/api/blogs/`  
**روش:** `GET`  
**توضیح:** دریافت لیست مقالات با پشتیبانی از صفحه‌بندی

**پارامترهای اختیاری:**
- `page`: شماره صفحه (پیش‌فرض: 1)

**پاسخ موفق:**
```json
{
  "results": [
    {
      "id": "integer",
      "title": "string",
      "content": "string",
      "author": "string",
      "created_at": "datetime",
      "image1": "string (URL)",
      "image2": "string (URL)",
      "comments": "array"
    }
  ],
  "next": "string (URL) - صفحه بعدی",
  "previous": "string (URL) - صفحه قبلی"
}
```

### 15. ارسال نظر برای مقاله
**آدرس:** `https://api.medogram.ir/api/blogs/{blog_id}/comments/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** ارسال نظر جدید برای مقاله

**پارامترهای ورودی:**
```json
{
  "comment": "string (required) - متن نظر"
}
```

**پاسخ موفق:**
```json
{
  "id": "integer",
  "comment": "string",
  "user": "string",
  "created_at": "datetime",
  "likes": "integer"
}
```

### 16. لایک/دیسلایک نظر
**آدرس:** `https://api.medogram.ir/api/comments/{comment_id}/{action}/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** لایک یا دیسلایک کردن نظر

**پارامترهای مسیر:**
- `comment_id`: شناسه نظر
- `action`: نوع عمل (like یا dislike)

**پاسخ موفق:**
```json
{
  "likes": "integer - تعداد لایک‌های جدید",
  "status": "string"
}
```

---

## 💬 چت (Chat)

### 17. ارسال پیام در چت معمولی
**آدرس:** `http://127.0.0.1:8000/api/chat/message/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** ارسال پیام به چت‌بات معمولی

**پارامترهای ورودی:**
```json
{
  "message": "string (required) - متن پیام"
}
```

**پاسخ موفق:**
```json
{
  "bot_response": "string - پاسخ چت‌بات"
}
```

### 18. ارسال پیام در چت پیشرفته
**آدرس:** `http://127.0.0.1:8000/api/customchatbot/message/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** ارسال پیام به چت‌بات پیشرفته با تنظیمات سفارشی

**پارامترهای ورودی:**
```json
{
  "message": "string (required) - متن پیام",
  "temperature": "float (optional) - درجه خلاقیت",
  "max_tokens": "integer (optional) - حداکثر توکن‌ها",
  "model": "string (optional) - مدل مورد استفاده"
}
```

### 19. ذخیره تنظیمات چت
**آدرس:** `http://127.0.0.1:8000/api/customchatbot/settings/`  
**روش:** `POST`  
**احراز هویت:** Bearer Token مورد نیاز  
**توضیح:** ذخیره تنظیمات چت‌بات پیشرفته

**پارامترهای ورودی:**
```json
{
  "temperature": "float",
  "max_tokens": "integer",
  "model": "string",
  "system_prompt": "string"
}
```

---

## 📥 دانلود فایل‌ها

### 20. دانلود APK اپلیکیشن
**آدرس:** `https://api.medogram.ir/api/download-apk/`  
**روش:** `GET`  
**توضیح:** دانلود فایل APK اپلیکیشن موبایل

---

## 🔧 پیکربندی و تنظیمات

### تنظیمات احراز هویت
تمام APIهایی که نیاز به احراز هویت دارند، باید هدر زیر را شامل شوند:
```
Authorization: Bearer {access_token}
```

### هدرهای مشترک
```
Content-Type: application/json
Accept: application/json
```

### کدهای وضعیت HTTP
- `200`: موفق
- `201`: ایجاد شده
- `400`: درخواست نامعتبر
- `401`: عدم احراز هویت
- `403`: عدم دسترسی
- `404`: یافت نشد
- `500`: خطای سرور

### نمونه خطاها
```json
{
  "error": "string - پیام خطا",
  "detail": "string - جزئیات خطا",
  "code": "string - کد خطا"
}
```

---

## 📌 نکات مهم

1. **احراز هویت**: اکثر APIها نیاز به توکن دسترسی دارند
2. **محدودیت نرخ**: ممکن است محدودیت تعداد درخواست در زمان وجود داشته باشد
3. **زمان انقضای توکن**: توکن‌ها دارای زمان انقضا هستند و باید تجدید شوند
4. **پشتیبانی از HTTPS**: تمام APIهای عمومی از HTTPS استفاده می‌کنند
5. **چت محلی**: APIهای چت بر روی localhost اجرا می‌شوند (127.0.0.1:8000)

---

## 🌐 آدرس‌های پایه

- **API اصلی**: `https://api.medogram.ir`
- **چت محلی**: `http://127.0.0.1:8000`
- **تأیید پرداخت بیل**: `https://bale.medogram.ir`

---

**تاریخ آخرین به‌روزرسانی:** دسامبر 2024  
**نسخه مستندات:** 1.0.0