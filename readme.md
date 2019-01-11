#LOGIN AND LOGOUT 
- url [ /user/login ] [ username , password ] 
- url [ /user/logout ] [ token ]

#CART 
- url [ /cart/add_to_cart ] [ token , product_id ] 
- url [ /cart/remove_item_from_cart ] [ token , product_id ]
- url [ /cart/get_cart ] [ token ]
- url [ /cart/delete_cart ] [ token ]
- url [ /cart/update_cart ] [ token , product_id, qty ]

#ORDER
- url [ /order/add_sales_order ] [ token ]
- url [ /order/sales_history ] [ token ]

#PRODUCT DISPLAYING
- url [ /products ] [ token , description , start , per_page , category_id ]  if category_id == 0|null|'', select all

#PRODUCT CATEGORY
- url [ /product_category ] [ token ]

##System requirements
- Php 7.1
- Apache/Nginx
- Composer
- Git
- Sql Server
- Sql Driver installed and configured in php