package domains

type Rekening struct {
	ID           int64  `json:"id"`
	Name         string `json:"name"`
	Number       int64  `json:"number"`
	RekeningId   string `json:"rekening_id"`
	RekeningName string `json:"rekening_name"`
	Rekeningype  string `json:"rekening_type"`
}

type RekeningRepository interface {
	InsertAccount(name string, rekeningProviderId, number, idUser int64) error
	FetchAccountById(id int64) (Rekening, error)
	// UpdateAccount(rekening Rekening, idUser int64) (Rekening, error)
}

type RekeningUsecase interface {
	InsertAccount(name string, rekeningProviderId, number, idUser int64) error
	// GetAccountById(id int64) (Rekening, error)
	// UpdateAccount(rekening Rekening, idUser int64) (Rekening, error)
}
