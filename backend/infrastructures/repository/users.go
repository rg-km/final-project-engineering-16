package repository

import (
	"database/sql"
	"time"

	middleware "github.com/rg-km/final-project-engineering-16/backend/app/middleware"
	domains "github.com/rg-km/final-project-engineering-16/backend/domains"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) domains.UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (domains.User, error) {
	sqlStmt := `SELECT 
	u.id,
	u.fullname,
	u.address,
	u.email,
	u.phone_number,
	u.verified_date,
	ur.name
	FROM users u INNER JOIN user_roles ur ON u.role_id = ur.id WHERE u.id = ?`

	user := domains.User{}

	row := u.db.QueryRow(sqlStmt, id)
	err := row.Scan(
		&user.ID,
		&user.Fullname,
		&user.Address,
		&user.Email,
		&user.PhoneNumber,
		&user.Verified,
		&user.Role,
	)

	if err != nil {
		return domains.User{}, err
	}

	return user, nil
}

func (u *UserRepository) Login(email string, password string) (domains.User, error) {
	sqlStmt := `SELECT 
	fullname,
	email
	FROM users 
	WHERE email = ? AND password = ?`

	user := domains.User{}

	row := u.db.QueryRow(sqlStmt, email, password)
	err := row.Scan(
		&user.Fullname,
		&user.Email,
	)

	if err != nil {
		return domains.User{}, err
	}

	return user, nil
}

func (u *UserRepository) Create(fullname, email, password, address, phoneNumber string, role int) (*domains.User, error) {
	var user domains.User
	passEncrypt, err := middleware.HashPassword(password)

	if err != nil {
		return &domains.User{}, err
	}

	sqlStmt := `
	INSERT INTO users(fullname, address, email, password, verified_date, role_id, phone_number, picture_profile, created_at, updated_at) 
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`

	err = u.db.QueryRow(sqlStmt, fullname, address, email, passEncrypt, "", role, phoneNumber, "", time.Now(), time.Now()).Scan(
		&user.Fullname,
		&user.Address,
		&user.Email,
		&user.Password,
		&user.Verified,
		&user.Role,
		&user.PhoneNumber,
		&user.Photo,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		return &domains.User{}, err
	}

	return &domains.User{}, nil
}

func (u *UserRepository) CheckAccountEmail(email string) bool {
	sqlSmt := `SELECT email FROM users WHERE email = ?`

	err := u.db.QueryRow(sqlSmt, email).Scan(&email)
	if err != nil {
		if err != sql.ErrNoRows {
			return false
		}
	}

	return true
}
