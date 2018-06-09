class RequestsMailer < ApplicationMailer
  default from: 'Заявка на сайте Уппа Вина <customer-form@yandex.ru>'

  def notify_admin(request)
    @request = request
    @mail = Setting.first.email
    mail to: @mail, subject: "Новая заявка на сайте Уппа Вина"

  end
end
