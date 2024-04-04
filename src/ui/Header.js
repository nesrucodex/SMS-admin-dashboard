export function Header({ title, img }) {
  
  return `<header class="h-[5rem] bg-stone-100 flex items-center pl-7 gap-5 border-b">
        ${img && `<img src=${img.src} alt=${img.alt} class='size-[3rem]'>`}
        <h1 class="text-xl uppercase text-stone-700 tracking-wide font-semibold ">${title}</h1>
    </header>`;
}
