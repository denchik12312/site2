// const container = document.querySelector('.update-content');

// function updateScrollbar() {
//   const contentHeight = container.scrollHeight;
//   const containerHeight = container.offsetHeight;

//   const thumbHeight = Math.max((containerHeight / contentHeight) * containerHeight, 30); // Устанавливаем минимальную высоту ползунка 30px

//   const thumbStyle = `
//     .update-content::-webkit-scrollbar-thumb {
//       height: ${thumbHeight}px;
//     }
//   `;

//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = thumbStyle;
//   document.head.appendChild(styleSheet);
// }

// updateScrollbar();
// container.addEventListener('scroll', updateScrollbar);
// window.addEventListener('resize', updateScrollbar);
// const container2 = document.querySelector('.update-content');

// function updateScrollbarTrackHeight() {
//   const contentHeight = container.scrollHeight;
//   const containerHeight = container.offsetHeight;

//   const trackHeight = Math.max(containerHeight / contentHeight * 10, 100); // Изменяем высоту фона в зависимости от прокрутки

//   // Создаем стиль для динамического обновления высоты фона
//   const style = `
//     .update-content::-webkit-scrollbar-track {
//       height: ${trackHeight}px;
//     }
//   `;

//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = style;
//   document.head.appendChild(styleSheet);
// }

// updateScrollbarTrackHeight();
// container.addEventListener('scroll', updateScrollbarTrackHeight);
// window.addEventListener('resize', updateScrollbarTrackHeight);