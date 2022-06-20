package presenter

import "github.com/rg-km/final-project-engineering-16/backend/domains"

type Book struct {
	ID           int64  `json:"id"`
	Title        string `json:"title"`
	Author       string `json:"author"`
	Description  string `json:"description"`
	Cover        string `json:"cover"`
	PageNumber   int64  `json:"page_number"`
	Stock        int64  `json:"stock"`
	Deposit      int64  `json:"deposit"`
	CategoryName string `json:"categoryName"`
	LibraryName  string `json:"libraryName"`
}

func FetchBookDefault(b domains.Book) Book {
	return Book{
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
