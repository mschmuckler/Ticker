class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :avatar, default_url: "default-avatar2.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_reader :password

  has_many :holdings
  has_many :articles

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return @user if @user && BCrypt::Password.new(@user.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
end
