  // Proje dizisi
  const projects = [
    {
      title: "Proje 1",
      name: "English Dictionary",
      image: "resimler/resim1.png",
      description:
        "Bu projede kullanıcı, arama çubuğuna İngilizce bir kelime yazar ve bu kelimenin anlamı, okunuşu ve sesli telaffuzu API aracılığıyla çekilerek ekranda gösterilir. Proje, gerçek zamanlı veri çekmek için fetch metodu kullanır ve anlamları görüntülemek için dinamik bir arayüz sunar. Sesli telaffuz, API’den gelen ses dosyasının oynatılmasıyla sağlanır.",
    },
    {
      title: "Proje 2",
      name: "Araç Kiralama Sitesi",
      image: "resimler/resim2.png",
      description:
        "Bu projede, JavaScript ve Bootstrap kullanarak modern bir araç kiralama arayüzü geliştirdim. Kullanıcılar, araç için alış ve bırakış tarihlerini seçerek uygun araçları listeleyebilir. Listelenen araçların özellikleri, Bootstrap modal yapısı kullanılarak detaylı şekilde görüntülenir. Kullanıcı dostu tasarımı ve işlevselliğiyle kolay rezervasyon imkanı sunar.",
    },
    {
      title: "Proje 3",
      name: "Kelime Tahmin Etme Oyunu",
      image: "resimler/resim5.png",
      description:
        "Bu projede, JavaScript kullanarak bir kelime tahmin oyunu geliştirildi. Kullanıcı, belirlenen kelimenin uzunluğu kadar oluşturulan kutucuklar üzerinden harf tahmin ederek kelimeyi bulmaya çalışır. Doğru tahmin edilen harfler ilgili kutucuklara yerleştirilirken, yanlış tahmin edilen harfler ayrı bir alanda kaydedilerek görüntülenir. Kullanıcı kelimeyi doğru tahmin ederse ekranda 'Tebrikler!' mesajı gösterilir.",
    },
    {
      title: "Proje 4",
      name: "Müzik Çalar",
      image: "resimler/resim6.png",
      description:
        "Bu projede, JavaScript kullanılarak bir müzik çalar uygulaması geliştirildi. Kullanıcı, şarkıları oynatma, duraklatma, önceki ve sonraki şarkıya geçiş gibi temel kontrol işlevlerini yerine getirebilir. Şarkı bilgileri (başlık ve sanatçı adı), seçilen şarkıya ait görsel ve oynatma durumu dinamik olarak güncellenir. Oynatma sırasında şarkının toplam süresi ve mevcut zamanı bir ilerleme çubuğu ile gösterilir.",
    },
  ];

  // Projeler kısmını oluşturma
  const projectsContainer = document.querySelector("#projelerim .row");

  projects.forEach((project) => {
    const projectHTML = `
  <div class="col-lg-3 col-md-6 col-sm-12 mb-3 d-flex">
    <div class="p-3 border rounded flex-column h-100 w-100 d-flex">
      <h4 class="text-center baslik">${project.title}</h4>
      <p>${project.name}</p>
      <div class="image-container my-3">
        <img src="${project.image}" alt="${project.name}" />
      </div>
      <p class="truncate">${project.description}</p>
    </div>
  </div>
`;
    projectsContainer.innerHTML += projectHTML;
  });

  // Mobil Menü Aç/Kapat
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLink = document.querySelectorAll(".nav-link");
  let title = document.querySelector(".header-title");
  title.textContent = "";
  const text = "BetülDoğan";
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      title.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 150); // 1

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("d-none");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("d-none");
  });

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("d-none");
    });
  });