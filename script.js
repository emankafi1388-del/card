document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".copyable");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const text = item.textContent.trim();  // از textContent به جای innerText استفاده می‌کنیم.

            // کپی کردن متن به کلیپ‌بورد
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    // افزودن و حذف کلاس 'copied' برای انیمیشن
                    item.classList.add("copied");

                    // حذف کلاس 'copied' بعد از مدت زمان انیمیشن
                    setTimeout(() => {
                        item.classList.remove("copied");
                    }, 1400);  // مدت زمان انیمیشن
                }).catch(err => {
                    console.error("خطا در کپی کردن: ", err);
                });
            } else {
                console.log("کپی کردن از طریق کلیپ‌بورد پشتیبانی نمی‌شود.");
            }
        });
    });
});
