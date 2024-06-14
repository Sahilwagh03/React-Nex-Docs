import React from 'react'
import { featuresData } from './utils/featuresData'
import FeaturesCard from './components/FeaturesCard'
const Features = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* <div class="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1">
        <div class="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
          <div class="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
            <svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-pink-500">
              <path d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="text-base font-semibold">Themeable</p>
        </div>
        <div class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
          <p class="font-normal text-base text-default-500">Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.</p>
        </div>
      </div>
      <div class="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1">
        <div class="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
          <div class="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
            <svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-pink-500">
              <path d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
            </svg>
          </div>
          <p class="text-base font-semibold">Fast</p>
        </div>
        <div class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
          <p class="font-normal text-base text-default-500">Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.</p>
        </div>
      </div>
      <div class="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1">
        <div class="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
          <div class="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
            <svg aria-hidden="true" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-pink-500">
              <path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z" fill="currentColor"></path>
            </svg>
          </div>
          <p class="text-base font-semibold">Light &amp; Dark UI</p>
        </div>
        <div class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
          <p class="font-normal text-base text-default-500">Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.</p>
        </div>
      </div>
      <div class="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1">
        <div class="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
          <div class="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
            <svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-pink-500">
              <path d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path d="M17.244 18.25h.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </div>
          <p class="text-base font-semibold">Unique DX</p>
        </div>
        <div class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
          <p class="font-normal text-base text-default-500">NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.</p>
        </div>
      </div> */}

      {
        featuresData.map(({ title, icon, description }, index) => (
          <FeaturesCard  title={title} icon={icon} description={description} key={index}/>
        ))
      }
    </div>
  )
}

export default Features