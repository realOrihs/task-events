/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', function () {
        btn.remove();
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((elem) => {
        const li = document.createElement('li');
        ul.append(li);
        li.textContent = elem;
        li.addEventListener('mouseover', function () {
            li.title = li.textContent;
        });
    });

    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:
      <a href="https://tensor.ru/">tensor</a>
      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.append('tensor');
    a.addEventListener(
        'click',
        function (event) {
            event.target.textContent =
                event.target.textContent + ' https://tensor.ru/';
        },
        { once: true },
    );

    document.body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:
      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>
      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>Пункт</li>';
    document.body.append(ul);
    const btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    document.body.append(btn);

    ul.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName != 'LI') return;
        target.textContent += '!';
    });

    btn.addEventListener('click', function (event) {
        ul.innerHTML += '<li>Пункт</li>';
    });
}
