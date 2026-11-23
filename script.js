// Базовий список із 20 книг з розгорнутими анотаціями
const defaultBooks = [
    {
        id: 1,
        title: "Мовчазна пацієнтка",
        author: "Алекс Майклідіс",
        genre: "Трилер",
        timeCategory: "weekend",
        hours: 5.5,
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa5F3Dg3wVI6o5FeW3f8enUAu3lp1LPxYvyNk-ugndiVkZQl_i",
        desc: "Життя талановитої художниці Алісії Беренсон здається бездоганним: вона одружена з відомим фешн-фотографом, живе у розкішному будинку в престижному районі Лондона і має все, про що можна мріяти. Проте одного вечора, коли її чоловік Габріель повертається додому зі зйомок, Алісія п'ять разів стріляє йому в обличчя — і з тієї миті не вимовляє жодного слова.\n\nЇї відмова говорити перетворює звичайну сімейну трагедію на загадку, яка захоплює уяву всієї країни. Кримінальний психотерапевт Тео Фабер роками чекав на можливість попрацювати з Алісією. Він сповнений рішучості змусити її заговорити, але чим глибше він занурюється в її минуле, тим більше розуміє, що правда може знищити їх обох.",
        reviews: [
            { score: 5, text: "Проковтнув за два вечори, фінал просто непередбачуваний!", date: "2026-11-01" },
            { score: 5, text: "Тримає в напрузі до останньої сторінки.", date: "2026-11-05" }
        ]
    },
    {
        id: 2,
        title: "Квіти для Елджернона",
        author: "Деніел Кіз",
        genre: "Фантастика",
        timeCategory: "weekend",
        hours: 4.5,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_15840.jpg",
        desc: "Тридцятидворічний Чарлі Гордон має серйозну розумову відсталість, але понад усе на світі хоче стати розумним, щоб мати справжніх друзів і розуміти світ навколо. Він погоджується взяти участь у ризикованому науковому експерименті з хірургічного підвищення інтелекту, який до цього успішно провели лише на лабораторній миші на ім'я Елджернон.\n\nОперація проходить блискуче: IQ Чарлі стрімко зростає, перетворюючи його на справжнього генія. Проте разом із розумом приходить болісне усвідомлення жорстокості людей, яких він вважав друзями, а поведінка миші Елджернона починає викликати тривожні передчуття щодо майбутнього самого Чарлі.",
        reviews: [
            { score: 5, text: "Дуже сильна емоційна книга, рекомендую кожному.", date: "2026-10-28" }
        ]
    },
    {
        id: 3,
        title: "Тіні забутих предків",
        author: "Михайло Коцюбинський",
        genre: "Класика",
        timeCategory: "evening",
        hours: 2.5,
        cover: "https://brustury.com.ua/wp-content/uploads/2023/11/Tiny.jpg",
        desc: "Історія великого і трагічного кохання Івана та Марічки з двох ворогуючих гуцульських родів Палійчуків та Гутенюків. Події розгортаються серед дикої, містичної природи Карпат, де реальність тісно переплітається з давніми віруваннями, мавками, чугайстрами та мольфарами.\n\nПовість вражає своєю поетичною мовою, глибоким психологізмом і неповторним колоритом, змушуючи прожити разом із героями кожну мить радості, втрати та туги.",
        reviews: [
            { score: 5, text: "Неймовірна карпатська атмосфера, читається на одному диханні за вечір.", date: "2026-11-02" },
            { score: 5, text: "Шедевр української класики, який відкривається по-новому в дорослому віці.", date: "2026-11-10" }
        ]
    },
    {
        id: 4,
        title: "Атомні звички",
        author: "Джеймс Клір",
        genre: "Психологія",
        timeCategory: "weekend",
        hours: 5.0,
        cover: "https://knigoman.com.ua/image/cache/catalog/products/2023/5/atomn-zvichki-legkiy--perevreniy-sposb-nabuti-korisnih-zvichok--pozbutisya-zvichok-shkdlivih--kopiya_5278-512x512.jpg",
        desc: "Чи замислювалися ви, чому величезні зусилля часто не дають результату, а крихітні щоденні дії здатні повністю змінити життя? Джеймс Клір пропонує науково обґрунтовану систему формування корисних звичок і позбавлення від шкідливих.\n\nАвтор доводить, що для успіху не потрібна надлюдська сила волі — достатньо змінити середовище та покращувати свої дії лише на 1% щодня. Книга сповнена практичних прикладів із бізнесу, спорту та психології, які легко застосувати вже з наступного ранку.",
        reviews: [
            { score: 5, text: "Дуже структуровано, багато порад одразу застосував у житті.", date: "2026-10-19" }
        ]
    },
    {
        id: 5,
        title: "Проєкт «Аве Марія»",
        author: "Енді Вейр",
        genre: "Фантастика",
        timeCategory: "long",
        hours: 9.5,
        cover: "https://sens.in.ua/content/images/7/466x690l95mc0/proiekt-ave-mariia.-endi-veir-25984811005128.webp",
        desc: "Райленд Грейс прокидається після тривалої коми на борту космічного корабля за світлові роки від Землі. Він не пам'ятає навіть власного імені, а поруч у кріслах виявляє тіла двох загиблих членів екіпажу. Поступово уривки спогадів повертаються, і чоловік усвідомлює: він — єдиний, хто вижив у відчайдушній місії з порятунку Сонця від загадкового космічного мікроорганізму.\n\nНа нього чекає складне наукове розслідування в умовах глибокого космосу, де винахідливість, гумор і несподівана зустріч виявляться важливішими за будь-які інструкції.",
        reviews: [
            { score: 5, text: "Навіть краще за «Марсіянина»! Неможливо відірватися.", date: "2026-11-01" },
            { score: 5, text: "Неймовірна історія про дружбу та науку.", date: "2026-11-12" }
        ]
    },
    {
        id: 6,
        title: "Людина в пошуках справжнього сенсу",
        author: "Віктор Франкл",
        genre: "Психологія",
        timeCategory: "evening",
        hours: 2.8,
        cover: "https://bookinstein.ua/files/resized/products/id100717.600x800.png.webp",
        desc: "Одна з найвпливовіших книг ХХ століття, написана відомим австрійським психіатром Віктором Франклом. У першій частині автор без прикрас описує власний досвід виживання в нацистських концентраційних таборах, аналізуючи психологію в'язнів у нелюдських умовах.\n\nУ другій частині Франкл викладає основи логотерапії — методу психотерапії, згідно з яким головною рушійною силою людини є не прагнення до задоволення чи влади, а пошук сенсу життя. Навіть у найтемніші часи людина зберігає останню свободу — обирати власне ставлення до обставин.",
        reviews: [
            { score: 5, text: "Коротка, але надзвичайно глибока книга.", date: "2026-10-25" }
        ]
    },
    {
        id: 7,
        title: "І не лишилось жодного",
        author: "Агата Крісті",
        genre: "Трилер",
        timeCategory: "weekend",
        hours: 4.2,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/a/4/a458cb63b2fcd51bbdc90f2d182c7284.jpg",
        desc: "Десятеро абсолютно різних людей, не знайомих між собою, отримують запрошення провести вікенд у розкішному маєтку на відокремленому Солдатському острові. Проте замість гостинних господарів на них чекає загадковий голос із грамофонної платівки, який звинувачує кожного з гостей у вбивстві, за яке ніхто з них не поніс покарання.\n\nШторм відрізає острів від материка, а гості починають гинути один за одним точнісінько за сюжетом старої дитячої лічилки про десятьох солдатиків.",
        reviews: [
            { score: 5, text: "Еталонний детектив, читається на одному диханні.", date: "2026-11-08" }
        ]
    },
    {
        id: 8,
        title: "1984",
        author: "Джордж Орвелл",
        genre: "Фантастика",
        timeCategory: "weekend",
        hours: 6.0,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img_92430.jpg",
        desc: "Похмурий світ майбутнього, розділений між трьома тоталітарними наддержавами. Головний герой Вінстон Сміт працює в Міністерстві Правди, де щодня переписує старі газети, підганяючи історію під поточну лінію Партії. У кожній кімнаті встановлено телекран, а зі стін дивиться пильний погляд Старшого Брата.\n\nВінстон наважується на тихий бунт: заводить таємний щоденник і закохується в дівчину на ім'я Джулія, але система контролює не лише вчинки, а й думки громадян.",
        reviews: [
            { score: 5, text: "Класика, яка завжди актуальна.", date: "2026-10-15" }
        ]
    },
    {
        id: 9,
        title: "Тінь вітру",
        author: "Карлос Руїс Сафон",
        genre: "Фентезі",
        timeCategory: "long",
        hours: 10.0,
        cover: "https://static.yakaboo.ua/media/catalog/product/i/m/img525_1_1.jpg",
        desc: "Барселона, 1945 рік. У день свого десятиріччя Даніель Семпере разом із батьком потрапляє до таємничого місця в серці старого міста — Цвинтаря забутих книг. За традицією хлопчик має обрати одну книгу, яку берегтиме все життя. Його вибір падає на роман «Тінь вітру» невідомого автора Хуліана Каракса.\n\nНезабаром Даніель дізнається, що хтось методично розшукує і спалює всі вцілілі примірники книг Каракса, а сам автор оповитий похмурою таємницею кохання, зради і прокляття.",
        reviews: [
            { score: 5, text: "Неймовірна готична атмосфера Барселони!", date: "2026-11-14" }
        ]
    },
    {
        id: 10,
        title: "Старий і море",
        author: "Ернест Хемінгуей",
        genre: "Класика",
        timeCategory: "evening",
        hours: 2.2,
        cover: "https://sens.in.ua/content/images/5/470x670l95mc0/stariy-i-more-99037443658970.webp",
        desc: "Вісімдесят чотири дні поспіль старий кубинський рибалка Сантьяго повертається з моря без жодної рибини. На вісімдесят п'ятий день він вирушає далеко у Гольфстрім, де на його гачок потрапляє гігантський марлін, більший за сам човен.\n\nТри доби триває виснажливий, але сповнений взаємної поваги поєдинок людини і морського велетня. Це притча про гідність, витривалість і незламність духу перед обличчям непереборних сил природи.",
        reviews: [
            { score: 4, text: "Лаконічно, сильно, ідеально на один вечір.", date: "2026-11-03" }
        ]
    },
    {
        id: 11,
        title: "Служниця",
        author: "Фріда Мак-Фадден",
        genre: "Трилер",
        timeCategory: "weekend",
        hours: 5.2,
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThxVnqldrZ_kfVvjB3PnrhpGEzPjDKOT_MHbvwhpFs9cSwBZ9w",
        desc: "Після виходу з в'язниці Міллі відчайдушно шукає роботу і дивом отримує місце хатньої робітницею з проживанням у розкішному маєтку родини Вінчестерів. Вона прибирає будинок, готує вишукані страви і забирає доньку господарів зі школи, радіючи власному порятунку.\n\nПроте дуже скоро стає зрозуміло, що з господинею дому Ніною коїться щось дивне, а кімната на горищі, яку виділили Міллі, замикається лише ззовні.",
        reviews: [
            { score: 5, text: "Неможливо відірватися, сюжетні повороти на кожному кроці!", date: "2026-11-16" }
        ]
    },
    {
        id: 12,
        title: "Кафе на краю світу",
        author: "Джон Стрелекі",
        genre: "Психологія",
        timeCategory: "evening",
        hours: 2.5,
        cover: "https://kraschiknygi.com/content/images/50/389x600l80mc0/34803400771927.webp",
        desc: "Втомлений від нескінченної офісної рутини Джон вирушає у відпустку, але застрягає в нічному заторі на трасі. Намагаючись об'їхати корки, він збивається з дороги і натрапляє на затишне придорожнє кафе «Чому ви тут?».\n\nНа звороті звичайного меню Джон бачить три дивні запитання: «Чому ви тут?», «Чи боїтеся ви смерті?» та «Чи задоволені ви своїм життям?». Несподівана розмова з офіціанткою та кухарем перевертає його уявлення про успіх і власне покликання.",
        reviews: [
            { score: 4, text: "Легка і надихаюча книга після важкого робочого дня.", date: "2026-11-07" }
        ]
    },
    {
        id: 13,
        title: "451° за Фаренгейтом",
        author: "Рей Бредбері",
        genre: "Фантастика",
        timeCategory: "evening",
        hours: 3.0,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img599_4_23.jpg",
        desc: "451 градус за Фаренгейтом — температура, за якої займається і горить папір. У світі майбутнього, де панує культ швидких розваг та інтерактивного телебачення, книги оголошено поза законом як джерело небезпечних думок.\n\nГай Монтег працює пожежником — його обов'язок не гасити пожежі, а спалювати знайдені бібліотеки. Але зустріч із дивакуватою сусідкою Кларіс змушує його вперше відкрити врятовану від вогню книгу.",
        reviews: [
            { score: 5, text: "Читається за один вечір, залишає сильний післясмак.", date: "2026-10-30" }
        ]
    },
    {
        id: 14,
        title: "Портрет Доріана Грея",
        author: "Оскар Вайльд",
        genre: "Класика",
        timeCategory: "weekend",
        hours: 5.0,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/i/m/img864_2_41.jpg",
        desc: "Надзвичайно вродливий юнак Доріан Грей позує для портрета своєму другові, художнику Безілу Голворду. Під впливом цинічних промов лорда Генрі про швидкоплинність молодості та краси Доріан вимовляє фатальне бажання: нехай старіє і спотворюється його зображення на полотні, а сам він назавжди залишиться юним.\n\nБажання здійснюється. Доріан поринає у вир розпусти та жорстокості, залишаючись бездоганно гарним, тоді як прихований на горищі портрет перетворюється на жахливе дзеркало його душі.",
        reviews: [
            { score: 5, text: "Блискучі діалоги та містичний сюжет.", date: "2026-11-11" }
        ]
    },
    {
        id: 15,
        title: "Океан у кінці вулиці",
        author: "Ніл Ґейман",
        genre: "Фентезі",
        timeCategory: "evening",
        hours: 3.0,
        cover: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/3/6/36_47.jpg",
        desc: "Чоловік середнього віку повертається до рідного містечка в Сассексі на похорон і приходить до старого фермерського ставка, який його подруга дитинства Летті Гемпсток називала океаном.\n\nТут до нього повертаються спогади про події сорокарічної давнини, коли йому було сім років і в їхньому будинку оселилася зловісна гувернантка, яка пробудила давню темну силу з іншого світу. Це щемлива темна казка про силу дитячої дружби, пам'ять і магію.",
        reviews: [
            { score: 5, text: "Дуже затишна й водночас моторошна історія.", date: "2026-11-15" }
        ]
    },
    {
        id: 16,
        title: "Дюна",
        author: "Френк Герберт",
        genre: "Фантастика",
        timeCategory: "long",
        hours: 14.0,
        cover: "https://s9.vcdn.biz/static/f/12368875211/ChatGPT_Image_3_%D1%81%D0%B5%D1%80%D0%BF._2026_%D1%80._13_55_31.png",
        desc: "Далеке майбутнє, де галактичною імперією правлять великі феодальні доми. Шляхетний рід Атрідів отримує в управління пустельну планету Арракіс — єдине місце у Всесвіті, де видобувають «прянощі» (меланж), без яких неможливі міжзоряні перельоти.\n\nПроте призначення виявляється пасткою, підлаштованою заклятими ворогами. Юному Полу Атріду доведеться вижити серед безкраїх пісків, гігантських піщаних червів і таємничого народу фременів, щоб виконати своє пророче призначення.",
        reviews: [
            { score: 5, text: "Шедевр світової фантастики, який варто прочитати кожному.", date: "2026-11-04" }
        ]
    },
    {
        id: 17,
        title: "Витончене мистецтво забивати на все",
        author: "Марк Менсон",
        genre: "Психологія",
        timeCategory: "weekend",
        hours: 4.0,
        cover: "https://books.kiev.ua/image/cache/webp/catalog/6130912590-vitonchene-mistetstvo-zabivati-800x800.webp",
        desc: "Сучасна культура нав'язує нам ідею постійного позитиву: будь щасливим, усміхайся, досягай більшого. Відомий блогер Марк Менсон пропонує прямо протилежний підхід: визнати, що життя складається з проблем, а наше завдання — просто обрати ті проблеми, які нам справді хочеться вирішувати.\n\nНаписана з гострим гумором та без зайвих ілюзій, ця книга допомагає розставити здорові життєві пріоритети і перестати витрачати нерви на дрібниці.",
        reviews: [
            { score: 4, text: "З гумором і без банальних порад про успішний успіх.", date: "2026-10-22" }
        ]
    },
    {
        id: 18,
        title: "Сяйво",
        author: "Стівен Кінг",
        genre: "Фентезі",
        timeCategory: "long",
        hours: 10.5,
        cover: "https://upload.wikimedia.org/wikipedia/uk/5/59/%D0%A1%D1%8F%D0%B9%D0%B2%D0%BE.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        desc: "Колишній вчитель Джек Торранс, намагаючись врятувати шлюб і написати п'єсу, влаштовується зимовим доглядачем у розкішний, але похмурий готель «Оверлук» високо в горах Колорадо. Разом із дружиною Венді та п'ятирічним сином Денні він залишається там на всю зиму, відрізаний сніговими заметами від цивілізації.\n\nМаленький Денні володіє телепатичним даром «сяйва» і першим відчуває, що порожні коридори готелю переповнені зловісними привидами, які поступово захоплюють розум його батька.",
        reviews: [
            { score: 5, text: "Книга набагато глибша і страшніша за фільм!", date: "2026-11-18" }
        ]
    },
    {
        id: 19,
        title: "Зелена миля",
        author: "Стівен Кінг",
        genre: "Класика",
        timeCategory: "long",
        hours: 8.5,
        cover: "https://upload.wikimedia.org/wikipedia/uk/4/48/The_Green_Mile._Stephen_King.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        desc: "1932 рік. Пол Еджкомб працює начальником блоку «Е» у в'язниці «Холодна гора», де утримують засуджених до страти на електричному стільці, а коридор до камери страти називають «Зеленою милею».\n\nОдного дня до блоку привозять Джона Коффі — велетня зі зростом понад два метри, засудженого за жорстоке вбивство двох дівчаток. Проте за страхітливою зовнішністю ховається лагідна дитяча душа та надприродний дар зцілювати смертельні хвороби, що змушує наглядачів засумніватися в його провині.",
        reviews: [
            { score: 5, text: "Книга, яка розбиває серце і змушує замислитися.", date: "2026-11-19" }
        ]
    },
    {
        id: 20,
        title: "Сім чоловіків Евелін Г'юґо",
        author: "Тейлор Дженкінс Рід",
        genre: "Класика",
        timeCategory: "weekend",
        hours: 6.5,
        cover: "https://readeat.com/storage/app/uploads/public/666/170/c8a/crp-contain_322x520_666170c8a2253716550493.jpg",
        desc: "Загадкова і скандальна кіноікона старого Голлівуду Евелін Г'юґо, якій виповнилося сімдесят дев'ять років, нарешті готова розповісти правду про своє блискуче, але сповнене таємниць життя. Для написання відвертої біографії вона несподівано обирає маловідому журналістку Монік Грант.\n\nСлухаючи історію про шлях Евелін від бідних кварталів до вершини слави та її сім шлюбів, Монік поступово розуміє, що їхні долі пов'язані трагічною таємницею.",
        reviews: [
            { score: 5, text: "Як справжня біографія кінозірки! Дуже захоплює.", date: "2026-11-20" }
        ]
    }
];

// Завантаження збережених даних з localStorage
let books = JSON.parse(localStorage.getItem('nightReadBooks_v3')) || defaultBooks;
let currentBookId = null;

function saveBooks() {
    localStorage.setItem('nightReadBooks_v3', JSON.stringify(books));
}

function getAverageRating(book) {
    if (!book.reviews.length) return 0;
    const sum = book.reviews.reduce((acc, r) => acc + r.score, 0);
    return (sum / book.reviews.length).toFixed(1);
}

function getFallbackCover(title) {
    return `https://placehold.co/300x450/402626/FCEEED?text=${encodeURIComponent(title)}`;
}

// Перемикання вкладок навігації
function switchTab(tabName) {
    document.querySelectorAll('.section-view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');

    const sidebar = document.getElementById('sidebarFilters');
    sidebar.style.display = (tabName === 'catalog') ? 'block' : 'none';

    if (tabName === 'top') renderTopTable();
}

// Відображення карток книг у каталозі
function renderBooks() {
    const grid = document.getElementById('booksGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;
    const time = document.getElementById('timeFilter').value;
    const sort = document.getElementById('sortFilter').value;

    let filtered = books.filter(b => {
        const matchSearch = b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
        const matchGenre = (genre === 'all') || (b.genre === genre);
        const matchTime = (time === 'all') || (b.timeCategory === time);
        return matchSearch && matchGenre && matchTime;
    });

    filtered.sort((a, b) => {
        if (sort === 'rating') return getAverageRating(b) - getAverageRating(a);
        if (sort === 'votes') return b.reviews.length - a.reviews.length;
        if (sort === 'time') return a.hours - b.hours;
        return 0;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-muted);">За вашим запитом книг не знайдено. Спробуйте змінити фільтри.</p>';
        return;
    }

    filtered.forEach(book => {
        const avg = getAverageRating(book);
        const card = document.createElement('div');
        card.className = 'book-card';
        card.onclick = () => openBookModal(book.id);
        card.innerHTML = `
            <div>
                <div class="book-cover-wrap">
                    <img class="book-cover-img" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='${getFallbackCover(book.title)}';">
                </div>
                <div class="book-meta">
                    <span>${book.genre}</span>
                    <span>⏱ ~${book.hours} год</span>
                </div>
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-desc">${book.desc}</div>
            </div>
            <div class="book-footer">
                <div class="rating-badge">
                    <span class="star-icon">★</span> ${avg} <span style="font-size:0.8rem; color:var(--text-muted);">(${book.reviews.length})</span>
                </div>
                <button type="button" class="btn-open" onclick="event.stopPropagation(); openBookModal(${book.id})">Оцінити</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = 'all';
    document.getElementById('timeFilter').value = 'all';
    document.getElementById('sortFilter').value = 'rating';
    renderBooks();
}

// Таблиця Топ-10 книг 2026
function renderTopTable() {
    const tbody = document.getElementById('topTableBody');
    const top10 = [...books]
        .sort((a, b) => getAverageRating(b) - getAverageRating(a))
        .slice(0, 10);

    tbody.innerHTML = '';
    top10.forEach((book, index) => {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.onclick = () => openBookModal(book.id);
        row.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td><img class="table-thumb" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='${getFallbackCover(book.title)}';"></td>
            <td><strong>${book.title}</strong></td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>~${book.hours} год</td>
            <td>${book.reviews.length}</td>
            <td><span class="star-icon">★</span> <strong>${getAverageRating(book)}</strong></td>
        `;
        tbody.appendChild(row);
    });
}

// Модальне вікно книги
function openBookModal(id) {
    currentBookId = id;
    const book = books.find(b => b.id === id);
    if (!book) return;

    const modalCover = document.getElementById('modalCover');
    modalCover.src = book.cover;
    modalCover.onerror = function() {
        this.onerror = null;
        this.src = getFallbackCover(book.title);
    };

    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalGenre').textContent = book.genre;
    document.getElementById('modalTime').textContent = `⏱ Час читання: ~${book.hours} год`;
    document.getElementById('modalRating').textContent = `★ ${getAverageRating(book)} / 5`;
    document.getElementById('modalFullDesc').textContent = book.desc;

    renderModalReviews(book);
    document.getElementById('bookModal').classList.add('open');
}

function renderModalReviews(book) {
    const list = document.getElementById('modalReviewsList');
    document.getElementById('reviewsCount').textContent = book.reviews.length;
    list.innerHTML = '';

    book.reviews.slice().reverse().forEach(rev => {
        const item = document.createElement('div');
        item.className = 'review-item';
        const stars = '★'.repeat(rev.score) + '☆'.repeat(5 - rev.score);
        item.innerHTML = `
            <div class="review-header">
                <span>Анонімний читач • <span class="star-icon">${stars}</span></span>
                <span>${rev.date}</span>
            </div>
            <div>${rev.text || '<em>Оцінка без текстового коментаря</em>'}</div>
        `;
        list.appendChild(item);
    });
}

function submitReview(event) {
    event.preventDefault();
    const book = books.find(b => b.id === currentBookId);
    if (!book) return;

    const score = parseInt(document.getElementById('userScore').value);
    const text = document.getElementById('userComment').value.trim();
    const today = new Date().toISOString().split('T')[0];

    book.reviews.push({ score, text, date: today });
    saveBooks();

    document.getElementById('userComment').value = '';
    document.getElementById('modalRating').textContent = `★ ${getAverageRating(book)} / 5`;
    renderModalReviews(book);
    renderBooks();
    renderTopTable();
}

function closeModal(event) {
    if (event.target.id === 'bookModal') closeModalDirect();
}

function closeModalDirect() {
    document.getElementById('bookModal').classList.remove('open');
}

// Початковий запуск
renderBooks();
