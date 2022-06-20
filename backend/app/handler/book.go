package handler

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rg-km/final-project-engineering-16/backend/app/presenter"
	"github.com/rg-km/final-project-engineering-16/backend/commons/exceptions"
	"github.com/rg-km/final-project-engineering-16/backend/domains"
)

type idBook struct {
	Id int64 `json:"id" form:"id"`
}

type insertBook struct {
	Title       string `json:"title" form:"title"`
	Author      string `json:"author" form:"author"`
	Description string `json:"description" form:"description"`
	Cover       string `json:"cover" form:"cover"`
	PageNumber  int64  `json:"page_number" form:"page_number"`
	Stock       int64  `json:"stock" form:"stock"`
	Deposit     int64  `json:"deposit" form:"deposit"`
	CategoryId  int64  `json:"category_id" form:"category_id"`
	LibraryId   int64  `json:"library_id" form:"library_id"`
	IsPublish   bool   `json:"is_publish" form:"is_publish"`
}

func (i *idBook) ToGetByIdBookDomain() domains.Book {
	return domains.Book{
		ID: i.Id,
	}
}

func (d *insertBook) ToInsertBookDomain() domains.CreateBook {
	return domains.CreateBook{
		Title:       d.Title,
		Author:      d.Author,
		Description: d.Description,
		Cover:       d.Cover,
		PageNumber:  d.PageNumber,
		Stock:       d.Stock,
		Deposit:     d.Deposit,
		CategoryId:  d.CategoryId,
		LibraryId:   d.LibraryId,
		IsPublish:   d.IsPublish,
	}
}

// func ToGetAllBookDomain() domains.Book {
// 	return
// }
type BookController struct {
	bookUsecase domains.BookUsecase
}

func NewBookController(b domains.BookUsecase) BookController {
	return BookController{
		bookUsecase: b,
	}
}

func (b BookController) GetBookById(c *gin.Context) {
	req := idBook{}

	if err := c.Bind(&req); err != nil {
		presenter.ErrorResponse(c, http.StatusBadRequest, exceptions.ErrBadRequest)
		return
	}

	domain := req.ToGetByIdBookDomain()

	res, err := b.bookUsecase.GetById(domain)

	if err != nil {
		if errors.Is(err, exceptions.ErrBadRequest) {
			presenter.ErrorResponse(c, http.StatusBadRequest, exceptions.ErrBadRequest)
			return
		}
	}

	responseFromDomain := presenter.FetchBookDefault(res)
	presenter.SuccessResponse(c, http.StatusOK, responseFromDomain)
}

func (b BookController) GetAllBook(c *gin.Context) {
	res, err := b.bookUsecase.GetAll()
	if err != nil {
		presenter.ErrorResponse(c, http.StatusBadRequest, exceptions.ErrInternalServerError)
		return
	}

	response := make([]presenter.Book, len(res))

	for i, book := range res {
		response[i] = presenter.FetchBookDefault(book)
	}

	presenter.SuccessResponse(c, http.StatusOK, response)
}

func (b BookController) InsertBook(c *gin.Context) {
	req := insertBook{}

	if err := c.Bind(&req); err != nil {
		presenter.ErrorResponse(c, http.StatusBadRequest, exceptions.ErrBadRequest)
		return
	}

	domain := req.ToInsertBookDomain()

	res, err := b.bookUsecase.Add(domain)

	if err != nil {
		if errors.Is(err, exceptions.ErrBadRequest) {
			presenter.ErrorResponse(c, http.StatusBadRequest, exceptions.ErrBadRequest)
			return
		}
	}

	responseFromDomain := presenter.FetchBookDefault(res)

	presenter.SuccessResponse(c, http.StatusOK, responseFromDomain)
}
