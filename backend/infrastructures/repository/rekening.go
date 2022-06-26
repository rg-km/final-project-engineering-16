package repository

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-16/backend/domains"
)

type RekeningRepository struct {
	db *sql.DB
}

func NewRekeningRepository(db *sql.DB) domains.RekeningRepository {
	return &RekeningRepository{db: db}
}

func (r RekeningRepository) InsertAccount(name string, rekeningProvider, number, idUser int64) error {
	sqlStmt := `
   INSERT INTO rekening_accounts (name, number, rekening_provider_id, user_id) 
   VALUES (?, ?, ?, ?)
   `

	_, err := r.db.Exec(sqlStmt, name, rekeningProvider, number, idUser)

	if err != nil {
		return err
	}

	return nil
}
