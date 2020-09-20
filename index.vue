<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Swiper demo</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Link Swiper's CSS -->
	<link rel="stylesheet" href="css/swiper-bundle.min.css">
	<link rel="stylesheet" href="css/pharm-game.css">
</head>

<body>
<section class="game-pharm-section">
	<h2>МЕДИЧНИЙ СИМУЛЯТОР</h2>
	<p class="sub-header">Медичний симулятор розроблений в допомогу практикуючому лікарю.<br>
		Лікарські засоби повинні призначатися відповідно до зареєстрованої інструкції.</p>
	<div class="patient-choice-wrapper">
		<p><b>ОБЕРІТЬ ПАЦІЄНТА</b></p>
	</div>
	<div class="patients-wrapper">
		<div class="patient patient-1" @click="openPopup('preductal')" :class="{disabled: disablePatient('preductal')}">
			Preductal
		</div>
		<div class="patient patient-2" @click="openPopup('noliprel')" :class="{disabled: disablePatient('noliprel')}">
			Noliprel
		</div>
		<div class="patient patient-3" @click="openPopup('arifam')" :class="{disabled: disablePatient('arifam')}">
			Arifam
		</div>
		<div class="patient patient-4" @click="openPopup('b-prestarium')"
		     :class="{disabled: disablePatient('b-prestarium')}">
			Prestarium
		</div>
		<div class="patient patient-5" @click="openPopup('coraxan')" :class="{disabled: disablePatient('coraxan')}">
			Coraxan
		</div>
		<div class="patient patient-6" @click="openPopup('prestilol')" :class="{disabled: disablePatient('prestilol')}">
			Prestilol
		</div>
		<div class="patient patient-7" @click="openPopup('triplixam')" :class="{disabled: disablePatient('triplixam')}">
			Triplixam
		</div>
	</div>

	<div class="popup-wrapper" v-show="showPopup" :class="[{success: correctChoice},currentMedicine]">
		<div class="popup-content"
		     v-for="(popupContent, index) in popupContents"
		     :key="index"
		     v-show="currentMedicine === popupContent.dataId"
		>
			<div class="popup-aside-wrapper">
				<img src="images/popup-bg.png" alt="Popup background" class="popup-background">
				<img :src="popupContent.neutralImgSrc" alt="Sad image" class="neutral"
				     :class="{visible: neutralMood}">
				<img :src="popupContent.sadImgSrc" alt="Sad image" class="sad"
				     :class="{visible: sadMood}">
				<img :src="popupContent.happyImgSrc" alt="Happy image" class="happy"
				     :class="{visible: happyMood}">
			</div>
			<div class="popup-patient-info-wrapper">
				<div class="popup-header">
					<p><b>Який із препаратів компанії Серв’є<br>Ви би призначили цьому хворому?</b></p>
				</div>
				<p v-html="popupContent.age"></p>
				<p v-html="popupContent.arterialPressure"></p>
				<p v-html="popupContent.diagnosis"></p>
				<p v-html="popupContent.therapy"></p>
				<p v-html="popupContent.otherData" v-if="popupContent.otherData"></p>
			</div>
			<div class="popup-answer-type popup-ok" v-show="correctChoice">
				<div class="aside-popup-wrapper">
					<img src="images/ok.png" alt="Correct choice icon">
				</div>
				<p v-html="popupContent.foundation"></p>
			</div>
			<div class="popup-answer-type popup-no" v-show="wrongChoice">
				<div class="aside-popup-wrapper">
					<img src="images/no.png" alt="Wrong choice icon">
				</div>
				<p>Спробуйте ще</p>
			</div>
		</div>
		<div class="close-button" @click="closePopup()"></div>
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
				     v-for="(item, index) in thumbs"
				     :key="index"
				     :class="[{active: item.active}, item.dataId]"
				     @click="toggleActiveState(index)">
					<div class="shadow-wrapper">
						<p v-html="item.name"></p>
						<img :src="item.src" :alt="item.name">
					</div>
				</div>
			</div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
		<!-- Swiper JS -->
	</div>
</section>
<script src="js/vue@3.0.0-rc.12.js"></script>
<script src="js/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
    Vue.createApp({
        data() {
            return {
                showPopup: false,
                correctChoice: false,
                wrongChoice: false,
                neutralMood: true,
                sadMood: false,
                happyMood: false,
                removeId: null,
                currentMedicine: "",
                disabledPatients: [],
                thumbs: [
                    {
                        name: "Престилол<sup>®</sup>",
                        active: false,
                        src: "images/1.png",
                        dataId: "prestilol"
                    },
                    {
                        name: "Ноліпрел<sup>®</sup>",
                        active: false,
                        src: "images/2.png",
                        dataId: "noliprel"
                    },
                    {
                        name: "Трипліксам<sup>®</sup>",
                        active: false,
                        src: "images/3.png",
                        dataId: "triplixam"
                    },
                    {
                        name: "Арифам<sup>®</sup>",
                        active: false,
                        src: "images/4.png",
                        dataId: "arifam"
                    },
                    {
                        name: "Предуктал ОД 80 мг<sup>®</sup>",
                        active: false,
                        src: "images/7.png",
                        dataId: "preductal"
                    },
                    {
                        name: "Кораксан<sup>®</sup>",
                        active: false,
                        src: "images/5.png",
                        dataId: "coraxan"
                    },
                    {
                        name: "Бі-Престаріум<sup>®</sup>",
                        active: false,
                        src: "images/6.png",
                        dataId: "b-prestarium"
                    }
                ],
                popupContents: [
                    {
                        dataId: "prestilol",
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        neutralImgSrc: "images/2.png",
                        age: "<b>Вік:</b> 52 роки",
                        arterialPressure: "<b>АТ:</b> 160/95",
                        diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія, ішемічна хвороба серця",
                        therapy: "<b>Терапія:</b> Бісопролол + іАПФ в окремих таблетках",
                        otherData: "<b>Інші дані:</b> ЧСС вище 80 уд/хв",
                        foundation: "1. Застосування двох антигіпертензивних препаратів в одній таблетці покращує прихильність і підвищує рівень контролю АТ. (Європейські рекомендації 2018: ESC/ESH Guidelines for the management of arterial hypertension (European Heart Journal (2018) 39, 3021–3104) розділ 7.5, пункт 2.4, ст. 3063.<br>2. Призначення фіксованої комбінації бісопрололу і периндоприлу пацієнтам, які в складі попередньої терапії приймали бісопролол та іАПФ, але не досягли рекомендованих рівнів частоти скорочень серця та артеріального тиску, сприяло ефективному зниженню частоти скорочень серця і артеріального тиску, досягненню цільових рівнів через 1 місяць. (Лутай М.І.// Ефективність лікування пацієнтів зі стабільною ішемічною хворобою серця та супутньою артеріальною гіпертензією: результати багатоцентрового дослідження ПРЕСТОЛ. УКЖ, том 26, № 1, 2019.)",
                    },
                    {
                        dataId: "noliprel",
                        sadImgSrc: "images/noliprel-sad.png",
                        happyImgSrc: "images/noliprel-happy.png",
                        neutralImgSrc: "images/noliprel-neutral.png",
                        age: "<b>Вік:</b> 57 років",
                        arterialPressure: "<b>АТ:</b> 160/100",
                        diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія і ожиріння",
                        therapy: "<b>Терапія:</b> монотерапія іАПФ",
                        otherData: "<b>Інші дані:</b> ІМТ - 33,2 кг/м<sup>2</sup>",
                        foundation: "Ноліпрел Бі-форте — саме такий вибір зробили лікарі у дослідженні FOSAGE (Glezer M.G. Antihypertensive Effectiveness of Perindopril Arginine and Indapamide Single-Pill Combination According to Body Mass Index: Findings from the FORSAGE Study//Cardiol Ther (2020) 9:139–152 <a href='https://doi.org/10.1007/s40119-020-00162-x)'>https://doi.org/10.1007/s40119-020-00162-x)</a>. це призвело до значного зниження АТ вже на 2-му тижні лікування — на 23,1/10,9 у пациєнтів з АГ та ожирінням. За 3 місяці АТ у паціентіз в АГ та ожирінням (ІМТ> 30 кг/м2) знизився на 39,4/18,7 мм рт ст і 78% таких пацієнтів досягли нормалізації АТ з Ноліпрелом Бі-форте"
                    },
                    {
                        dataId: "triplixam",
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        neutralImgSrc: "images/2.png",
                        age: "<b>Вік:</b> 69 років",
                        arterialPressure: "<b>АТ:</b> 170/180",
                        diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія",
                        therapy: "<b>Терапія:</b> подвійна комбінація антигіпертензивних препаратів",
                        foundation: "Потрійна комбінація іАПФ + БКК + діуретик в одній таблетці  пацієнту з неускладненою гіпертензією і АТ>140/90, який перебуває на подвійній антигіпертензивній комбінації, є наступним кроком в терапії згідно Європейських рекомендацій 2018: ESC/ESH Guidelines for the management of arterial hypertension (European Heart Journal (2018) 39, 3021–3104)."
                    },
                    {
                        dataId: "arifam",
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        neutralImgSrc: "images/2.png",
                        age: "<b>Вік:</b> 65 років",
                        arterialPressure: "<b>АТ:</b> 165/95",
                        diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія",
                        therapy: "<b>Терапія:</b> приймає індапамід 2,5 мг",
                        foundation: "Подвійна комбінація БКК і тіазидоподібного діуретика рекомендована пацієнтам старше 55 років Британськими рекомендаціями з лікування АГ — NICE 2019 (National Institute for Health and Care Excellence. Hypertension in adults: diagnosis and management. NICE Guideline 136. August, 2019)"
                    },
                    {
                        dataId: "preductal",
                        sadImgSrc: "images/noliprel-sad.png",
                        happyImgSrc: "images/noliprel-happy.png",
                        neutralImgSrc: "images/noliprel-neutral.png",
                        age: "<b>Вік:</b> 55 років",
                        arterialPressure: "<b>АТ:</b> 120/90",
                        diagnosis: "<b>Діагноз:</b> ІХС, стенокардія.",
                        therapy: "<b>Терапія:</b> Бісопролол 5 мг, Амлодипін, Молсидомін 2 мг",
                        otherData: "<b>Інші дані:</b> Скаржиться на біль за грудиною при фізичному навантаженні",
                        foundation: "В лікуванні ІХС, а точніше, за новими рекомендаціями Європейського товариства кардіологів 2019 року, — хронічного коронарного синдрому, не існує універсального визначення оптимальної терапії у пацієнтів з хронічним коронарним синдромом, препарати повинні бути підібрані індивідуально для кожного пацієнта, залежно від його профілю та побажань. Для пацієнта наступним кроком може бути призначення триметазидину. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes European Heart Journal (2019) 00, 171. Представлена таблиця та цитати із рекомендацій. doi: 10.1093/eurheartj/ehz425.",
                    },
                    {
                        dataId: "coraxan",
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        neutralImgSrc: "images/2.png",
                        age: "<b>Вік:</b> 60 років",
                        arterialPressure: "<b>АТ:</b> 110/70",
                        diagnosis: "<b>Діагноз:</b> ІХС, СН",
                        therapy: "<b>Терапія:</b> карведілол 6, 25,  Трипліксам 5/1,25/10 мг",
                        otherData: "<b>Інші дані:</b> Приєдналися симптоми - задишка та втома, пастозність гомілок. У пацієнта синусовий ритм, ЧСС 75.",
                        foundation: "В лікуванні ІХС, а точніше, за новими рекомендаціями Європейського товариства кардіологів 2019 року,  - хронічного коронарного синдрому для пацієнта із супутньою та СН, до бета-блокаторів рекомендовано додати івабрадин. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes European Heart Journal (2019) 00, 171. Представлена таблиця та цитати із рекомендацій. doi:10.1093/eurheartj/ehz425. page 434",
                    },
                    {
                        dataId: "b-prestarium",
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        neutralImgSrc: "images/2.png",
                        age: "<b>Вік:</b> 55 років",
                        arterialPressure: "<b>АТ:</b> 165/100",
                        diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія",
                        therapy: "<b>Терапія:</b> валсартан 160 мг 1 раз на добу",
                        otherData: "<b>Інші дані:</b>",
                        foundation: "Згідно з рекомендаціями міжнародного товариства АГ ISH 2020, першим і другим кроком оптимальної  медикаментозної схеми лікування артеріальної гіпертензії є саме подвійна комбінація іРААС+ дигідроперидиновий БКК (2020 ISH Global Hypertension Practice Guidelines-Hypertension. 2020; 75:1334-1357.)",
                    }
                ]
            }
        },
        methods: {
            toggleActiveState(id) {
                this.thumbs.forEach((thumb, index) => {
                    if (id === index) {
                        thumb.active = !thumb.active;
                        if (thumb.dataId === this.currentMedicine) {
                            this.correctChoice = true;
                            this.happyMood = true;
                            this.neutralMood = false;
                            this.sadMood = false;
                            this.wrongChoice = false;
                            this.removeId = id;
                        } else {
                            this.happyMood = false;
                            this.neutralMood = false;
                            this.sadMood = true;
                            this.correctChoice = false;
                            this.wrongChoice = true;
                        }
                    } else {
                        thumb.active = false;
                    }
                });
            },
            disablePatient(medicine) {
                return !!~this.disabledPatients.indexOf(medicine)
            },
            openPopup(medicine) {
                this.currentMedicine = medicine;
                this.showPopup = true;
                setTimeout(function () {
                    swiper.update();
                })
            },
            closePopup() {
                this.showPopup = false;
                this.thumbs.forEach((thumb) => {
                    thumb.active = false;
                });
                if (this.correctChoice) {
                    this.disabledPatients.push(this.thumbs[this.removeId].dataId);
                    this.thumbs.splice(this.removeId, 1);
                }
                this.correctChoice = false;
                this.wrongChoice = false;
                this.happyMood = false;
                this.sadMood = false;
                this.neutralMood = true;
            }
        },
    }).mount('.game-pharm-section');
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        observeSlideChildren: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px,
            1024: {
                slidesPerView: 2
            },
            1250: {
                slidesPerView: 3
            },
            1670: {
                slidesPerView: 4
            }
        }
    });
</script>
</body>

</html>
