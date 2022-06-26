package handler

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/rg-km/final-project-engineering-16/backend/domains"
)

type Rekening struct {
	ID           int64  `json:"id" form:"id"`
	Name         string `json:"name" form:"name"`
	Number       int64  `json:"number" form:"number"`
	RekeningId   string `json:"rekening_id" form:"rekening_id"`
	RekeningName string `json:"rekening_name" form:"rekening_name"`
	Rekeningype  string `json:"rekening_type" form:"rekening_type"`
}

func (r *Rekening) ToRekeningDomain() domains.Rekening {
	return domains.Rekening{
		ID:           r.ID,
		Name:         r.Name,
		Number:       r.Number,
		RekeningId:   r.RekeningId,
		RekeningName: r.RekeningName,
		Rekeningype:  r.Rekeningype,
	}
}

type RekeningController struct {
	rekeningUsecase domains.RekeningUsecase
}

func NewRekeningController(rekeningUsecase domains.RekeningUsecase) RekeningController {
	return RekeningController{
		rekeningUsecase: rekeningUsecase,
	}
}

func (r RekeningController) InsertAccount(c *gin.Context) {
	paramsId := c.Param("id")

	id, err := strconv.Atoi(paramsId)

	if err != nil {
		presenter
	}
}
