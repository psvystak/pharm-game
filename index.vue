<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Swiper demo</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Link Swiper's CSS -->
	<link rel="stylesheet" href="node_modules/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" href="pharm-game.css">
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

	<div class="popup-wrapper" v-show="showPopup" :class="{success: correctChoice, failed: wrongChoice}">
		<div class="close-button" @click="closePopup()"></div>
		<div class="popup-content"
		     v-for="(popupContent, index) in popupContents"
		     :key="index"
		>
			<div class="show-wrapper" v-if="currentMedicine === popupContent.dataId">
				<div class="popup-aside-wrapper">
					<img src="images/popup-bg.png" alt="Popup background" class="popup-background">
					<img :src="popupContent.sadImgSrc" alt="Sad image" class="sad" :class="{visible: !popupContent.showHappy}">
					<img :src="popupContent.happyImgSrc" alt="Happy image" class="happy" :class="{visible: popupContent.showHappy}">
				</div>
				<div class="popup-patient-info-wrapper">
					<p v-html="popupContent.age"></p>
					<p v-html="popupContent.arterialPressure"></p>
					<p v-html="popupContent.diagnosis"></p>
					<p v-html="popupContent.therapy"></p>
					<p v-html="popupContent.otherData" v-if="popupContent.otherData"></p>
				</div>
			</div>
		</div>
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
				     v-for="(item, index) in thumbs"
				     :key="index"
				     :class="[{active: item.active}, item.dataId]"
				     @click="setActiveState(index)">
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
<script src="node_modules/vue/vue@3.0.0-rc.12.js"></script>
<script src="node_modules/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
    Vue.createApp({
        data() {
            return {
                showPopup: false,
                correctChoice: false,
                wrongChoice: false,
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
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "noliprel",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "triplixam",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "arifam",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "preductal",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "coraxan",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    },
                    {
                        dataId: "b-prestarium",
                        showHappy: false,
                        sadImgSrc: "images/2.png",
                        happyImgSrc: "images/2.png",
                        age: "",
                        arterialPressure: "",
                        diagnosis: "",
                        therapy: "",
                        otherData: "",
                    }
                ]
            }
        },
        methods: {
            toggleActiveState(id) {
                this.thumbs.forEach((el, index) => {
                    if (id === index) {
                        el.active = !el.active;
                        if (el.dataId === this.currentMedicine) {
                            this.correctChoice = true;
                            this.wrongChoice = false;
                            this.removeId = id;
                        } else {
                            this.wrongChoice = true;
                        }
                    } else {
                        el.active = false;
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
                this.thumbs.forEach((el) => {
                    el.active = false;
                });
                if (this.correctChoice) {
                    this.disabledPatients.push(this.thumbs[this.removeId].dataId);
                    this.thumbs.splice(this.removeId, 1);
                }
                this.correctChoice = false;
            }
        },
    }).mount('.game-pharm-section');
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        observeSlideChildren: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
</script>
</body>

</html>
