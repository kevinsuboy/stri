# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    validates :username,:email,:password_digest,:session_token, presence: true
    validates :username,:email,:session_token,uniqueness: true
    validates :password,length: {minimum:6}, allow_nil: true
    attr_reader :password
    has_many :routes
    has_many :activities
    after_initialize :ensure_session_token
    #! SPIRE
    def self.find_by_credentials(uname,pw)
        user = User.find_by(username: uname)
        user && user.is_password?(pw) ? user : nil
    end
    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end
    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end
    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
    private
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end
end
