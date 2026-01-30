function showPage(pageId) {
      // Скрыть все страницы
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Показать нужную страницу
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    }




const descriptions = document.querySelectorAll('.description');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.description').forEach(desc => {
    desc.addEventListener('wheel', e => {
      e.preventDefault();
      desc.scrollTop += e.deltaY * 0.1;
    }, { passive: false });
  });
});



// Название книги → HTML страница книги
document.addEventListener("DOMContentLoaded", () => {
    const books = {
        "легкий способ выучить python": "books/book-python.html",
        "язык программирования c++": "books/book-c++.html",
        "html & xhtml. подробное руководство": "books/book-HTML & XHTML.html",
        "javascript и jquery": "books/book-Javascript и jQuery.html",
        "html и css": "books/book-HTML_и_CSS_разработка.html",
        "java": "books/book-Программирование на Java для начинающих.html"
    };

    const form = document.getElementById("searchForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = this.book.value.trim().toLowerCase();

        if (books[name]) {
            window.location.href = books[name];
        } else {
            alert("Книга не найдена");
        }
    });
});

