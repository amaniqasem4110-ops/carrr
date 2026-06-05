 /**
 * TURPOTIC - MAIN JAVASCRIPT FILE
 * يجمع هذا الملف كافة الوظائف التفاعلية لجميع صفحات المشروع المنفصلة
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. شاشة التحميل (SPLASH SCREEN) - صفحة index.html
    // ==========================================
    const splashScreen = document.getElementById("splash-screen");
    const loadingBar = document.querySelector(".loading-bar-fill");

    if (loadingBar) {
        // بدء تحريك خط التحميل الملون المتدرج فوراً
        setTimeout(() => {
            loadingBar.style.width = "100%";
        }, 100);
    }

    if (splashScreen) {
        // إخفاء الشاشة البيضاء بنعومة بعد 2.5 ثانية
        setTimeout(() => {
            splashScreen.style.opacity = "0";
            splashScreen.style.visibility = "hidden";
            setTimeout(() => {
                splashScreen.style.display = "none";
            }, 600);
        }, 2500);
    }


    // ==========================================
    // 2. نظام الفلاتر والتبويب (FILTERS & TABS) - صفحات Marketplace & Rent
    // ==========================================
    const filterTabs = document.querySelectorAll(".f-tab");
    
    filterTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // إلغاء تفعيل الزر السابق وتفعيل الزر الحالي
            filterTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            
            // هنا يمكنك إضافة منطق تصفية العناصر برمجياً بناءً على نوع الفئة
            const category = this.textContent.trim();
            console.log(`Filtering items by: ${category}`);
        });
    });


    // ==========================================
    // 3. التفاعل مع أزرار التأجير والشراء (INTERACTION)
    // ==========================================
    // ربط أزرار الـ "Rent Now" أو "Buy" لنقل المستخدم لصفحة الدفع
    const actionButtons = document.querySelectorAll(".btn-rent, .btn-buy, .btn-pay");
    
    actionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // إذا كان الزر لإتمام الدفع في صفحة Checkout
            if (btn.classList.contains("btn-pay")) {
                alert("Processing Transaction... Thank you for your order!");
            }
        });
    });


    // ==========================================
    // 4. واجهة تطبيق الهاتف (LUMINOUS APP) - صفحة luminous.html
    // ==========================================
    const appTabs = document.querySelectorAll(".ll-tab");
    
    appTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            appTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            
            const selectedTab = this.textContent.trim();
            if (selectedTab === "Lessons") {
                console.log("Switching to Lessons view...");
                // يمكنك هنا إخفاء الـ Podium وإظهار الدروس
            } else {
                console.log("Switching to Leaderboard view...");
            }
        });
    });


    // ==========================================
    // 5. إدارة النماذج (FORMS HANDLING) - التسجيل وتسجيل الدخول
    // ==========================================
    const authForms = document.querySelectorAll(".auth-box form, .checkout-form-part form");
    
    authForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // منع الصفحة من إعادة التحميل الافتراضية
            
            // التحقق من نوع النموذج المفتوح
            const emailInput = form.querySelector("input[type='email']");
            const passwordInput = form.querySelector("input[type='password']");
            
            if (emailInput && passwordInput) {
                console.log(`Attempting authentication for: ${emailInput.value}`);
                // توجيه المستخدم تلقائياً للصفحة الرئيسية بعد ضغط تسجيل الدخول كمحاكاة ناجحة
                window.location.href = "index.html";
            }
        });
    });

});
