module FrontHelper

  def get_bottle_class(index)
    case index
    when 0
      return "upperBlock"
    when 1
      return "firstBottle"
    when 2
      return "secondBottle"
    when 3
      return "thirdBottle"
    when 4
      return "fourthBottle"
    when 5
      return "fifthBottle"
    when 6
      return "sixthBottle"
    end
  end

  def image_tag_or_default(object, field, options = {})
    if object.send(field).present?
      return image_tag(object.send(field).url, class: options[:class])
    else
      return image_tag "bottles/second.png", class: options[:class]
    end
  end

  def render_menu
    if controller_name == 'vintages' && action_name == 'home'
      render partial: '/front/navigation/menu', is_black: true
    else
      render partial: '/front/navigation/menu'
    end
  end
end
