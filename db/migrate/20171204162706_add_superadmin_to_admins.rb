class AddSuperadminToAdmins < ActiveRecord::Migration[5.1]
  def change
    add_column :admins, :superadmin, :boolean
  end
end
