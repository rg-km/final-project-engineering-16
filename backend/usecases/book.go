package usecases

import (
	"github.com/rg-km/final-project-engineering-16/backend/commons/exceptions"
	"github.com/rg-km/final-project-engineering-16/backend/domains"
)

type BookUsecase struct {
	Repo domains.BookRepository
}

func NewBookUsecase(repo domains.BookRepository) BookUsecase {
	return BookUsecase{
		Repo: repo,
	}
}

func (b BookUsecase) FetchBookById(book domains.Book) (domains.Book, error) {
	books, err := b.Repo.GetBookById(book.ID)

	if err != nil {
		return domains.Book{}, exceptions.ErrBadRequest
	}

	return books, nil
}

func (b BookUsecase) FetchAllBook(book domains.Book) ([]domains.Book, error) {
	books, err := b.Repo.GetAllBook()

	if err != nil {
		return []domains.Book{}, exceptions.ErrInternalServerError
	}

	return books, nil
}

func (b BookUsecase) InsertBook(book domains.CreateBook) (domains.Book, error) {
	books, err := b.Repo.Insert(book.Title, book.Author, book.Description, book.Cover, book.PageNumber, book.Stock, book.Deposit, book.CategoryId, book.LibraryId)

	if err != nil {
		return domains.Book{}, exceptions.ErrInternalServerError
	}

	return books, nil
}
