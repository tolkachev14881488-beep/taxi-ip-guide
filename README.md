# ИП для такси — сайт с оплатой и инструкцией (РБ)

Лендинг для помощи в открытии индивидуального предпринимателя для работы в такси в Республике Беларусь. Оплата через **bePaid**, после оплаты — доступ к пошаговой инструкции на сайте.

## Стек

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- Prisma + SQLite (dev) / PostgreSQL (production)
- bePaid Payment Widget

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка окружения

Скопируйте `.env.example` в `.env.local` и заполните переменные:

```bash
cp .env.example .env.local
```

| Переменная | Описание |
|------------|----------|
| `BEPAID_SHOP_ID` | ID магазина из личного кабинета bePaid |
| `BEPAID_SECRET_KEY` | Secret Key из личного кабинета bePaid |
| `BEPAID_TEST_MODE` | `true` для тестового режима |
| `PRODUCT_PRICE_BYN` | Цена в белорусских рублях (по умолчанию 49) |
| `NEXT_PUBLIC_SITE_URL` | Публичный URL сайта (HTTPS в production) |
| `DATABASE_URL` | `file:./dev.db` для SQLite |

### 3. База данных

```bash
npm run db:push
```

### 4. Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Настройка bePaid

1. Зарегистрируйте магазин на [bepaid.by](https://bepaid.by)
2. Получите **Shop ID** и **Secret Key** (используйте sandbox для тестов)
3. Укажите их в `.env.local`
4. В production задайте `NEXT_PUBLIC_SITE_URL` на ваш HTTPS-домен
5. Webhook URL: `https://ваш-домен.by/api/webhook/bepaid`

### Тестовые карты

Используйте тестовые данные из [документации bePaid Sandbox](https://docs.bepaid.by/en/).

### Локальная разработка webhook

bePaid не отправляет webhook на `localhost`. Варианты:

- **ngrok**: `ngrok http 3000` → укажите HTTPS-URL в `NEXT_PUBLIC_SITE_URL`
- Страница `/success` опрашивает статус заказа — при ручном подтверждении в sandbox может потребоваться webhook через ngrok

## Поток оплаты

1. Пользователь нажимает «Оплатить» на лендинге
2. `POST /api/checkout` создаёт заказ и payment token в bePaid
3. Редирект на виджет bePaid
4. После оплаты bePaid шлёт webhook → заказ помечается `paid`
5. Пользователь попадает на `/success?token=...` → `/instruction/[token]`

## Редактирование инструкции

Текст инструкции находится в [`content/instruction.md`](content/instruction.md). Отредактируйте файл — изменения появятся на странице инструкции.

## Деплой

### Vercel / VPS

1. Подключите PostgreSQL (Neon, Supabase):
   ```
   DATABASE_URL="postgresql://user:pass@host/db"
   ```
2. Задайте все переменные окружения
3. `npm run build && npm start`

**Важно:** SQLite не подходит для serverless (Vercel). Используйте PostgreSQL в production.

## Структура проекта

```
app/           — страницы и API routes
components/    — UI-компоненты лендинга
content/       — markdown-инструкция
lib/           — bePaid client, Prisma
prisma/        — схема БД
```

## Лицензия

Private. Все права защищены.
