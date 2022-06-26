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
	bookRepository := repository.NewBookRepository(db)
	cartRepository := repository.NewCartRepository(db)
	borrowingRepository := repository.NewBorrowingRepository(db)
	borrowingUsecase := usecases.NewBorrowingUsecase(borrowingRepository, bookRepository, cartRepository)
	borrowingController := handler.NewBorrowingController(borrowingUsecase)

	apiv1 := route.Group("/api/v1")
	{
		borrowing := apiv1.Group("/borrowing")
		{
			showAll := borrowing.Group("/")
			showAll.Use(middleware.AuthorizeJWT(), middleware.AuthMiddleware("user"))
			{
				showAll.GET("/", borrowingController.ShowBorrowingByUserID)
			}
		}
		{
			borrowing.GET("/:id", borrowingController.GetBorrowingByID)
		}
		// cart.POST("/", cartController.InsertToCart)
		// cart.POST("/checkout", borrowingController.InsertToBorrowing)
		// cart.DELETE("/:id", cartController.DeleteCartByID)
		// }
	}
}
