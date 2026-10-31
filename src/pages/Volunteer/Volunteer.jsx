import { useState } from 'react';
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import gönüllü from '../../assets/gönüllü.png'
import './Volunteer.css'
import { supabase } from '../../supabaseClient'
function Volunteer() {

  const sehirler = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
    "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
    "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
    "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
    "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
    "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
    "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van",
    "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak",
    "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];

  const [dogumTarihi, setDogumTarihi] = useState("");
  const [sehir, setSehir] = useState("");
  const [destekAlanlari, setDestekAlanlari] = useState([]);
  const [katilimSekli, setKatilimSekli] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [konumIzni, setKonumIzni] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dogumTarihi) {
      alert("Lütfen doğum tarihinizi girin!");
      return;
    }

    const bugun = new Date();
    const dogum = new Date(dogumTarihi);
    const yas = bugun.getFullYear() - dogum.getFullYear();

    if (yas < 18) {
      alert("Yaşınız 18 den küçük. Başvuru başarısız!");
    } else {
      alert("Başvuru başarılı!");
    }

    if(!sehir){
      alert("Lütfen destek verebileceğiniz şehri seçiniz!");
      return;
    }

    if(!destekAlanlari.length === 0){
      alert("Lütfen en az bir destek alanı seçin!");
      return;
    }

    if(!katilimSekli){
      alert("Lütfenn Katılım şeklinizi seçin!");
      return;
    }

 supabase.auth.getUser().then(({ data, error }) => {

  if (error) {
    alert("Kullanıcı bilgisi alınamadı!");
    return;
  }

  const kullanici = data.user;

  console.log("Kullanıcı ID:", kullanici.id);
  
supabase
  .from("volunteer_applications")
  .insert([
    {
      user_id: kullanici.id,
      birth_date: dogumTarihi,
      city: sehir,
      support_areas: destekAlanlari,
      participation_type: katilimSekli,
      bio: aciklama,
      location_consent: konumIzni
    }
  ])
  .then(({ data, error }) => {
    if (error) {
      console.log("Kayıt hatası:", error);
      alert("Başvuru kaydedilemedi!");
      return;
    }

    console.log("Kaydedilen başvuru:", data);
    alert("Gönüllü başvurunuz başarıyla kaydedildi!");
  });

});



  }


  const handleDestekChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDestekAlanlari([...destekAlanlari, value]);
    } else {
      setDestekAlanlari(destekAlanlari.filter((alan) => alan !== value));
    }
  }





  return (
    <div className='volunteer-container'>
      <div className="volunteer-top">
        <img src={gönüllü} alt="" />
        <div className="volunter-top-text">
          <p>İYİLİK İÇİN BİR ADIM AT</p> <br />
          <h4>Gönüllü Ol</h4> <br />
          <p>Afet bölgelerinde ihtiyaç sahiplerine destek olmak, insanların yeniden <br /> umutla ayağa kallkmasına katkı sağlamak için gönüllü olabilirsin. <br /> Sen de bu dayanışmanın bir parçası ol </p>
        </div>
      </div>


      <div className="volunteer-bottom">
        <div className="volunteer-bottom-left">
          <h4>Neden Gönüllü Olmalısın?</h4>
          <div className="volunteer-cards">
            <div className="volunteer-card">
              <div className='volunteer-icon-1'><PiUsersThreeFill /></div>
              <div className="volunteer-card-content">
                <b>Hayatlara Dokun</b>
                <p>Yardımına ihtiyaç duyan insanlara destek olarak onların umut kazanmasına katkı sağla</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-2'><IoMdHeartEmpty /></div>
              <div className="volunteer-card-content">
                <b>Topluma Fayda Sağla</b>
                <p>Senin desteğin, afet sonrası toparlama sürecinde büyük bir fark yaratır</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-3'><PiUsersThreeFill /></div>
              <div className="volunteer-card-content">
                <b>Kendini Geliştir</b>
                <p>Yeni insanlarla tanış, farklı deneyimler yaşa, kişisel ve mesleki olarak geliş.</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-4'><MdOutlineSecurity /></div>
              <div className="volunteer-card-content">
                <b>Güvenli ve Planlı Katılım</b>
                <p>Tüm gönüllü süreçleri, uzman ekipler tarafından yürütülüt, Katılım koşulları ve görevler hakkında seni bilgilendirir.</p>
              </div>
            </div>
          </div>

          <p className='block-p'><RiErrorWarningFill className='p-icon' />Gönüllü olmak için 18 yaşından büyük olmak gerekiyor.</p>
        </div>

        <div className="volunteer-bottom-right">
          <h2>Gönüllü Ol Başvuru Formu</h2>
          <p>Ekibimiz en kısa süre içinde sizinle iletişime geçecektir. </p>

          <form className='volunteer-form' onSubmit={handleSubmit} >




            <div className="form-group">
              <label htmlFor="">Doğum Tarihi</label>
              <input value={dogumTarihi} onChange={(e) => setDogumTarihi(e.target.value)} type="date" placeholder='GG/AA/YYYY' />

            </div>
            <div className="form-group">
              <label htmlFor="sehir">İl Seçiniz</label>
              <select value={sehir} onChange={(e) => setSehir(e.target.value)}>

                <option value="" disabled>İl seçiniz</option>

                {sehirler.map((sehir) => (
                  <option key={sehir} value={sehir} >{sehir}</option>
                ))}
              </select>

            </div>
            <label htmlFor="">Hangi Alanlarda Destek Olabilirsin?</label>
            <div className="form-group-destek">

              <label>
                <input type="checkbox" value="Gıda Yardımı" onChange={handleDestekChange} checked={destekAlanlari.includes("Gıda Yardımı")} />
                Gıda Yardımı
              </label>

              <label>
                <input type="checkbox" value="Giysi Yardımı" onChange={handleDestekChange} checked={destekAlanlari.includes("Giysi Yardımı")} />
                Giysi Yardımı
              </label>

              <label>
                <input type="checkbox" value="Barınma Desteği" onChange={handleDestekChange} checked={destekAlanlari.includes("Barınma Desteği")} />
                Barınma Desteği
              </label>


              <label>
                <input type="checkbox" value="Psikososyal destek" onChange={handleDestekChange} checked={destekAlanlari.includes("Psikososyal destek")} />
                Psikososyal destek
              </label>

              <label>
                <input type="checkbox" value="Su Yardımı" onChange={handleDestekChange} checked={destekAlanlari.includes("Su Yardımı")} />
                Su yardımı
              </label>


              <label>
                <input type="checkbox" value="Hijyen&Temizlik Desteği" onChange={handleDestekChange} checked={destekAlanlari.includes("Hijyen&Temizlik Desteği")} />
                Hijyen&Temizlik Desteği
              </label>


            </div>

            <div className="form-group">
              <label htmlFor="">Katılım Şekli</label>
              <label>
                <input type="radio" name='katilimSekli' value="Sahada Gönüllülük" checked={katilimSekli === "Sahada Gönüllülük"} onChange={(e) => setKatilimSekli(e.target.value)} />
                Sahada Gönüllülük
              </label>

              <label>
                <input type="radio" name='katilimSekli' value="Uzaktan Gönüllülük" checked={katilimSekli === "Uzaktan Gönüllülük"} onChange={(e) => setKatilimSekli(e.target.value)} />
                Uzaktan Gönüllülük
              </label>

              <label>
                <input type="radio" name='katilimSekli' value="Her ikisi de" checked={katilimSekli === "Her ikisi de"} onChange={(e) => setKatilimSekli(e.target.value)} />
                Her ikisi de
              </label>
            </div>


            <div className="form-group-2">
              <label htmlFor="">Kendinizden Kısaca Bahsedin</label>
              <textarea value={aciklama} onChange={(e) => setAciklama(e.target.value)} placeholder="Gönüllülük deneyiminizden, becerilerinizden veya sunabileceğiniz destekten bahsedebilirsiniz..."
                rows="4"></textarea>

            </div>
            <div className="location-info">
              <label>Konum Bilgisi</label>

              <p>
                Size en yakın yardım taleplerini gösterebilmemiz ve
                gönüllülük sürecinizi kolaylaştırabilmemiz için
                konum bilginize ihtiyaç duyuyoruz.
              </p>

              <label className="location-checkbox">
                <input type="checkbox" checked={konumIzni} onChange={(e) => setKonumIzni(e.target.checked)} />
                Konum bilgimin yakın çevremdeki yardım taleplerini
                listelemek amacıyla kullanılmasını kabul ediyorum.
              </label>
            </div>
            <button type='submit' className='form-btn'>Başvuruyu Gönder</button>





          </form>

        </div>
      </div>


    </div>
  )
}

export default Volunteer