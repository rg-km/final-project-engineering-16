package presenter

import "github.com/rg-km/final-project-engineering-16/backend/domains"

type Book struct {
	ID           int64  `json:"id"`
	KatalogId    string `json:"katalogId,omitempty"`
	Title        string `json:"title"`
	Author       string `json:"author,omitempty"`
	Description  string `json:"description,omitempty"`
	Cover        string `json:"cover"`
	PageNumber   int64  `json:"pageNumber,omitempty"`
	Stock        int64  `json:"stock,omitempty"`
	Deposit      int64  `json:"deposit,omitempty"`
	CategoryName string `json:"categoryName,omitempty"`
	LibraryName  string `json:"libraryName,omitempty"`
}

func FetchBookDefault(b domains.Book) Book {
	return Book{
		ID:           b.ID,
		KatalogId:    b.KatalogId,
		Title:        b.Title,
		Author:       b.Author,
		Description:  b.Description,
		Cover:        b.Cover,
		PageNumber:   b.PageNumber,
		Stock:        b.Stock,
		Deposit:      b.Deposit,
		CategoryName: b.CategoryName,
		LibraryName:  b.LibraryName,
	}
}
