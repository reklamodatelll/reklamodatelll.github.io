document.addEventListener('DOMContentLoaded', function() {
       // Мобильное меню
       const menuToggle = document.getElementById('menuToggle');
       const mainNav = document.getElementById('mainNav');
       const menu = document.querySelector('.menu');
       
       menuToggle.addEventListener('click', function() {
           menu.classList.toggle('active');
       });
       
       // Плавная прокрутка к разделам
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function(e) {
               e.preventDefault();
               
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);
               
               if (targetElement) {
                   window.scrollTo({
                       top: targetElement.offsetTop - 70,
                       behavior: 'smooth'
                   });
                   
                   // Закрыть мобильное меню после клика
                   menu.classList.remove('active');
               }
           });
       });
       
       // Обработка отправки формы
       const contactForm = document.getElementById('contactForm');
       if (contactForm) {
           contactForm.addEventListener('submit', function(e) {
               e.preventDefault();
               alert('Спасибо за ваше сообщение! В реальном проекте здесь была бы отправка данных на сервер.');
               contactForm.reset();
           });
       }
   });
