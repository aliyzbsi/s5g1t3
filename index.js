const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Eğitimler",
    "nav-item-2": "Eğitmenler",
    "nav-item-3": "Sorular",
    "nav-item-4": "Blog",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Full Stack Web Developer",
    button: "Kayıt Olun",
  },
  "top-content": {
    "left-h4": "Kabul Şartları",
    "left-content":
      "Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.",
    "right-h4": "Haftalık Program",
    "right-content":
      "Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.",
  },
  "bottom-content": {
    "left-h4": "EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.",
    "left-content":
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    "middle-h4": "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    "middle-content":
      "Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.",
    "right-h4":
      "ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ",
    "right-content":
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    "contact-h4": "İLETİŞİM",
    address: "Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye",
    phone: "+90 (216) 550-5905",
    email: "bilgi@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2023",
  },
  images: {
    "logo-img": "https://i.ibb.co/42PDMF2/logo.png",
    "cta-img": "https://i.ibb.co/XssVKxk/cta.png",
    "accent-img": "https://i.ibb.co/5FZmL26/accent.png",
  },
};

/* Kodlar Buradan aşağıya */
const headerLinks = document.querySelectorAll("header nav a");
const navKeys = Object.keys(siteContent.nav);
const navValues = Object.values(siteContent.nav);
const logoImg = document.querySelector("#logo-img");
logoImg.setAttribute("src", siteContent.images["logo-img"]);
headerLinks.forEach((link, index) => {
  if (index < navValues.length) {
    link.textContent = navValues[index];
    link.classList.add(navKeys[index]);
  }
});

const ctaText = document.querySelector(".cta");

ctaText.querySelector("h1").textContent = siteContent.cta.h1;
ctaText.querySelector("button").textContent = siteContent.cta.button;
ctaText
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

const topContent = document.querySelector(".top-content");
const textContents = topContent.querySelectorAll(".text-content");

// Verileri al
const topContentData = siteContent["top-content"];

// `textContents` NodeList'ini döngüye al
textContents.forEach((textContent, index) => {
  // Her bir `text-content` div'inin alt öğelerini seç
  const h4 = textContent.querySelector("h4");
  const p = textContent.querySelector("p");

  // `topContentData` nesnesinden uygun başlık ve içerikleri al
  if (index === 0) {
    // İlk div
    h4.textContent = topContentData["left-h4"];
    p.textContent = topContentData["left-content"];
  } else if (index === 1) {
    // İkinci div
    h4.textContent = topContentData["right-h4"];
    p.textContent = topContentData["right-content"];
  }
});
// Bottom Content Güncellemeleri
const bottomContent = document.querySelector(".bottom-content");
const bottomTextContents = bottomContent.querySelectorAll(".text-content");

const bottomContentData = siteContent["bottom-content"];

bottomTextContents.forEach((content, index) => {
  const bottomH4 = content.querySelector("h4");
  const bottomParag = content.querySelector("p");

  if (index === 0) {
    bottomH4.textContent = bottomContentData["left-h4"];
    bottomParag.textContent = bottomContentData["left-content"];
  } else if (index == 1) {
    bottomH4.textContent = bottomContentData["middle-h4"];
    bottomParag.textContent = bottomContentData["middle-content"];
  } else if (index === 2) {
    bottomH4.textContent = bottomContentData["right-h4"];
    bottomParag.textContent = bottomContentData["right-content"];
  }
});
const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent.images["accent-img"]);
const contactSection = document.querySelector(".contact");
const contactItems = contactSection.querySelectorAll("p");

contactSection.querySelector("h4").textContent =
  siteContent.contact["contact-h4"];

contactItems.forEach((content, index) => {
  if (index === 0) {
    content.textContent = siteContent.contact.address;
  } else if (index === 1) {
    content.textContent = siteContent.contact.phone;
  } else if (index === 2) {
    content.textContent = siteContent.contact.email;
  }
});
const footer = document.querySelector("footer a");

footer.setAttribute("class", "bold");
footer.textContent = siteContent.footer.copyright;
