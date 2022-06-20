package domains

type Book struct {
	ID             int64  `db:"id"`
	Title          string `db:"title"`
	Author         string `db:"author"`
	Description    string `db:"description"`
	Cover          string `db:"cover"`
	PageNumber     int64  `db:"page_number"`
	Stock          int64  `db:"stock"`
	Deposit        int64  `db:"deposit"`
	CategoryName   string `db:"category_name"`
	LibraryName    string `db:"library_name"`
	LibraryAddress string `db:"library_address"`
	IsPublish      bool   `db:"is_publish"`
	CreatedAt      string `db:"created_at"`
	UpdatedAt      string `db:"upddated_at"`
}

type CreateBook struct {
	Title       string `db:"title"`
	Author      string `db:"author"`
	Description string `db:"description"`
	Cover       string `db:"cover"`
	PageNumber  int64  `db:"page_number"`
	Stock       int64  `db:"stock"`
	Deposit     int64  `db:"deposit"`
	CategoryId  int64  `db:"category_id"`
	LibraryId   int64  `db:"library_id"`
	IsPublish   bool   `db:"is_publish"`
}

type BookRepository interface {
	Insert(title, author, description, cover string, pageNumber, stock, deposit, categoryId, libraryId int64) (Book, error)
	// Update(title, author, description, cover string, pageNumber, stock, deposit, categoryId, id int64) (Book, error)
	GetBookById(id int64) (Book, error)
	GetAllBook() ([]Book, error)
}

type BookUsecase interface {
	Add(book CreateBook) (Book, error)
	GetAll() ([]Book, error)
	GetById(book Book) (Book, error)
}
