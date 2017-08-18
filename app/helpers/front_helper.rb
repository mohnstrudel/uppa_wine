module FrontHelper

  def get_bottle_class(index)
    case index
    when 0
      return "firstBottle"
    when 1
      return "secondBottle"
    when 2
      return "thirdBottle"
    when 3
      return "fourthBottle"
    when 4
      return "fifthBottle"
    when 5
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
end
