class CreateSnippets < ActiveRecord::Migration
  def change
    create_table :snippets do |t|
      t.string :title
      t.text :description
      t.text :content
      t.integer :language_id
      t.integer :user_id
      t.string :slug
      t.string :source_link

      t.timestamps
    end
  end
end
