import telebot
from telebot.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

TOKEN = '7929962047:AAG3Ku-NlryaBhnIJ3A_zzHqj5rle1tq-as'  # Замените на свой токен
bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def start_handler(message):
    username = message.from_user.username or message.from_user.first_name

    # Создание клавиатуры с 3 кнопками
    markup = ReplyKeyboardMarkup(resize_keyboard=True)

    menu_button = KeyboardButton(
        text="🍔 Открыть меню доставкиииии",
        web_app=WebAppInfo(url="https://jahandev-12.github.io/telegram-bot-1/")  # Замените на ваш WebApp URL
    )
    about_button = KeyboardButton(text="ℹ️ О нас")
    dishes_info_button = KeyboardButton(text="📋 Меню")

    markup.add(menu_button)
    markup.add(dishes_info_button, about_button)  # 2 кнопки в одном ряду

    bot.send_message(
        message.chat.id,
        f"Добро пожаловать, {username}! 👋\n\nВыберите действие ниже:",
        reply_markup=markup
    )


# Обработка кнопки "О нас"
@bot.message_handler(func=lambda msg: msg.text == "ℹ️ О нас")
def about_us_handler(message):
    about_text = (
        "📍 *О нас:*\n\n"
        "Мы — уютное кафе доставки, где каждое блюдо готовится с любовью. ❤️\n"
        "⏰ Время работы: 10:00–23:00\n"
        "📞 Телефон: +998 90 123 45 67\n"
        "🌐 Сайт: https://ваш_сайт.uz"
    )
    bot.send_message(message.chat.id, about_text, parse_mode='Markdown')


# Обработка кнопки "Меню"
@bot.message_handler(func=lambda msg: msg.text == "📋 Меню")
def menu_handler(message):
    menu_text = (
        "*📋 Наше меню:*\n\n"
        "🍕 *Пицца Маргарита* — 45 000 сум\n"
        "🥩 *Шашлык из говядины* — 65 000 сум\n"
        "🍔 *Чизбургер* — 40 000 сум\n"
        "🥗 *Цезарь-салат* — 35 000 сум\n"
        "🥤 *Напитки* — от 10 000 сум\n\n"
        "_Все блюда свежие и вкусные! Заказывайте через кнопку выше._"
    )
    bot.send_message(message.chat.id, menu_text, parse_mode='Markdown')


bot.remove_webhook()
bot.polling(non_stop=True)
