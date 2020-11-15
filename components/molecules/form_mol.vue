<template>
  <form name="contact" method="POST" action="/thanks" class="mx-6 md:mx-32 lg:mx-64 my-16" data-netlify="true">
  <h1 class="text-2xl mb-4 text-teal-600 border-darkColor1 border-l-2 pl-4">お問い合わせ</h1>
  <p class="mb-8 text-gray-800">気軽にお問い合わせください。</p>
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/1">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
        名前 *
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" name="name" type="text" placeholder="山田 太郎" required>
    </div>
  </div>
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/1">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        メールアドレス *
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name="email" type="email" placeholder="info@example.com" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,5}$[^\x22\x26\x27\x3C\x3E]*" required>
    </div>
  </div>
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/1">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-inquiry">
        お問い合わせ内容 *
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-inquiry" name="inquiry" cols="10" rows="10" required></textarea>
    </div>
  </div>
  <p>
    <button type="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">送信</button>
  </p>
  </form>
</template>