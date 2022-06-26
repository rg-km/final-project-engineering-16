package routes

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	"github.com/rg-km/final-project-engineering-16/backend/app/handler"

	"github.com/rg-km/final-project-engineering-16/backend/app/middleware"
	"github.com/rg-km/final-project-engineering-16/backend/infrastructures/repository"
	"github.com/rg-km/final-project-engineering-16/backend/usecases"
)

func InitRoutesLibrary(db *sql.DB, route *gin.Engine) {
	bookRepository := repository.NewBookRepository(db)
	cartRepository := repository.NewCartRepository(db)
	borrowingRepository := repository.NewBorrowingRepository(db)
	borrowingUsecase := usecases.NewBorrowingUsecase(borrowingRepository, bookRepository, cartRepository)
	borrowingController := handler.NewBorrowingController(borrowingUsecase)

	libraryRepository := repository.NewLibraryRepository(db)
	libraryUsecase := usecases.NewLibraryUsecase(libraryRepository)
	libraryController := handler.NewLibraryController(&libraryUsecase)

	apiv1 := route.Group("/api/v1")
	{
		// apiv1.Use(middleware.AuthorizeJWT(), middleware.AuthMiddleware("library"))
		lib := apiv1.Group("/library")
		{
			lib.GET("/", libraryController.GetAllLibrary)
		}
		{
			lib.GET("/:id", libraryController.GetLibraryByID)
		}
		{
			lib.PUT("/:id", middleware.AuthorizeJWT(), middleware.AuthMiddleware("library"), middleware.ValidateIDMiddleware(), libraryController.UpdateLibraryProfileByID)
		}
		{
			lib.GET("/borrowing", borrowingController.ShowBorrowingByLibraryID)
		}
		{
			lib.GET("/book/:id", middleware.AuthorizeJWT(), middleware.AuthMiddleware("library"), middleware.ValidateIDMiddleware(), libraryController.GetAllBookById)
		}
		{
			lib.POST("/book/:id", middleware.AuthorizeJWT(), middleware.AuthMiddleware("library"), middleware.ValidateIDMiddleware(), libraryController.InsertBook)
		}
		{
			lib.PUT("/book/:id", middleware.AuthorizeJWT(), middleware.AuthMiddleware("library"), middleware.ValidateIDMiddleware(), libraryController.UpdateBook)
		}
	}

}
