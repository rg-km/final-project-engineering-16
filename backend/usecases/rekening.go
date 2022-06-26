package usecases

import (
	"github.com/rg-km/final-project-engineering-16/backend/commons/exceptions"
	"github.com/rg-km/final-project-engineering-16/backend/domains"
)

type RekeningUsecase struct {
	Repo domains.RekeningRepository
}

func NewRekeningUsecase(repo domains.RekeningRepository) RekeningUsecase {
	return RekeningUsecase{
		Repo: repo,
	}
}

func (r RekeningUsecase) InsertAccount(name string, rekeningProviderId, number, idUser int64) error {

	err := r.Repo.InsertAccount(name, rekeningProviderId, number, idUser)

	if err != nil {
		return exceptions.ErrBadRequest
	}

	return nil
}
