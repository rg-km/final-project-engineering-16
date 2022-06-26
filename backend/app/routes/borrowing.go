package routes

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	"github.com/rg-km/final-project-engineering-16/backend/app/handler"
	"github.com/rg-km/final-project-engineering-16/backend/app/middleware"
	"github.com/rg-km/final-project-engineering-16/backend/infrastructures/repository"
	"github.com/rg-km/final-project-engineering-16/backend/usecases"
)

func InitRoutesBorrowing(db *sql.DB, route *gin.Engine) {
	cartRepository := repository.NewCartRepository(db)
	// cartUsecase := usecases.NewCartUsecase(cartRepository)
	// cartController := handler.NewCartController(cartUsecase)

	borrowingRepository := repository.NewBorrowingRepository(db)
	bookRepository := repository.NewBookRepository(db)
	borrowingUsecase := usecases.NewBorrowingUsecase(borrowingRepository, bookRepository, cartRepository)
	borrowingController := handler.NewBorrowingController(borrowingUsecase)

	apiv1 := route.Group("/api/v1")
	{
		borrowing := apiv1.Group("/borrowing")
		{
			borrowing.Use(middleware.AuthorizeJWT(), middleware.AuthMiddleware("user"))
			borrowing.GET("/", borrowingController.ShowBorrowingByUserID)
		}
		// cart.GET("/:id", cartController.GetCartByID)
		// cart.POST("/", cartController.InsertToCart)
		// cart.POST("/checkout", borrowingController.InsertToBorrowing)
		// cart.DELETE("/:id", cartController.DeleteCartByID)
		// }
	}
}
