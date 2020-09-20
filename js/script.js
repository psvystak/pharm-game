Vue.createApp({
    data() {
        return {
            showPopup: false,
            correctChoice: false,
            wrongChoice: false,
            sadMood: true,
            happyMood: false,
            removeId: null,
            currentMedicine: "",
            disabledPatients: [],
            thumbs: [
                {
                    name: "Престилол<sup>®</sup>",
                    active: false,
                    src: "images/1.png",
                    dataId: "game-pharm-prestilol"
                },
                {
                    name: "Ноліпрел<sup>®</sup>",
                    active: false,
                    src: "images/2.png",
                    dataId: "game-pharm-noliprel"
                },
                {
                    name: "Трипліксам<sup>®</sup>",
                    active: false,
                    src: "images/3.png",
                    dataId: "game-pharm-triplixam"
                },
                {
                    name: "Арифам<sup>®</sup>",
                    active: false,
                    src: "images/4.png",
                    dataId: "game-pharm-arifam"
                },
                {
                    name: "Предуктал ОД 80 мг<sup>®</sup>",
                    active: false,
                    src: "images/7.png",
                    dataId: "game-pharm-preductal"
                },
                {
                    name: "Кораксан<sup>®</sup>",
                    active: false,
                    src: "images/5.png",
                    dataId: "game-pharm-coraxan"
                },
                {
                    name: "Бі-Престаріум<sup>®</sup>",
                    active: false,
                    src: "images/6.png",
                    dataId: "game-pharm-b-prestarium"
                }
            ],
            popupContents: [
                {
                    dataId: "game-pharm-prestilol",
                    sadImgSrc: "images/prestilol-sad.png",
                    happyImgSrc: "images/prestilol-happy.png",
                    age: "<b>Вік:</b> 52 роки",
                    arterialPressure: "<b>АТ:</b> 160/95",
                    diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія, ішемічна хвороба серця",
                    therapy: "<b>Терапія:</b> Бісопролол + іАПФ в окремих таблетках",
                    otherData: "<b>Інші дані:</b> ЧСС вище 80 уд/хв",
                    foundation: "1. Застосування двох антигіпертензивних препаратів в одній таблетці покращує прихильність і підвищує рівень контролю АТ. (Європейські рекомендації 2018: ESC/ESH Guidelines for the management of arterial hypertension (European Heart Journal (2018) 39, 3021–3104) розділ 7.5, пункт 2.4, ст. 3063.<br>2. Призначення фіксованої комбінації бісопрололу і периндоприлу пацієнтам, які в складі попередньої терапії приймали бісопролол та іАПФ, але не досягли рекомендованих рівнів частоти скорочень серця та артеріального тиску, сприяло ефективному зниженню частоти скорочень серця і артеріального тиску, досягненню цільових рівнів через 1 місяць. (Лутай М.І.// Ефективність лікування пацієнтів зі стабільною ішемічною хворобою серця та супутньою артеріальною гіпертензією: результати багатоцентрового дослідження ПРЕСТОЛ. УКЖ, том 26, № 1, 2019.)",
                },
                {
                    dataId: "game-pharm-noliprel",
                    sadImgSrc: "images/noliprel-sad.png",
                    happyImgSrc: "images/noliprel-happy.png",
                    age: "<b>Вік:</b> 57 років",
                    arterialPressure: "<b>АТ:</b> 160/100",
                    diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія і ожиріння",
                    therapy: "<b>Терапія:</b> монотерапія іАПФ",
                    otherData: "<b>Інші дані:</b> ІМТ - 33,2 кг/м<sup>2</sup>",
                    foundation: "Ноліпрел Бі-форте — саме такий вибір зробили лікарі у дослідженні FOSAGE (Glezer M.G. Antihypertensive Effectiveness of Perindopril Arginine and Indapamide Single-Pill Combination According to Body Mass Index: Findings from the FORSAGE Study//Cardiol Ther (2020) 9:139–152 <a href='https://doi.org/10.1007/s40119-020-00162-x)'>https://doi.org/10.1007/s40119-020-00162-x)</a>. це призвело до значного зниження АТ вже на 2-му тижні лікування — на 23,1/10,9 у пациєнтів з АГ та ожирінням. За 3 місяці АТ у паціентіз в АГ та ожирінням (ІМТ> 30 кг/м<sup>2</sup>) знизився на 39,4/18,7 мм рт ст і 78% таких пацієнтів досягли нормалізації АТ з Ноліпрелом Бі-форте"
                },
                {
                    dataId: "game-pharm-triplixam",
                    sadImgSrc: "images/triplixam-sad.png",
                    happyImgSrc: "images/triplixam-happy.png",
                    age: "<b>Вік:</b> 69 років",
                    arterialPressure: "<b>АТ:</b> 170/180",
                    diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія",
                    therapy: "<b>Терапія:</b> подвійна комбінація антигіпертензивних препаратів",
                    foundation: "Потрійна комбінація іАПФ + БКК + діуретик в одній таблетці  пацієнту з неускладненою гіпертензією і АТ>140/90, який перебуває на подвійній антигіпертензивній комбінації, є наступним кроком в терапії згідно Європейських рекомендацій 2018: ESC/ESH Guidelines for the management of arterial hypertension (European Heart Journal (2018) 39, 3021–3104)."
                },
                {
                    dataId: "game-pharm-arifam",
                    sadImgSrc: "images/arifam-sad.png",
                    happyImgSrc: "images/arifam-happy.png",
                    age: "<b>Вік:</b> 65 років",
                    arterialPressure: "<b>АТ:</b> 165/95",
                    diagnosis: "<b>Діагноз:</b> Артеріальна гіпертензія",
                    therapy: "<b>Терапія:</b> приймає індапамід 2,5 мг",
                    foundation: "Подвійна комбінація БКК і тіазидоподібного діуретика рекомендована пацієнтам старше 55 років Британськими рекомендаціями з лікування АГ — NICE 2019 (National Institute for Health and Care Excellence. Hypertension in adults: diagnosis and management. NICE Guideline 136. August, 2019)"
                },
                {
                    dataId: "game-pharm-preductal",
                    sadImgSrc: "images/preductal-sad.png",
                    happyImgSrc: "images/preductal-happy.png",
                    age: "<b>Вік:</b> 55 років",
                    arterialPressure: "<b>АТ:</b> 120/90",
                    diagnosis: "<b>Діагноз:</b> ІХС, стенокардія.",
                    therapy: "<b>Терапія:</b> Бісопролол 5 мг, Амлодипін, Молсидомін 2 мг",
                    otherData: "<b>Інші дані:</b> Скаржиться на біль за грудиною при фізичному навантаженні",
                    foundation: "В лікуванні ІХС, а точніше, за новими рекомендаціями Європейського товариства кардіологів 2019 року, — хронічного коронарного синдрому, не існує універсального визначення оптимальної терапії у пацієнтів з хронічним коронарним синдромом, препарати повинні бути підібрані індивідуально для кожного пацієнта, залежно від його профілю та побажань. Для пацієнта наступним кроком може бути призначення триметазидину. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes European Heart Journal (2019) 00, 171. Представлена таблиця та цитати із рекомендацій. doi: 10.1093/eurheartj/ehz425.",
                },
                {
                    dataId: "game-pharm-coraxan",
                    sadImgSrc: "images/coraxan-sad.png",
                    happyImgSrc: "images/coraxan-happy.png",
                    age: "<b>Вік:</b> 60 років",
                    arterialPressure: "<b>АТ:</b> 110/70",
                    diagnosis: "<b>Діагноз:</b> ІХС, СН",
                    therapy: "<b>Терапія:</b> карведілол 6, 25,  Трипліксам 5/1,25/10 мг",
                    otherData: "<b>Інші дані:</b> Приєдналися симптоми - задишка та втома, пастозність гомілок. У пацієнта синусовий ритм, ЧСС 75.",
                    foundation: "В лікуванні ІХС, а точніше, за новими рекомендаціями Європейського товариства кардіологів 2019 року,  - хронічного коронарного синдрому для пацієнта із супутньою та СН, до бета-блокаторів рекомендовано додати івабрадин. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes European Heart Journal (2019) 00, 171. Представлена таблиця та цитати із рекомендацій. doi:10.1093/eurheartj/ehz425. page 434",
                },
                {
                    dataId: "game-pharm-b-prestarium",
                    sadImgSrc: "images/prestarium-sad.png",
                    happyImgSrc: "images/prestarium-happy.png",
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
                        this.sadMood = false;
                        this.wrongChoice = false;
                        this.removeId = id;
                    } else {
                        this.happyMood = false;
                        this.sadMood = true;
                        this.correctChoice = false;
                        this.wrongChoice = thumb.active;
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
            this.sadMood = true;
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
