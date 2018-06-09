class AddTextToRequests < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :body, :text
  end
end
